import { useState, useLayoutEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Projects from '../Data/Projects';

function Project() {

  const { name } = useParams();
  const [article, setArticle] = useState(Projects[name]);
  const firstUpdate = useRef(true);

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    setArticle(Projects[name]);
  }, [name]);

  return (
    <div className="content-container">
      <div className="article">
        <h1 className="article-title">{article.title}</h1>
        <span className="article-bold">Technologies: </span>
        <span className="article-technologies">{article.technologies.join(', ')}</span>
        {article.source ?
          <div>
            <span className="article-bold">Github repository: </span><a href={article.source} className="article-source" target="_blank" rel="noreferrer">{article.source}</a>
          </div>
          :
          null
        }
        {article.video ?
          <div>
            <span className="article-bold">Video demo: </span><a href={article.video} className="article-source" target="_blank" rel="noreferrer">{article.video}</a>
          </div>
          :
          null
        }
        <div className="article-description">{article.description}</div>
        {article.chapters.map(chapter => (
          <div key={chapter.title} className="article-chapter" >
            <h3 id={chapter.title}>{chapter.title}</h3>
            <div>{chapter.description}</div>
          </div>
        ))}
        <h3 id="Software-Used">Software Used</h3>
        <ul className="software-list">
          {article.software.map(software => (
            <li key={software}>{software}</li>
          ))}
        </ul>
      </div>
      <div className="sidebar">
        <ul>
          {article.chapters.map(chapter => (
            <li key={chapter.title}>
              <a key={chapter.title} href={"#" + chapter.title}>{chapter.title}</a>
            </li>
          ))}
          <li key="Software-Used-Link" >
            <a key="Software-Used-Link" href="#Software-Used">Software Used</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Project;
