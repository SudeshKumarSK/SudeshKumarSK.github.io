import { useState } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import { BsSpotify } from "react-icons/bs";
import CircularProgress from "@mui/material/CircularProgress";
import "./ArtistTeam.css";
import NoResults from "../NoResults";

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

interface ArtistTeamProps {
  artistDetails: ArtistDetails | null;
}
const ArtistTeam = ({ artistDetails }: ArtistTeamProps) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: any, e: any) => {
    console.log(selectedIndex);

    setIndex(selectedIndex);
  };
  return (
    artistDetails?.musicFlag ? (
      <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
        {artistDetails?.data.map((artistDetail, index) => (
        <Carousel.Item key={index}>
          <div className="mb-3">
              <div className="container artist-details">
                <div className="row">
                  <div className="col-12 col-md-4">
                    <div className="container">
                      <div className="row text-center">
                        <div className="col-12">
                          {artistDetail.image ? (
                            <img
                              style={{
                                width: "160px",
                                height: "150px",
                                borderRadius: "50%",
                              }}
                              src={artistDetail.image}
                              alt="artistImage"
                            />
                          ) : (
                            "-"
                          )}
                          <h4 style={{ marginTop: "20px", color: "#27E1C1" }}>
                            {artistDetail.name}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-8">
                    <div className="container" style={{ marginBottom: "40px" }}>
                      <div className="row text-center">
                        <div className="col-12 col-md-auto">
                          <h5 style={{ marginTop: "20px", color: "#27E1C1" }}>
                            Popularity
                          </h5>
                          <p className="details">
                            {artistDetail.popularity ? (
                              <CircularProgress
                                variant="determinate"
                                value={artistDetail.popularity}
                                style={{ color: "red" }}
                              />
                            ) : (
                              "-"
                            )}
                          </p>
                        </div>

                        <div className="col-12 col-md-auto">
                          <h5 style={{ marginTop: "20px", color: "#27E1C1" }}>
                            Followers
                          </h5>
                          <h5 className="details">
                            {artistDetail.followers
                              ? artistDetail.followers.toLocaleString()
                              : "-"}
                          </h5>
                        </div>

                        <div className="col-12 col-md-auto">
                          <h5 style={{ marginTop: "20px", color: "#27E1C1" }}>
                            Spotify Link
                          </h5>
                          <a
                            href={artistDetail?.spotifyLink}
                            rel="noopener"
                            target="_blank"
                          >
                            <BsSpotify
                              size={40}
                              style={{ color: "#54B435" }}
                            ></BsSpotify>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row" style={{ marginTop: "60px" }}>
                  <div className="col-12">
                    <div className="container">
                      <div className="row text-left">
                        <div className="col-12">
                          <h5
                            style={{
                              marginTop: "20px",
                              color: "#27E1C1",
                              padding: "20px",
                            }}
                          >{`Albums Featuring ${artistDetail.name}`}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="container">
                      <div className="row text-center justify-content-center">
                        <div className="col-12 col-md-auto">
                          {artistDetail.albums[0] ? (
                            <img
                              style={{
                                width: "160px",
                                height: "150px",
                                marginTop: "20px",
                              }}
                              src={artistDetail.albums[0]}
                              alt="albumImage-0"
                            />
                          ) : (
                            "-"
                          )}
                        </div>

                        <div className="col-12 col-md-auto">
                          {artistDetail.albums[1] ? (
                            <img
                              style={{
                                width: "160px",
                                height: "150px",
                                marginTop: "20px",
                              }}
                              src={artistDetail.albums[1]}
                              alt="albumImage-1"
                            />
                          ) : (
                            "-"
                          )}
                        </div>

                        <div className="col-12 col-md-auto">
                          {artistDetail.albums[2] ? (
                            <img
                              style={{
                                width: "160px",
                                height: "150px",
                                marginTop: "20px",
                              }}
                              src={artistDetail.albums[2]}
                              alt="albumImage-2"
                            />
                          ) : (
                            "-"
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </Carousel.Item>
        ))}
        </Carousel>):
        (
          
            <NoResults>No music related artist details to show</NoResults>
        
        )
          
  );
};

export default ArtistTeam;
