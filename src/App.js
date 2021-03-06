import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/login/login";
import Home from "./components/home/home";
import Main from "./components/main/main";
import Team from "./components/main/Team/team";
import Service from "./components/main/Services/service";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/userDashboard" element={<Main />} />
          <Route exact path="/userDashboard/team" element={<Team />} />
          <Route exact path="/userDashboard/services" element={<Service />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
