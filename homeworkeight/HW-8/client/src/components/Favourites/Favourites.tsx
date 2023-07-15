import NoResults from "../NoResults";
import { useState, useEffect } from "react";
import { BsTrash } from "react-icons/bs";
import "./Favourites.css";

interface FavouritesProp {
  eventId: string;
  eventName: string;
  eventDate: string;
  category: string;
  venue: string;
}
const Favourites = () => {

  const [favourites, setFavourites] = useState<FavouritesProp[]>([]);

  useEffect(() => {
    const storedFavourites = localStorage.getItem("favouritesList");
    if (storedFavourites) {
      setFavourites(JSON.parse(storedFavourites));
    }
  }, []);

  const handleRemove = (favourite: FavouritesProp) => {
    const updatedFavourites = favourites.filter(
      (fav) => fav.eventId !== favourite.eventId
    );
    setFavourites(updatedFavourites);
    localStorage.setItem("favouritesList", JSON.stringify(updatedFavourites));
    alert("Removed from favourites!")
  };

  return (
    <>
      {favourites.length !== 0 ? (
        <div
          className="container"
          style={{ marginTop: "100px", marginBottom: "50px" }}
        >
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-10 col-12">
              <div className="table-responsive-md ">
                <table className="table table-light table-striped rounded-table">
                  <thead>
                    <tr>
                      <th scope="col" className="text-center">
                        #
                      </th>
                      <th scope="col" className="text-center">
                        Date
                      </th>
                      <th scope="col" className="text-center">
                        Event
                      </th>
                      <th scope="col" className="text-center">
                        Category
                      </th>
                      <th scope="col" className="text-center">
                        Venue
                      </th>
                      <th scope="col" className="text-center">
                        Favorite
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {favourites.map((fav, index) => (
                      <tr key={index}>
                        <td id="td-sno" className="text-center">
                          {index + 1}
                        </td>
                        <td id="td-date" className="text-center">
                          {fav.eventDate || "-"}
                        </td>
                        <td id="td-event" className="text-center">
                          {fav.eventName || "-"}
                        </td>
                        <td id="td-category" className="text-center">
                          {fav.category || "-"}
                        </td>
                        <td id="td-venue" className="text-center">
                          {fav.venue || "-"}
                        </td>
                        <td id="td-trash" className="text-center">
                          <BsTrash size={30} onClick={() => handleRemove(fav)}>
                            {" "}
                          </BsTrash>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <NoResults>No favourite events to show</NoResults>
      )}
    </>
  );
};

export default Favourites;
