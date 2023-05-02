// Importing all necessary libraries, styles and components.
import { useState } from "react";
import Form from "./components/Form";
import Favourites from "./components/Favourites";
import { BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom';
import "./App.css";


const App = () => {
  // creating states for setting the className and id for the buttons in the nav-bar.
  const [activeTab, setActiveTab] = useState<string>("search");
  const [searchButtonClass, setSearchButtonClass] = useState("active-li");
  const [favButtonClass, setFavButtonClass] = useState("nav-li");

    const handleSearch = () => {
        setActiveTab("search");
        setSearchButtonClass("active-li")
        setFavButtonClass("nav-li")
    }

    const handleFav = () => {
        setActiveTab("fav");
        setFavButtonClass("active-li")
        setSearchButtonClass("nav-li")

    }
  return (
    <>
      <Router>
      <nav className="nav bg-transparent" style={{padding: "20px"}}>
        <ul className="nav-ul">
          <li onClick={handleSearch} className={searchButtonClass}>
            <Link className="nav-li-a" to="/search">Search</Link>
          </li>
          <li onClick={handleFav} className={favButtonClass}>
            <Link className="nav-li-a" to="/favourites">Favourites</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/search" element={<Form />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path='/' element={<Navigate to='/search' />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
