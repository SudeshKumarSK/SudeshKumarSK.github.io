// Importing all necessary libraries, styles and components.
import { useState } from "react";
import Form from "./components/Form";
import Favourites from "./components/Favourites";
import { Link } from 'react-router-dom';
import "./App.css";


const App = () => {

  // creating states for setting the className and id for the buttons in the nav-bar.
  const [searchButtonClass, setSearchButtonClass] = useState("btn btn-outline-light");
  const [favButtonClass, setFavButtonClass] = useState("btn btn-color");

  const [searchButtonId, setSearchButtonId] = useState("");
  const [favButtonId, setFavButtonId] = useState("btn-color");

  // creating states to show components based on the clicking of search or favourites button on the nav-bar.
  const [showForm, setShowForm] = useState(true);
  const [showFav, setShowFav] = useState(false);

  // Function to handle the click on the search button.
  const handleClickSearch = () => {
    setSearchButtonClass("btn btn-outline-light");
    setFavButtonClass("btn");
    setSearchButtonId("");
    setFavButtonId("btn-color");
    setShowForm(true);
    setShowFav(false);
  };

  // Function to handle the click on the favourites button.
  const handleClickFav = () => {
    setFavButtonClass("btn btn-outline-light");
    setSearchButtonClass("btn");
    setFavButtonId("");
    setSearchButtonId("btn-color");
    setShowFav(true);
    setShowForm(false);
  };

  return (
    <>
      <nav className="navbar bg-body-tertiary ">
        <form className="container-fluid justify-content-end">
          <button id={searchButtonId} className={searchButtonClass} type="button" onClick={handleClickSearch}>
            Search
          </button>
          <button id={favButtonId} className={favButtonClass} type="button" onClick={handleClickFav}>
            Favourites
          </button>
        </form>
      </nav>

      {showForm ? <div id="form-shift" className="container">
        <Form />
      </div> : null};
      
      {showFav ? <Favourites/> : null}
    </>
  );
};

export default App;
