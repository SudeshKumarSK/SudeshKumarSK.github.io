import { FormEvent, useState } from "react";
import { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Table from "../Table";
import NoResults from "../NoResults";
import EventCard from "../EventsCard";
import "./Form.css";

// Declaring the SearchDetails to prop to create eventSearchResponse prop of type list of SearchDetails which will be passed to
// the Table component after populating it with the response from the /api/eventsearch endpoint.
interface SearchDetails {
  event: string | null;
  localDate: string | null;
  localTime: string | null;
  genre: string | null;
  venue: string | null;
  icon: string | null;
  id: string | null;
}

// Declaring the EventDetails prop.
interface EventDetails {
  artist: (string | null)[];
  priceRanges: {
    min: number | null;
    max: number | null;
  };
  localDate: string | null;
  localTime: string | null;
  venue: string | null;
  cityName: string | null;
  subGenre: string | null;
  genre: string | null;
  segment: string | null;
  type: string | null;
  subType: string | null;
  ticketStatus: string | null;
  saleUrl: string | null;
  seatMap: string | null;
}

// Declaring the VenueDetails prop.
interface VenueDetails {
  address: {
    line1: string | null;
    city: string | null;
    state: string | null;
    lat: number | null;
    lng: number | null;
  };
  name: string | null;
  phoneNumber: string | null;
  openHours: string | null;
  generalRule: string | null;
  childRule: string | null;
}

interface ArtistDetails {
  musicFlag: boolean;
  data: {
    name: string | null;
    image: string | null;
    popularity: number | null;
    followers: number | null;
    spotifyLink: string;
    albums: (string | null)[];
  }[];
}

interface EventCard {
  eventId: string | null;
  eventName: string | null;
  eventDate: string | null;
}

// Form component.
const Form = () => {
  // Creating the state variable to display Table component or the Events Card component or No Results component.
  const [showEventCard, setShowEventCard] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [showNoResults, setShowNoResults] = useState(false);

  const [eventSearchResponse, setEventSearchResponse] = useState<
    SearchDetails[]
  >([]);

  const [eventDetailsResponse, setEventDetailsResponse] =
    useState<EventDetails | null>(null);

  const [venueDetailsResponse, setVenueDetailsResponse] =
    useState<VenueDetails | null>(null);

  const [artistDetailsResponse, setArtistDetailsResponse] =
    useState<ArtistDetails | null>(null);

  const [eventCardData, setEventCardData] = useState<EventCard | null>(null);

  // state variable to control the options produced in the drop-down to perform autocomplete.
  const [dropDown, setDropDown] = useState<string[]>([]);

  // state variable to set the locationDisabled state which is used by disabled and required properties.
  const [locationDisabled, setLocationDisabled] = useState(false);

  // state variable to set the location state which is used in handleCheckbox.
  const [location, setLocation] = useState<string>("");

  // state variable which will be sent to App component or the backend.
  const [eventSearch, setEventSearch] = useState({
    keyword: "",
    distance: 10,
    category: "",
    location: "",
  });

  /* useEffect(() => {
  console.log(eventCardData);  
});
 */

  // function to fetch the autocomplete options from the /api/autocomplete endpoint.
  const autocompleteData = async (inputValue: string) => {
    let res: string[] = [];

    try {
      const autoCompleteResponse = await fetch(
        `/api/autocomplete?keyword=${inputValue}`,
        {
          method: "GET",
          mode: "cors",
          cache: "no-cache",
          credentials: "omit",
          referrerPolicy: "no-referrer",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const jsonData = await autoCompleteResponse.json();
      if (jsonData["status"]) {
        res = jsonData["data"];
        setDropDown(res);
      } else {
        setDropDown(res);
      }
    } catch (error) {
      console.error(error);
      setDropDown(res);
    }
  };

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
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    console.log("Submitted");
    console.log(eventSearch);
    try {
      const encodedEventSearch = encodeURIComponent(
        JSON.stringify(eventSearch)
      );
      const nodeapi = "https://server-dot-webtech-hw-8.wl.r.appspot.com";
      const url = `/api/eventsearch?data=${encodeURIComponent(
        encodedEventSearch
      )}`;

      const response = await fetch(url, {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "omit",
        referrerPolicy: "no-referrer",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const jsonData = await response.json();

      // We set the showTable state as false and showNoResults state as true. So that only NoResults component is visible
      if (jsonData["status"] == false || jsonData["data"] == null) {
        setShowTable(false);
        setShowNoResults(true);
        setShowEventCard(false);
        console.log(
          "Successfully received response from /api/eventsearch for NO RESULTS FOUND!"
        );
        console.log("No Results Found for Events Search");
      } else {
        // Populating the newEventSearchResponse on type SearchDetails[] with the data we got from /api/eventsearch.
        const newEventSearchResponse: SearchDetails[] = jsonData["data"].map(
          (item: any) => ({
            event: item.event || null,
            localDate: item.localDate || null,
            localTime: item.localTime || null,
            genre: item.genre || null,
            venue: item.venue || null,
            icon: item.icon || null,
            id: item.id || null,
          })
        );

        // setting the state of EventSearchResponse to pass as prop to Table component. When we have response, we set the
        // showTable state as true and showNoResults state as false. So that only Table component is visible
        setEventSearchResponse(newEventSearchResponse);
        setShowTable(true);
        setShowNoResults(false);
        setShowEventCard(false);
        console.log(
          "Successfully received response from /api/eventsearch with actual data!"
        );
      }
    } catch (error) {
      // We set the showTable state as false and showNoResults state as true when we go into the catch block.
      // So that only NoResults component is visible.
      console.error(error);
      console.error("Failed to received response from /api/eventsearch");
      console.error("No Results Found for Events Search");
      setShowTable(false);
      setShowEventCard(false);
      setShowNoResults(true);
    }
  };

  // User-defined function to reset the form fields when the clear button is clicked.
  const handleClear = () => {
    setEventSearchResponse([]);
    setShowNoResults(false);
    setShowTable(false);
    setLocationDisabled(false);
    setLocation("");
    setEventSearch({
      ...eventSearch,
      keyword: "",
      distance: 10,
      category: "",
      location: "",
    });
    setShowTable(false);
    setShowNoResults(false);
    setShowEventCard(false);
    console.log("Cleared the entire form fields!");
  };

  // Handling the change of data in the keyword text box to perform autocomplete using material UI by calling the auto
  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    autocompleteData(event.target.value);
    setEventSearch({
      ...eventSearch,
      keyword: event.target.value,
    });
  };

  const fetchArtistData = async (eventId: string | null) => {
    try {
      console.log("Performing Fetching of Artist Data!");

      const nodeapi = "https://server-dot-webtech-hw-8.wl.r.appspot.com";
      const artistDetailsurl = `/api/artistdetails?id=${eventId}`;
      fetch(artistDetailsurl, {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "omit",
        referrerPolicy: "no-referrer",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((artistDetailsJsonData) => {
          console.log(artistDetailsJsonData);
          const artistData = artistDetailsJsonData["data"];
          const newArtistDetailsResponse: ArtistDetails = {
            musicFlag: artistData.musicFlag,
            data: artistData.data.map((item: any) => {
              return {
                name: item.name || null,
                image: item.image || null,
                popularity: item.popularity || null,
                followers: item.followers || null,
                spotifyLink: item.spotifyLink,
                albums: item.albums || [],
              };
            }),
          };
          console.log(
            "Successfully received response from /api/artistdetails!"
          );
          setArtistDetailsResponse(newArtistDetailsResponse);
        })
        .catch((err) => {
          console.error(err);
          console.error("Failed to receive response from /api/artistdetails");
          console.error("No Results Found for Artist Details");
        });
    } catch (error) {
      console.error(error);
      console.error("Failed to receive response from /api/artistdetails");
      console.error("No Results Found for Artist Details");
    }
  };

  const handleSelectEvent = async (
    eventId: string | null,
    eventName: string | null,
    eventDate: string | null
  ) => {
    setEventCardData({
      eventId: eventId,
      eventName: eventName,
      eventDate: eventDate,
    });
    console.log("Clicked on a particular event!");

    // We set the showTable state as false and showNoResults state as true. So that only NoResults component is visible
    const nodeapi = "https://server-dot-webtech-hw-8.wl.r.appspot.com";
    let venue: any = null;
    try {
      const eventDetailsurl = `/api/eventdetails?id=${eventId}`;
      const eventDetailsResponse = await fetch(eventDetailsurl, {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "omit",
        referrerPolicy: "no-referrer",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const eventDetailsJsonData = await eventDetailsResponse.json();

      if (
        eventDetailsJsonData["status"] == false ||
        eventDetailsJsonData["data"] == null
      ) {
        console.log(
          "Successfully received response from /api/eventdetails for NO RESULTS FOUND!"
        );
        console.log("No Results Found for Event Details!");
      } else {
        venue = eventDetailsJsonData["data"].venue;
        const eventData = eventDetailsJsonData.data;

        // Populating the newEventDetailsResponse on type EventDetails with the data we got from /api/eventdetails.
        const newEventDetailsResponse: EventDetails = {
          artist: eventData.artist.filter((a: any) => a !== null),
          priceRanges: {
            min: eventData.priceRanges.min || null,
            max: eventData.priceRanges.max || null,
          },
          localDate: eventData.localDate || null,
          localTime: eventData.localTime || null,
          venue: eventData.venue || null,
          cityName: eventData.cityName || null,
          subGenre: eventData.subGenre || null,
          genre: eventData.genre || null,
          segment: eventData.segment || null,
          type: eventData.type || null,
          subType: eventData.subType || null,
          ticketStatus: eventData.ticketStatus || null,
          saleUrl: eventData.saleUrl || null,
          seatMap: eventData.seatMap || null,
        };

        console.log(
          "Successfully received response from /api/eventdetails with actual data!"
        );
        console.log(newEventDetailsResponse);
        setEventDetailsResponse(newEventDetailsResponse);
      }
    } catch (error) {
      console.error(error);
      console.error("Failed to receive response from /api/eventdetails");
      console.error("No Results Found for Event Details");
    }

    try {
      const encodedVenueName = encodeURIComponent(JSON.stringify(venue));

      const venueDetailsurl = `/api/venuedetails?venue=${encodedVenueName}`;
      const venueDetailsResponse = await fetch(venueDetailsurl, {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "omit",
        referrerPolicy: "no-referrer",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const venueDetailsJsonData = await venueDetailsResponse.json();

      if (
        venueDetailsJsonData["status"] == false ||
        venueDetailsJsonData["data"] == null
      ) {
        console.log(
          "Successfully received response from /api/venuedetails for NO RESULTS FOUND!"
        );
        console.log("No Results Found for Venue Details!");
      } else {
        const venueData = venueDetailsJsonData.data;

        // Populating the newEventDetailsResponse on type EventDetails with the data we got from /api/eventdetails.
        const newVenueDetailsResponse: VenueDetails = {
          address: {
            line1: venueData.address.line1 || null,
            city: venueData.address.city || null,
            state: venueData.address.state || null,
            lat: venueData.address.lat || null,
            lng: venueData.address.lng || null,
          },
          name: venueData.name || null,
          phoneNumber: venueData.phoneNumber || null,
          openHours: venueData.openHours || null,
          generalRule: venueData.generalRule || null,
          childRule: venueData.childRule || null,
        };

        console.log(
          "Successfully received response from /api/venuedetails with actual data!"
        );
        console.log(newVenueDetailsResponse);
        setVenueDetailsResponse(newVenueDetailsResponse);
      }
    } catch (error) {
      console.error(error);
      console.error("Failed to receive response from /api/venuedetais");
      console.error("No Results Found for Venue Details");
    }

    fetchArtistData(eventId);

    setShowEventCard(true);
    setShowTable(false);
  };

  const handleBackClick = () => {
    setShowEventCard(false);
    setShowTable(true);
  };

  return (
    <div className="container">
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
                <Autocomplete
                  freeSolo
                  id="keyword"
                  options={dropDown}
                  disableClearable={true}
                  value={eventSearch.keyword}
                  onChange={(event, value) => {
                    if (value) {
                      setEventSearch({
                        ...eventSearch,
                        keyword: value,
                      });
                    }
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      required
                      onChange={(event) => {
                        handleChange(event);
                      }}
                      variant="outlined"
                      style={{
                        background: "white",
                        borderRadius: "10px",
                        border: "none",
                      }}
                      size="small"
                    />
                  )}
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
      {showTable ? (
        <Table
          searchDetails={eventSearchResponse}
          onSelectEvent={handleSelectEvent}
        />
      ) : null}
      {showNoResults ? <NoResults> No results available </NoResults> : null}
      {showEventCard ? (
        <EventCard
          eventCardData={eventCardData}
          eventDetails={eventDetailsResponse}
          venueDetails={venueDetailsResponse}
          artistDetails={artistDetailsResponse}
          onBackClick={handleBackClick}
        />
      ) : null}
    </div>
  );
};

// exporting the Form Component.
export default Form;
