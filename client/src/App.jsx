import "./App.css";
import Home from "../src/components/Home.jsx/Home";
import { Routes, Route } from "react-router-dom";
import Favorites from "../src/components/Favorites/Favorites"
import Detail from "./components/Detail /Detail";
import LocationCard from "./components/LocationCard/LocationCard";
import LocationHome from "./components/LocationCard/LocationHome";
import About from "./components/About/About";
import Paginado from "./components/Paginado/Paginado";
function App() {


  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path="/locations" element={<LocationHome/>} />
        <Route path="/about" element={<About/>} /> 
        <Route path="/paginado" element={<Paginado/>} />
      </Routes>
  );
}

export default App;