import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import "./EventCard.css";
import Events from "../Events";
import Venue from "../Venue";
import ArtistTeam from "../ArtistTeam";
import { Alert } from "react-bootstrap"; 

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
}

interface EventCardProp {
  eventDetails: EventDetails | null;
  venueDetails: VenueDetails | null;
  eventCardData: EventCard | null;
  artistDetails: ArtistDetails | null;
  onBackClick: () => void;
}

interface Favourites{
  eventId: string;
  eventName: string;
  category: string;
  venue: string;

}
interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const EventsCard = ({
  eventCardData,
  eventDetails,
  venueDetails,
  artistDetails,
  onBackClick,
}: EventCardProp) => {
  const checkEvent = () => {
    const favouritesListString: string | null = localStorage.getItem("favouritesList");
    let localStoredList: Favourites[] = [];
    if (favouritesListString) {
      localStoredList = JSON.parse(favouritesListString);
    }
    const isEventIdPresent = localStoredList.find(favourite => favourite.eventId === eventCardData?.eventId) !== undefined;

    return isEventIdPresent;
  }

  const theme = useTheme();
  const [activeTab, setActiveTab] = useState(0);
  const [favourite, setFavourite] = useState<boolean>(checkEvent());

  
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(`New Value : ${newValue}`);
    setActiveTab(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setActiveTab(index);
  };

  const removeFavourite = () => {
    const favouritesListString: string | null = localStorage.getItem("favouritesList");
    let localStoredList: Favourites[] = [];
    if (favouritesListString) {
      localStoredList = JSON.parse(favouritesListString);
    }

    localStoredList = localStoredList.filter((item: Favourites) => item.eventId !== eventCardData?.eventId )
    // setFavouriteList(localStoredList)
    localStorage.setItem("favouritesList", JSON.stringify(localStoredList))
    console.log("Removed from Favouries!");
    console.log(localStoredList);
    
    setFavourite(false);
  }

  const handleFavourites = () => {
    const favouritesListString: string | null = localStorage.getItem("favouritesList");
    let localStoredList: Favourites[] = [];
    if (favouritesListString) {
      localStoredList = JSON.parse(favouritesListString);
    }
   
    const newFavourite: Favourites = {
      eventId: (eventCardData?.eventId)? eventCardData?.eventId : "",
      eventName:(eventCardData?.eventName)? eventCardData?.eventName : "",
      category: "Music",
      venue: (venueDetails?.name) ?venueDetails?.name: ""
    }
    
    localStoredList.push(newFavourite);
    localStorage.setItem("favouritesList", JSON.stringify(localStoredList))

    console.log(localStoredList);
    
    // setFavouriteList(localStoredList);
    setFavourite(true);
    console.log("Added to Favouries!");
    alert("Added to Favourites!")
    
  }

  /* useEffect(() => {
    console.log(favouritesList);  
  }); */

  return (
    <>
    <div className="mb-3" style={{ marginTop: "100px", marginBottom: "50px" }}>
      <div className="row justify-content-center">
        <div className="col-xl-8 col-lg-10 col-md-12 col-12">
          <div className="event-container">
            <div className="back-container" onClick={onBackClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                />
              </svg>
              <p className="text-decoration-underline back">back</p>
            </div>

            <div className="mb-3">
              <div className="heading-container">
                <div className="row text-center">
                  <div className="col-12">
                    <h3
                      style={{ display: "inline-block", marginRight: "10px" }}
                    >
                      {eventCardData?.eventName}
                    </h3>
                    {favourite ?
                    (<AiFillHeart
                      size={35}
                      className="heart-icon"
                      style={{ color: "red" }}
                      onClick={removeFavourite}
                    />) : (
                      <AiOutlineHeart
                      size={35}
                      className="heart-icon"
                      style={{ color: "#E4DCCF" }}
                      onClick={handleFavourites}
                    />
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="col-2 col-lg-4">
                  {<BsCircleFill size={40} className="circle-icon" />}
                  <AiOutlineHeart
                    size={35}
                    className="heart-icon"
                    style={{ color: "#E4DCCF" }}
                  />
                </div> */}

            <div className="mb-3">
              <div className="tab-container">
                <div className="row justify-content-center">
                  <div className="col-12">
                    <AppBar
                      position="relative"
                      style={{ backgroundColor: "#38A3A5" }}
                    >
                      <Tabs
                        value={activeTab}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="inherit"
                        variant="fullWidth"
                        // centered
                      >
                        <Tab label="Events" />
                        <Tab label="Artist/Team" />
                        <Tab label="Venue" />
                      </Tabs>
                    </AppBar>

                    {/* {activeTab == 0 && (
                    <Box sx={{ p: 3 }}>
                      <EventDetails/>
                    </Box>
                  )} */}

                    {
                      <SwipeableViews
                        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                        index={activeTab}
                        onChangeIndex={handleChangeIndex}
                      >
                        <TabPanel
                          value={activeTab}
                          index={0}
                          dir={theme.direction}
                        >
                          <Events eventDetails={eventDetails} eventName={eventCardData?.eventName || null}/>
                        </TabPanel>
                        <TabPanel
                          value={activeTab}
                          index={1}
                          dir={theme.direction}
                        >
                          <ArtistTeam artistDetails={artistDetails}/>
                        </TabPanel>
                        <TabPanel
                          value={activeTab}
                          index={2}
                          dir={theme.direction}
                        >
                          <Venue venueDetails={venueDetails} />
                        </TabPanel>
                      </SwipeableViews>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default EventsCard;
