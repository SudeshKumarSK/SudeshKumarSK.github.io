import "./Venue.css";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { useState } from "react";
import MapModal from "../MapModal";

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

// Defining props for VenueDetails.
interface VenueDetailsProp {
  venueDetails: VenueDetails | null;
}

const Venue = ({ venueDetails }: VenueDetailsProp) => {
  const [wrappedChildRule, setWrappedChildRule] = useState(true);
  const [wrappedGeneralRule, setWrappedGeneralRule] = useState(true);
  const [wrappedOpenHours, setWrappedOpenHours] = useState(true);

  const [map, setMap] = useState((venueDetails?.address.lat) && (venueDetails?.address.lng));
  const [showModal, setShowModal] = useState(false);

  
  const formatAddress = (
    line1: string | null,
    city: string | null,
    state: string | null
  ) => {
    const address = [line1, city, state];
    const nonNulladdress = address.filter((addr) => addr !== null);
    const categoryString = nonNulladdress.join(", ");
    return categoryString;
  };

  const handleToggle = (toggler: number) => {
    if (toggler == 0) setWrappedOpenHours(!wrappedOpenHours);
    else if (toggler == 1) setWrappedGeneralRule(!wrappedGeneralRule);
    else setWrappedChildRule(!wrappedChildRule);
  };

  const handleTextWrap = (text: string, toggler: number) => {
    const togglerList = [
      wrappedOpenHours,
      wrappedGeneralRule,
      wrappedChildRule,
    ];
    if (text || null) {
      if (text.length <= 50) {
        return <p className="details">{text}</p>;
      } else {
        const summary = !togglerList[toggler]
          ? text
          : `${text.slice(0, 50)}...`;
        return (
          <>
            <p className="details">{summary}</p>
            <p
              className="text-decoration-underline wrapper-text"
              style={{ color: "#332FD0", cursor: "pointer" }}
              onClick={() => {
                handleToggle(toggler);
              }}
            >
              {togglerList[toggler] ? "Show More" : "Show Less"}
            </p>
            {togglerList[toggler] ? (
              <GoChevronDown
                className="wrapper-icon"
                onClick={() => {
                  handleToggle(toggler);
                }}
              >
                {" "}
              </GoChevronDown>
            ) : (
              <GoChevronUp
                className="wrapper-icon"
                onClick={() => {
                  handleToggle(toggler);
                }}
              >
                {" "}
              </GoChevronUp>
            )}
          </>
        );
      }
    }
  };

  const handleGoogleMap = () => {
      setShowModal(true);

  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="mb-3">
      <div className="event-details">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="container">
              <div className="row text-center">
                <div className="col-12">
                  {venueDetails?.name ? (
                    <div className="mb-3">
                      <h5 className="heading">Name</h5>
                      <p className="details">{venueDetails?.name}</p>
                    </div>
                  ) : null}

                  {venueDetails?.address.line1 ||
                  venueDetails?.address.city ||
                  venueDetails?.address.state ? (
                    <div className="mb-3">
                      <h5 className="heading">Address</h5>
                      <p className="details">
                        {formatAddress(
                          venueDetails?.address.line1,
                          venueDetails?.address.city,
                          venueDetails?.address.state
                        )}
                      </p>
                    </div>
                  ) : null}
                </div>

                {venueDetails?.phoneNumber ? (
                  <div className="mb-3">
                    <h5 className="heading">Phone Number</h5>
                    <p className="details">{venueDetails?.phoneNumber}</p>
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="row text-center justify-content-center">
              <div className="col-12">
                {venueDetails?.openHours ? (
                  <div className="mb-3">
                    <h5 className="heading">Open Hours</h5>
                    {handleTextWrap(venueDetails?.openHours, 0)}
                  </div>
                ) : null}

                {venueDetails?.generalRule ? (
                  <div className="mb-3">
                    <h5 className="heading">General Rule</h5>
                    {handleTextWrap(venueDetails?.generalRule, 1)}
                  </div>
                ) : null}

                {venueDetails?.childRule ? (
                  <div className="mb-3">
                    <h5 className="heading">Child Rule</h5>
                    {handleTextWrap(venueDetails?.childRule, 2)}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
      <div className="container event-details">
        <div className="row text-center justify-content-center">
          <div className="col-12">
          {map? (<button className="btn btn-danger" onClick={handleGoogleMap}>
              Show Venue on Google Map
            </button>) : null}
              <div className="mb-3">
                <MapModal
                  show={showModal}
                  onClose={closeModal}
                  googleApiKey="AIzaSyASYq8w8xkwuoTkczscmHr_qj0K2I9gz-4"
                  latitude={(venueDetails?.address.lat)? venueDetails.address.lat : -1}
                  longitude={(venueDetails?.address.lng)? venueDetails.address.lng : -1}
                />
              </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Venue;
