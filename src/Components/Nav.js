import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { CSSTransition } from 'react-transition-group';

function Nav() {
  const [projectsExpanded, setProjectsExpanded] = useState(false);
  const [appsExpanded, setAppsExpanded] = useState(false);
  const nodeRef = useRef(null);

  const expandProjectsMenu = () => {
    if (projectsExpanded) {
      setProjectsExpanded(false);
    } else {
      setProjectsExpanded(true);
    }
  };

  const expandAppsMenu = () => {
    if (appsExpanded) {
      setAppsExpanded(false);
    } else {
      setAppsExpanded(true);
    }
  };

  return (
    <nav className="nav">
      <Link className="nav-button" to="/">
        <img className="logo" src="../Logo.svg"/>
      </Link>
      <div className="nav-button main-button" onClick={expandProjectsMenu}>Projects</div>
      <CSSTransition
        in={projectsExpanded}
        nodeRef={nodeRef}
        timeout={200}
        classNames="nav-list"
        unmountOnExit
      >
        <div ref={nodeRef} className='nav-list'>
          <Link className="nav-button sub-button" to="/projects/sotnrandotools">SotnRandoTools</Link>
          <Link className="nav-button sub-button" to="/projects/khaos">Khaos</Link>
          <Link className="nav-button sub-button" to="/projects/racebot">Race Bot</Link>
          <Link className="nav-button sub-button" to="/projects/replays">Replays</Link>
          <Link className="nav-button sub-button" to="/projects/pathfinder">Pathfinder</Link>
          <Link className="nav-button sub-button" to="/projects/sotnapi">SotnApi</Link>
          <Link className="nav-button sub-button" to="/projects/wiki">FrontlsideWiki</Link>
          <Link className="nav-button sub-button" to="/projects/other">Other</Link>
        </div>
      </CSSTransition>
      <div className="nav-button main-button" onClick={expandAppsMenu}>Apps</div>
      <CSSTransition
        in={appsExpanded}
        nodeRef={nodeRef}
        timeout={200}
        classNames="nav-list"
        unmountOnExit
      >
        <div ref={nodeRef}className='nav-list'>
          <Link className="nav-button sub-button" to="/apps/sotnrandotools">SotnRandoTools</Link>
          <Link className="nav-button sub-button" to="/apps/replays">Replays</Link>
          <Link className="nav-button sub-button" to="/apps/timer">Segmented Timer</Link>
        </div>
      </CSSTransition>
      <Link className="nav-button main-button" to="/links">Links</Link>
      <a className="nav-button main-button" href="https://www.paypal.com/donate?hosted_button_id=5F8565K23F2F8">Donate</a>
    </nav>
  );
}

export default Nav;