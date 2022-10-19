import cat1 from '../Assets/cat/cat1.jpg';
import cat2 from '../Assets/cat/cat2.jpg';
import cat3 from '../Assets/cat/cat3.jpg';

function AboutMe() {
  return (
    <div className="about">
      <h1>About Me</h1>
      <div>
        <div className="about-intro">
          <div>
            <p>
              Hello! My name is Kamen, but you can call me Talic. I&apos;m a software developer based in Sofia, Bulgaria.
            </p>
            <p>
              I&apos;m passionate about building interesting systems and tools in the web or gaming sphere. I enjoy learning new technologies and using new APIs.
            </p>
          </div>
          <div className="about-photo"></div>
        </div>
        <p className="about-chapter">My hobbies include playing electric guitar, speedrunning and commentary.</p>
      </div>
      <div className="about-chapter">
        <span>Technologies I&apos;ve used for projects recently:</span>
        <ul className="about-list">
          <li>C#</li>
          <li>Node.js</li>
          <li>Javascript</li>
          <li>React</li>
        </ul>
      </div>
      <div className="about-chapter">
        <h1>Cat</h1>
        <div className="slideshow">
          <img className="photo" src={cat1} />
          <img className="photo" src={cat2} />
          <img className="photo" src={cat3} />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;