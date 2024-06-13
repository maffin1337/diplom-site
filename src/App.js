import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from "./Components/Navibar";
import Footer from "./Components/Footer";
import { BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import {Home} from "./Pages/Home";
import {News} from "./Pages/News";
import {Classes} from "./Pages/Classes";
import {About} from "./Pages/About";
import {Contest} from "./Pages/Contest";
import {AddNews} from "./Pages/AddNews";
import {Login} from "./Pages/Login";
import {Register} from "./Pages/Register";

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
      <Route path="/addnews" Component={AddNews} />
      <Route path="/login" Component={Login} />
      <Route path='/register' Component={Register} />
    </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;
