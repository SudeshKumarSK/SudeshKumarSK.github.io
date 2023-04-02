import "./Form.css";
import { FormEvent, useState } from "react";

// Form component.
const Form = () => {

  // state variable to set the locationDisabled state which is used by disabled and required properties.
  const [locationDisabled, setLocationDisabled] = useState(false);

  // state variable to set the location state which is used in handleCheckbox.
  const [location, setLocation] = useState("");

  // state variable which will be sent to App component or the backend.
  const [eventSearch, setEventSearch] = useState({
    keyword: "",
    distance: 10,
    category: "",
    location: "",
  });

  // User-defined function to handle the checkbox functionality when Auto-Detect is ON.
  const handleCheckbox = async (event: React.ChangeEvent<HTMLInputElement>) => {

    // changing the state variables.
    setLocationDisabled(event.target.checked);
    setLocation("");

    // Making a GET Request to the ipinfo api to get the current location details when Auto-Detect is ON.
    if (event.target.checked) {
      console.log("Check-box is checked!");

      try {
        const response = await fetch(
          "https://ipinfo.io/json?token=bab2690c3e129d"
        );

        const data = await response.json();
        console.log(
          `Auto-Detected Location is: ${data["city"] + ", " + data["region"]}`
        );

        // Changing the location key in the eventSearch state variable.
        setEventSearch({
          ...eventSearch,
          location: data["city"] + ", " + data["region"],
        });
      } catch (error) {
        console.log(error);
      }
    } else console.log("Check-box is un-checked!");
  };

  // User-defined function to handle the submit button of the form.
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("Submitted");
    console.log(eventSearch);
  };

  // User-defined function to reset the form fields when the clear button is clicked.
  const handleClear = () => {
    setLocationDisabled(false);
    setLocation("");
    setEventSearch({
      ...eventSearch,
      keyword: "",
      distance: 10,
      category: "",
      location: "",
    });

    console.log("Cleared the entire form fields!");
    
  };

  return (
    <div className="container custom-margin">
      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-8 col-md-10 col-12">
          <div className="search-container">
            <h1>Events Search</h1>
            <hr
              className="border border-white border-2 opacity-50"
              id="hr-btm"
            ></hr>

            <form
              id="events-search-form"
              onSubmit={(event) => {
                handleSubmit(event);
              }}
            >
              <div className="mb-3">
                <label htmlFor="keyword" className="label">
                  Keyword<span className="req"> *</span>
                </label>
                <input
                  onChange={(event) =>
                    setEventSearch({
                      ...eventSearch,
                      keyword: event.target.value,
                    })
                  }
                  value={eventSearch.keyword}
                  type="text"
                  className="form-control"
                  id="keyword"
                  required
                />
              </div>

              <div className="mb-3">
                <div className="row align-items-center g-3">
                  <div className="col-12 col-md-8">
                    <label
                      htmlFor="distance"
                      className="label"
                      style={{ display: "inline-block" }}
                    >
                      Distance
                    </label>
                    <input
                      onChange={(event) =>
                        setEventSearch({
                          ...eventSearch,
                          distance: parseInt(event.target.value),
                        })
                      }
                      type="number"
                      className="form-control"
                      id="distance"
                      value={eventSearch.distance}
                    />
                  </div>

                  <div className="col-8 col-md-4">
                    <label
                      htmlFor="category"
                      className="label"
                      style={{ display: "inline-block" }}
                    >
                      Category<span className="req"> *</span>
                    </label>
                    <select
                      value={eventSearch.category}
                      onChange={(event) =>
                        setEventSearch({
                          ...eventSearch,
                          category: event.target.value,
                        })
                      }
                      className="form-select"
                      id="category"
                    >
                      <option value="">Default</option>
                      <option value="KZFzniwnSyZfZ7v7nJ">Music</option>
                      <option value="KZFzniwnSyZfZ7v7nE">Sports</option>
                      <option value="KZFzniwnSyZfZ7v7na">Arts</option>
                      <option value="KZFzniwnSyZfZ7v7na">Theatre</option>
                      <option value="KZFzniwnSyZfZ7v7nn">Film</option>
                      <option value="KZFzniwnSyZfZ7v7n1">Miscellaneous</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="location" className="label">
                  Location<span className="req"> *</span>
                </label>
                <input
                  onChange={(event) => {
                    setEventSearch({
                      ...eventSearch,
                      location: event.target.value,
                    });
                    setLocation(event.target.value);
                  }}
                  type="text"
                  className="form-control"
                  id="location"
                  disabled={locationDisabled}
                  value={location}
                  required={!locationDisabled}
                />
              </div>

              <div className="mb-3">
                <div className="row g-2">
                  <div className="col-auto">
                    <input
                      onChange={(event) => handleCheckbox(event)}
                      className="form-check-input"
                      type="checkbox"
                      id="checkBox"
                    />
                  </div>

                  <div className="col-auto">
                    <label
                      className="form-check-label label"
                      htmlFor="checkBox"
                    >
                      Auto-Detect your location
                    </label>
                  </div>
                </div>
              </div>

              <div className="mb-3"></div>
              <div className="row text-center">
                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-danger mx-1"
                    form="events-search-form"
                    value="search"
                  >
                    Submit
                  </button>
                  <button
                    type="reset"
                    className="btn btn-primary mx-1"
                    form="events-search-form"
                    value="clear"
                    onClick={handleClear}
                  >
                    Clear
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// exporting the Form Component.
export default Form;
