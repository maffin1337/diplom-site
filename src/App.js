import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from "./Components/Navibar";
import { BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import {Home} from "./Pages/Home";
import {News} from "./Pages/News";
import {Classes} from "./Pages/Classes";
import {About} from "./Pages/About";
import {Contest} from "./Pages/Contest";

function App() {
  return (
    <>
    <Router>
    <NaviBar/>
    <Routes>
      <Route exact path="/" Component={Home} />
      <Route path="/news" Component={News} />
      <Route path="/classes" Component={Classes} />
      <Route path="/about" Component={About} />
      <Route path="/contest" Component={Contest} />
    </Routes>
    </Router>
    </>
  );
}

export default App;
