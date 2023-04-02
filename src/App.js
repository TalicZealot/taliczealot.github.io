import Project from './Components/Project';
import Nav from './Components/Nav';
import AboutMe from './Components/AboutMe';
import Links from './Components/Links';
import { Routes, Route } from "react-router-dom";
import Application from './Components/Application';
import ReplayPlayer from './Components/ReplayPlayer';
import SegmentedTimer from './Components/SegmentedTimer';
import NotFound from './Components/NotFound';

function App() {

  return (
    <div className="app">
      <svg className="small-cog" version="1.1" viewBox="0 0 52.917 52.917" xmlns="http://www.w3.org/2000/svg">
        <path transform="scale(.26458)" d="m100 11.951a88.049 88.049 0 0 0-13.283 1.0156l-5.916 16.893a72.771 72.771 0 0 0-16.648 6.834l-16.227-7.6172a88.049 88.049 0 0 0-19.039 19.107l7.6562 16.254a72.771 72.771 0 0 0-6.875 17.082l-16.828 6.207a88.049 88.049 0 0 0-0.88867 12.273 88.049 88.049 0 0 0 1.0879 13.672l16.895 5.8047a72.771 72.771 0 0 0 7.2793 17.279l-7.5918 16.057a88.049 88.049 0 0 0 18.643 18.361l15.992-7.8125a72.771 72.771 0 0 0 16.812 6.8496l5.9492 16.869a88.049 88.049 0 0 0 12.982 0.96875 88.049 88.049 0 0 0 13.354-1.0274l6.2012-16.977a72.771 72.771 0 0 0 16.973-7.1133l16.021 7.6406a88.049 88.049 0 0 0 18.389-18.518l-7.6328-16.205a72.771 72.771 0 0 0 7.127-17.74l16.752-6.041a88.049 88.049 0 0 0 0.86524-12.068 88.049 88.049 0 0 0-1.0606-13.625l-16.871-5.8262a72.771 72.771 0 0 0-6.9277-16.637l7.5352-16.348a88.049 88.049 0 0 0-18.922-18.752l-16.098 7.7793a72.771 72.771 0 0 0-17.369-7.0117l-5.8945-16.738a88.049 88.049 0 0 0-12.441-0.89062zm0 54.479a33.571 33.571 0 0 1 33.57 33.57 33.571 33.571 0 0 1-33.57 33.57 33.571 33.571 0 0 1-33.57-33.57 33.571 33.571 0 0 1 33.57-33.57z" />
      </svg>
      <svg className="big-cog" version="1.1" viewBox="0 0 52.917 52.917" xmlns="http://www.w3.org/2000/svg">
        <path transform="scale(.26458)" d="m101.03 16.99-5.1016 12.369a70.803 70.803 0 0 0-20.996 4.457l-9.6602-9.1934a83.035 83.035 0 0 0-13.232 7.6387l3.1328 12.963a70.803 70.803 0 0 0-14.357 15.957l-13.236-1.7637a83.035 83.035 0 0 0-6.1953 13.971l10.16 8.6504a70.803 70.803 0 0 0-2.3691 17.975 70.803 70.803 0 0 0 0.125 3.3516l-11.73 6.3496a83.035 83.035 0 0 0 3.125 14.949l13.311 1.0274a70.803 70.803 0 0 0 10.746 18.617l-5.7656 12.039a83.035 83.035 0 0 0 11.387 10.182l11.363-6.9844a70.803 70.803 0 0 0 19.592 8.7188l2.4121 13.125a83.035 83.035 0 0 0 15.195 1.6211l5.0918-12.346a70.803 70.803 0 0 0 20.996-4.4551l9.6602 9.1934a83.035 83.035 0 0 0 13.232-7.6387l-3.1328-12.963a70.803 70.803 0 0 0 14.357-15.955l13.236 1.7617a83.035 83.035 0 0 0 6.1953-13.969l-10.16-8.6543a70.803 70.803 0 0 0 2.3691-17.971 70.803 70.803 0 0 0-0.08399-3.3789l11.736-6.3496a83.035 83.035 0 0 0-3.1699-14.924l-13.309-1.0273a70.803 70.803 0 0 0-10.748-18.619l5.7656-12.043a83.035 83.035 0 0 0-11.34-10.209l-11.371 6.9941a70.803 70.803 0 0 0-19.641-8.7422l-2.4121-13.131a83.035 83.035 0 0 0-15.178-1.5938zm-1.0293 48.836a34.174 34.174 0 0 1 34.174 34.174 34.174 34.174 0 0 1-34.174 34.174 34.174 34.174 0 0 1-34.174-34.174 34.174 34.174 0 0 1 34.174-34.174z" />
      </svg>
      <Nav />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<AboutMe />} />
          <Route path="/projects/:name" element={<Project />} />
          <Route path="/apps/:name" element={<Application />} />
          <Route path="/apps/timer" element={<SegmentedTimer />} />
          <Route path="/apps/replays" element={<ReplayPlayer />} />
          <Route path="/links" element={<Links />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;