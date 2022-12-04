import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/navbar";
import Home from "./pages/home";
import Registration from './pages/register'
import Login from './pages/login'
import About from './pages/about'
import Contect from './pages/contect'
import Logout from './pages/logout'

import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contect" element={<Contect />}></Route>
        <Route path="/register" element={<Registration />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
      </Routes>
    </div>
  );
}

export default App;
