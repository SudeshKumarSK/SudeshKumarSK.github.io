import "./Events.css";
import { BsTwitter } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";

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

interface EventDetailsProp {
  eventDetails: EventDetails | null;
  eventName: string | null;
}

const EventDetails = ({ eventDetails, eventName }: EventDetailsProp) => {
  const text = encodeURIComponent(`Check out ${eventName} on Ticketmaster`);
  const handleGenres = (
    segment: string | null,
    genre: string | null,
    subGenre: string | null,
    type: string | null,
    subType: string | null
  ) => {
    const categories = [segment, genre, subGenre, type, subType];
    const nonNullCategories = categories.filter((cat) => cat !== null);
    const categoryString = nonNullCategories.join(" | ");
    return categoryString;
  };

  const handleArtistTeam = (artistDetails: any) => {
    const nonNullArtists = artistDetails?.filter(
      (artist: string | null) => artist !== null
    );
    const categoryString = nonNullArtists?.join(" | ");
    return categoryString;
  };

  const handlePriceRanges = (
    minimumPrice: number | null,
    maximumPrice: number | null
  ) => {
    const prices = [String(minimumPrice), String(maximumPrice)];
    const nonNullPrices = prices.filter((price) => price !== null);
    const categoryString = nonNullPrices.join(" - ");
    return categoryString;
  };

  const getDivColor = (ticketStatus: string | null) => {
    if (ticketStatus == "onsale") return "green";
    else if (ticketStatus == "offsale") return "red";
    else if (ticketStatus == "canceled") return "black";
    else if (ticketStatus == "rescheduled") return "orange";
    else if (ticketStatus == "postponed") return "orange";
  };

  const getTicketStatus = (ticketStatus: string | null) => {
    if (ticketStatus == "onsale") return "On Sale";
    else if (ticketStatus == "offsale") return "Off Sale";
    else if (ticketStatus == "canceled") return "Canceled";
    else if (ticketStatus == "rescheduled") return "Rescheduled";
    else if (ticketStatus == "postponed") return "Postponed";
  };

  const handleTwitter = () => {};

  return (
    <div className="mb-3">
      <div className="event-details">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="container">
              <div className="row text-center">
                <div className="col-12">
                  {eventDetails?.localDate ? (
                    <div className="mb-3">
                      <h5 className="heading">Date</h5>
                      <p className="details">{eventDetails?.localDate}</p>
                    </div>
                  ) : null}

                  {eventDetails?.artist ? (
                    <div className="mb-3">
                      <h5 className="heading">Artist/Team</h5>
                      <p className="details">
                        {handleArtistTeam(eventDetails?.artist)}
                      </p>
                    </div>
                  ) : null}

                  {eventDetails?.venue ? (
                    <div className="mb-3">
                      <h5 className="heading">Venue</h5>
                      <p className="details">{eventDetails?.venue}</p>
                    </div>
                  ) : null}

                  {eventDetails?.segment ||
                  eventDetails?.genre ||
                  eventDetails?.subGenre ||
                  eventDetails?.type ||
                  eventDetails?.subType ? (
                    <div className="mb-3">
                      <h5 className="heading">Genres</h5>
                      <p className="details">
                        {handleGenres(
                          eventDetails?.segment,
                          eventDetails?.genre,
                          eventDetails?.subGenre,
                          eventDetails?.type,
                          eventDetails?.subType
                        )}
                      </p>
                    </div>
                  ) : null}

                  {eventDetails?.priceRanges.min ||
                  eventDetails?.priceRanges.max ? (
                    <div className="mb-3">
                      <h5 className="heading">Price Ranges</h5>
                      <p className="details">
                        {handlePriceRanges(
                          eventDetails?.priceRanges.min,
                          eventDetails?.priceRanges.max
                        )}
                      </p>
                    </div>
                  ) : null}

                  {eventDetails?.ticketStatus ? (
                    <div className="mb-3">
                      <h5 className="heading">Ticket Status</h5>
                      <div className="row text-center justify-content-center">
                        <div
                          className="col-auto rounded"
                          style={{
                            backgroundColor: `${getDivColor(
                              eventDetails?.ticketStatus
                            )}`,
                          }}
                        >
                          <p className="details">
                            {getTicketStatus(eventDetails?.ticketStatus)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : null}

                  {eventDetails?.saleUrl ? (
                    <div className="mb-3">
                      <h5 className="heading">Buy Ticket At</h5>
                      <a
                        href={eventDetails?.saleUrl}
                        rel="noopener"
                        target="_blank"
                      >
                        Ticketmaster
                      </a>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="row text-center justify-content-center">
              <div className="col-12">
                {eventDetails?.seatMap ? (
                  <img
                    className="seat-map"
                    src={eventDetails?.seatMap}
                    alt="icon"
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container event-details">
        <div className="row text-center justify-content-center">
          <div className="col-12">
            <p className="share">Share On: </p>
            <a href={`https://twitter.com/intent/tweet?url=${eventDetails?.saleUrl}&text=${text}`} rel="noopener" target="_blank">
            <BsTwitter
              className="share"
              size={35}
              style={{ color: "#009EFF" }}
              onClick={handleTwitter}
            ></BsTwitter>
            </a>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${eventDetails?.saleUrl}&amp;src=sdkpreparse`} rel="noopener" target="_blank">
            <AiFillFacebook
              size={40}
              style={{ color: "#035397" }}
            ></AiFillFacebook>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
// https://twitter.com/intent/tweet?url=https://www.ticketmaster.com/taylor-swift-the-eras-tour-inglewood-california-08-05-2023/event/0A005D5CC01E3C42&text=Check%20out%20Taylor%20Swift%20|%20The%20Eras%20Tour
// https://twitter.com/intent/tweet?url=https://www.ticketmaster.com/taylor-swift-the-eras-tour-inglewood-california-08-05-2023/event/0A005D5CC01E3C42&text=Check%20out