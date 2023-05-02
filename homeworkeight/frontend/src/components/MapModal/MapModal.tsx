// import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";

import { Modal, Button } from "react-bootstrap";

interface MapModalProps {
  show: boolean;
  onClose: () => void;
  googleApiKey: string;
  latitude: number;
  longitude: number;
}

const MapModal = ({
  show,
  latitude,
  longitude,
  googleApiKey,
  onClose,
}: MapModalProps) => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: googleApiKey,
    id: "script-loader",
    version: "weekly",
  });

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header>
        <Modal.Title>Event Venue</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {isLoaded ? (
          <GoogleMap
            id="marker-example"
            mapContainerStyle={{
              height: "400px",
              width: "100%",
            }}
            zoom={15}
            center={{
              lat: latitude,
              lng: longitude,
            }}
          >
            <MarkerF
              position={{ lat: latitude, lng: longitude }}
              visible={true}
            />
          </GoogleMap>
        ) : (
          <div className="container">
            <p>Loading...</p>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <div className="container">
          <div className="row align-content-left">
            <div className="col-auto">
              <Button onClick={onClose} className="btn btn-dark">
                Close
              </Button>
            </div>
          </div>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default MapModal;
