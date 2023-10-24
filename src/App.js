import { Button } from "bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, Routes } from "react-router-dom";
import { First } from "react-bootstrap/esm/PageItem";
import Second from "./components/Second";
import Third from "./components/Third";
import Firstone from "./components/Firstone";
import Fifth from "./components/Fifth";
import Sixth from "./components/Sixth";
import Seventh from "./components/Seventh";
import Tenth from "./components/Tenth";
import Ninth from "./components/Ninth";
function App() {
  return (
    <>
      <ul className="d-flex align-items-center gap-5">
        <li>
          <Link to="/">Table</Link>
        </li>
        <li>
          <Link to="/second">Second question</Link>
        </li>
        <li>
          <Link to="/third">Third question</Link>
        </li>
        <li>
          <Link to="/fifth">Fifth question</Link>
        </li>
        <li>
          <Link to="/Sixth">Sixth question</Link>
        </li>
        <li>
          <Link to="/Seventh">Seventh question</Link>
        </li>
        <li>
          <Link to="/Seventh">Ninth question</Link>
        </li>
        <li>
          <Link to="/Tenth">Tenth question</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Firstone />} />
        <Route path="/second" element={<Second />} />
        <Route path="/third" element={<Third />} />
        <Route path="/fifth" element={<Fifth />} />
        <Route path="/Sixth" element={<Sixth />} />
        <Route path="/Seventh" element={<Seventh />} />
        <Route path="/Ninth" element={<Ninth />} />
        <Route path="/Tenth" element={<Tenth/>} />
      </Routes>
    </>
  );
}

export default App;
