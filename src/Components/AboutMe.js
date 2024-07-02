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
        <span>Languages and technologies I&apos;ve used for hobby projects recently:</span>
        <ul className="about-list">
          <li>C#</li>
          <li>Javascript</li>
          <li>Go</li>
          <li>C++</li>
        </ul>
        <ul className="about-list">
          <li>Node.js</li>
          <li>React</li>
          <li>OpenGL</li>
          <li>OpenAL</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutMe;