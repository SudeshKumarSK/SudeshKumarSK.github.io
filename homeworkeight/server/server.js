/* 
    server.js backend Nodejs server file.
    Created by Sudesh Kumar Santhosh Kumar
    Web Tech CSCi - 571 Assignment -> 8 
    
*/

// Importing all the necessary libraries and functions from helper.js file.
const express = require("express");
const geohash = require("ngeohash");
const SpotifyWebApi = require("spotify-web-api-node");
const ticketmaster = require("./utils/helper");
const cors = require("cors");
const port = process.env.PORT || 3000;

// Creating an instance for the express class().
const app = express()

app.use(cors());

// Initializing API Key for GCP Geocoding API and base url for Google API.
const gcp_API_KEY = "AIzaSyASYq8w8xkwuoTkczscmHr_qj0K2I9gz-4"
const gcpBaseUrl = "https://maps.googleapis.com/maps/api/geocode/json?"
const gcpParams = {
    'key' : gcp_API_KEY,
}

// Initializing API key  and base url for for the Ticket Master API.
const ticketMasterConfig = {
    "ticketMasterBaseUrl" : "https://app.ticketmaster.com/discovery/v2",
    "ticketMasterAPI_KEY" : "5oBFZdV8Bs6AmATQpFA7Bt015HQsC1TU",

    "ticketMasterParams" : {
        "apikey" : "5oBFZdV8Bs6AmATQpFA7Bt015HQsC1TU",
        "keyword" : null,
        "segmentId" : null,
        "radius" : null,
        "unit" : null,
        "geoPoint" : null
    },

    "ticketMasterHeader" : {'Accept': 'application/json'}
}

// Initializing Client ID and Client Secret for spotify API.
const spotifyConfig = {
    "clientId" : "93e1dd0f14a442b3967c7731e47c113f",
    "clintSecret" : "89c5504084b747f78d41ebf0061532d2"
};

app.get("/api/autocomplete", async(req,res) => {
    const response = {
        "status" : false,
        "data" : null
        }

    try{
        const keyword = decodeURIComponent(req.query.keyword);
        
        ticketMasterConfig["ticketMasterParams"]["keyword"] = keyword;

        const autocompleteResponse = await ticketmaster.performAutocomplete(ticketMasterConfig, "/suggest");
        if (autocompleteResponse["status"]){
            response["data"] = autocompleteResponse["data"];
        }
        else{
            throw Error("Couldn't get suggestions for the keyword passed!");
        }
        
        response["status"] = true;   
        // console.log(res.json()); 
        console.log(response["data"]);
        return res.json(response);

    }catch(error){
        console.error(error);
        return res.json(response);
    }
})  

app.get("/api/eventsearch", async(req, res) => {
    const response = {
        "status" : false,
        "data" : null
        }

    try{
        const eventData = JSON.parse(decodeURIComponent(req.query.data));
        // const keyword = req.query.keyword;
        // const distance = req.query.distance;
        // const category = req.query.category;
        // const location = req.query.location;

        let geoHash = null;

        try{
            gcpParams["address"] = eventData["location"];       
            const gcpResponse = await ticketmaster.getGeocoding(gcpBaseUrl, gcpParams);

            if (gcpResponse["status"]){
                geoHash = gcpResponse["geoHash"];
            }
            else{
                throw Error("Couldn't get the latitude and longitude from GCP!");
            }
        }catch(err){
            console.error(err);
        }
        
        // Adding parameter to the ticketMasterConfig.
        ticketMasterConfig["ticketMasterParams"]["keyword"] = eventData["keyword"]
        ticketMasterConfig["ticketMasterParams"]["segmentId"] = eventData["category"]
        ticketMasterConfig["ticketMasterParams"]["radius"] = eventData["distance"]
        ticketMasterConfig["ticketMasterParams"]["unit"] = "miles"
        ticketMasterConfig["ticketMasterParams"]["geoPoint"] = geoHash

        try {
            const eventSearchResponse = await ticketmaster.eventSearch(ticketMasterConfig, "/events.json?");
            if (eventSearchResponse["status"]){
                response["data"] = eventSearchResponse["data"];
            }
            else{
                throw Error("Couldn't search for the events with the given params!");
            }
        } catch (error) {
            console.error(error);
            return res.json(response);
            
        }

        response["status"] = true;   
        console.log("Sent the response object to React Front-end!"); 
        return res.json(response);

    }catch(error){
        console.error(error);
        console.error("Sent the response object from catch to React Front-end!"); 
        return res.json(response);
    }
})


app.get("/api/eventdetails", async(req, res) => {
    const response = {
        "status" : false,
        "data" : null
        }

    try{
        const eventId = decodeURIComponent(req.query.id);
        
        const eventDetailsResponse = await ticketmaster.eventDetails(ticketMasterConfig, "/events/" + eventId);
        if (eventDetailsResponse["status"]){
            response["data"] = eventDetailsResponse["data"];
        }
        else{
            throw Error("Couldn't get event details for the event ID being passed!");
        }
        
        response["status"] = true;    
        return res.json(response);

    }catch(error){
        console.error(error);
        return res.json(response);
    }
})


app.get("/api/venuedetails", async(req, res) => {
    const response = {
        "status" : false,
        "data" : null
        }

    try{
        const venue = decodeURIComponent(req.query.venue);

        ticketMasterConfig["ticketMasterParams"]["venue"] = venue;
        const venueDetailsResponse = await ticketmaster.venueDetails(ticketMasterConfig, "/venues/");
        if (venueDetailsResponse["status"]){
            response["data"] = venueDetailsResponse["data"];
        }
        else{
            throw Error("Couldn't get the venue details for the venue being passed!");
        }
        
        response["status"] = true;    
        return res.json(response);

    }catch(error){
        console.error(error);
        return res.json(response);
    }
})


app.get("/api/artistDetails", async(req, res) => {
    const response = {
        "status" : false,
        "data" : null
        }

    try{
        const eventId = decodeURIComponent(req.query.id);
        
        // Creating an instance of the SpotifyWebApi class().
        const spotifyApi = new SpotifyWebApi({
            clientId : spotifyConfig["clientId"],
            clientSecret : spotifyConfig["clintSecret"]
        })
        
        const artistDetailsResponse = await ticketmaster.artistDetails(ticketMasterConfig, "/events/" + eventId, spotifyApi);
        if (artistDetailsResponse["status"]){
            response["data"] = artistDetailsResponse["data"];
        }
        else{
            throw Error("Couldn't get the artists' details for the event ID being passed!");
        }
        
        response["status"] = true;    
        return res.json(response);

    }catch(error){
        console.error(error);
        return res.json(response);
    }
})



app.listen(port, () => {
    console.log('Server started on port 3000!');
  });