import { useState, useLayoutEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Applications from '../Data/Applications';

function Application() {

  const { name } = useParams();
  const [application, setApplication] = useState(Applications[name]);
  const firstUpdate = useRef(true);

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    setApplication(Applications[name]);
  }, [name]);

  return (
    <div className="content-container">
      <div className="article">
        <h1 className="article-title">{application.title}</h1>
        {application.release ?
          <h2>
            <a href={application.release} className="article-source" target="_blank" rel="noreferrer">Download Latest Release</a>
          </h2>
          :
          null
        }
        {application.setup ?
          <h2>
            <a href={application.setup} className="article-source" target="_blank" rel="noreferrer">Setup Instructions</a>
          </h2>
          :
          null
        }
        <div className="article-description">{application.description}</div>
        {application.chapters.map(chapter => (
          <div key={chapter.title} className="article-chapter" >
            <h2>{chapter.title}</h2>
            <div>{chapter.description}</div>
            {chapter.subchapters.map(subhcapter => (
              <div key={subhcapter.title} >
                <h3>{subhcapter.title}</h3>
                <div className="article-subchapter">
                  <div>{subhcapter.description}</div>
                  {subhcapter.list ?
                    <ul className="article-list">
                      {subhcapter.list.map(item => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    :
                    null
                  }
                  {subhcapter.colorBoxList ?
                    <ul className="article-list">
                      {subhcapter.colorBoxList.map(item => (
                        <li key={item.item}>
                          <div className={item.color}></div>
                          <span>{item.item}</span>
                        </li>
                      ))}
                    </ul>
                    :
                    null
                  }
                  {subhcapter.image ? <div className={subhcapter.image}></div> : null}
                </div>
              </div>
            ))}
          </div>
        ))}
        {application.source ?
          <div className="article-chapter">
            <span className="article-bold">Github repository: </span><a href={application.source} className="article-source" target="_blank" rel="noreferrer">{application.source}</a>
          </div>
          :
          null
        }
      </div>
    </div>
  );
}

export default Application;
