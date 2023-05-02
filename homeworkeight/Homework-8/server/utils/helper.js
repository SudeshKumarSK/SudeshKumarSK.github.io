

// Importing all necessary libraries
const axiosRequest = require("axios");
const geohash = require("ngeohash");


// Perform Autocomplete.
const performAutocomplete = async(ticketMasterConfig, urlAddOns) => {
    const response = {
        "status" : false,
        "data" : null
    }

    try {
        const ticketMasterParams = {
            "apikey" : ticketMasterConfig["ticketMasterParams"]["apikey"],
            "keyword" : ticketMasterConfig["ticketMasterParams"]["keyword"]
        }

        const ticketMasterHeader = {
            'Accept': 'application/json'
        }
        
        // Making a get request to the /venues endpoint and passing the venue as parameter to get information about the venue.
        const res = await axiosRequest.get(ticketMasterConfig["ticketMasterBaseUrl"] + urlAddOns, {
            params: ticketMasterParams,
            headers : ticketMasterHeader
        })

        const embedded = res["data"]["_embedded"];
        const attractions = embedded["attractions"]

        const attractionsList = [];
        
        for (const [index, attraction] of attractions.entries()){
            attractionsList.push(attraction["name"]);
        }

        response["status"] = true;
        response["data"] = attractionsList;

        return response;

    } catch (error) {
        console.error(error);
        return response;
    }
    
}
// getGeocoding() function makes a get request to the google's geocoding api and gets the latitude and longitude
// of the location passed as query parameters.
const getGeocoding = async(gcpBaseUrl, gcpParams) => {
    
    const response = {
        "status" : false,
        "geoHash" : null
    }

    try {
        const res = await axiosRequest.get(gcpBaseUrl, {
            params: gcpParams
        })
        gcpResponseData = res.data.results[0]
        console.log("Received Latitude and Longitude from GCP!");
        
        response["geoHash"] = geohash.encode(gcpResponseData.geometry.location.lat, gcpResponseData.geometry.location.lng, 5);
        response["status"] = true;

        return response;

    } catch (error) {
        console.error(error);
        return response;
    }
}


const getLatLng = async(fullLocation) => {

    const gcp_API_KEY = "AIzaSyASYq8w8xkwuoTkczscmHr_qj0K2I9gz-4";
    const gcpBaseUrl = "https://maps.googleapis.com/maps/api/geocode/json?";

    const gcpParams = {
    'key' : gcp_API_KEY
    }
    gcpParams["address"] = fullLocation


    const response = {
        "status" : false,
        "lat" : null,
        "lng" : null
    }

    try {
        const res = await axiosRequest.get(gcpBaseUrl, {
            params: gcpParams
        })
        gcpResponseData = res.data.results[0]
        console.log("Received Latitude and Longitude from GCP for Venue Details!");
        
        response["status"] = true;
        response.lat = gcpResponseData.geometry.location.lat;
        response.lng = gcpResponseData.geometry.location.lng;
        return response;

    } catch (error) {
        console.error(error);
        return response;
    }
}


// Helper function for the eventSearch() function.
const eventSearchHelper = (currentEvent) => {
    
    const currentEventJson = {}

    // Storing name of the event.
    try {
        const name = currentEvent["name"];
        currentEventJson["event"] = ((name != "Undefined") && (name != null) && (name != "")) ? name : null;
    } catch (error) {
        console.error(error);
        currentEventJson["event"] = null;
    }

    // Storing the local date and local time of the event.
    try {
        const dates = currentEvent["dates"];

        if ((dates["start"]["dateTBA"]) || (dates["start"]["dateTBD"])) currentEventJson["localDate"] = null;
        else{
            currentEventJson["localDate"] = ((dates["start"]["localDate"] != "Undefined") && (dates["start"]["localDate"] != null) && (dates["start"]["localDate"] != "")) ? dates["start"]["localDate"] : null;
        }

        if (dates["start"]["timeTBA"]) currentEventJson["localTime"] = null;
        else{
            currentEventJson["localTime"] = ((dates["start"]["localTime"] != "Undefined") && (dates["start"]["localTime"] != null) && (dates["start"]["localTime"] != "")) ? dates["start"]["localTime"] : null;
        }
            
    } catch (error) {
        console.error(error);
        currentEventJson["localDate"] = null;
        currentEventJson["localTime"] = null;
    }

    // Storing the Genre of the event.
    try {
        const classifications = currentEvent["classifications"][0];
        currentEventJson["genre"] = ((classifications["segment"]["name"] != "Undefined") && (classifications["segment"]["name"] != null) && (classifications["segment"]["name"] != "")) ? classifications["segment"]["name"] : null;

    } catch (error) {
        console.error(error);
        currentEventJson["genre"] = null;
    }

    // Storing the Venue of the event.
    try {
        const venue = currentEvent["_embedded"]["venues"][0];
        currentEventJson["venue"] = ((venue["name"] != "Undefined") && (venue["name"] != "Undefined") && (venue["name"] != "Undefined")) ? venue["name"] : null;
    } catch (error) {
        console.error(error);
        currentEventJson["venue"] = null;
    }

    // Storing the icon of the event.
    try {
        const image = currentEvent["images"][0]
        currentEventJson["icon"] = ((image["url"] != "Undefined") && (image["url"] != "") && (image["url"] != null)) ? image["url"] : null;
    } catch (error) {
        console.error(error);
        currentEventJson["icon"] = null;
    }

    // Storing the id of the event.
    try {
        const id = currentEvent["id"];
        currentEventJson["id"] = ((id != "Undefined") && (id != null) && (id != "")) ? id : null;
    } catch (error) {
        console.error(error);
        currentEventJson["id"] = null;
    }

    return currentEventJson
}



// Makes a get request to ticketmaster api specifically to the events endpoint and gets the first 20 events corresponding
// to the params passed as query parameters.
const eventSearch = async(ticketMasterConfig, urlAddOns) => {

    const response = {
        "status" : false,
        "data" : null
    }

    
    try {
        // Making a get request to the events endpoint of the ticketmaster api.
        const res = await axiosRequest.get(ticketMasterConfig["ticketMasterBaseUrl"] + urlAddOns, {
            params: ticketMasterConfig["ticketMasterParams"],
            headers : ticketMasterConfig["ticketMasterHeader"]
        })
        
        const embedded = res["data"]["_embedded"];
        const events = embedded["events"];
        const result = [];

        for (const [index, event] of events.entries()){
            let currentEventJson = eventSearchHelper(event);
            result.push(currentEventJson);
        }
        
        response["status"] = true;
        response["data"] = result;
        console.log("Results Were Found for Events Search Api!");
        return response;

    } catch (error) {
        console.error(error);
        console.error("No Results Found for Events Search Api!");
        return response;
    }
    
} 


// Helper function for the eventDetails() function.
const eventDetailsHelper = (jsonData) => {

    // The json response to be sent to the eventDetails() function.
    const currentEventJson = {
        "artist" : {
            "name" : null,
            "url" : null
        },

        "priceRanges" : {
            "min" : null,
            "max" : null
        }  
    }


    // Storing the local date and local time of the event.
    try {
        const dates = jsonData["dates"];

        if ((dates["start"]["dateTBA"]) || (dates["start"]["dateTBD"])) currentEventJson["localDate"] = null;
        else{
            currentEventJson["localDate"] = ((dates["start"]["localDate"] != "Undefined") && (dates["start"]["localDate"] != null) && (dates["start"]["localDate"] != "")) ? dates["start"]["localDate"] : null;
        }

        if (dates["start"]["timeTBA"]) currentEventJson["localTime"] = null;
        else{
            currentEventJson["localTime"] = ((dates["start"]["localTime"] != "Undefined") && (dates["start"]["localTime"] != null) && (dates["start"]["localTime"] != "")) ? dates["start"]["localTime"] : null;
        }
            
    } catch (error) {
        console.error(error);
        currentEventJson["localDate"] = null;
        currentEventJson["localTime"] = null;
    }

    // Storing the artist / team details of the event.

    try {
        const embedded = jsonData["_embedded"]
        const attractions = embedded["attractions"]
        const artistTeamData = [];
        for (const [index, artist] of attractions.entries()){
            
            artistTeamData.push(artist["name"]);
        }

        currentEventJson["artist"] = artistTeamData;

    } catch (error) {
        console.error(error);
        currentEventJson["artist"] = null;
    }
    
    // Storing the venue name and city name of the event.
    try {
        const embedded = jsonData["_embedded"];
        const venues = embedded["venues"][0];
        const venueName = venues["name"];
        const cityName = venues["city"]["name"];

        currentEventJson["venue"] = ((venueName != "Undefined") && (venueName != "") && (venueName != null)) ? venueName : null;
        currentEventJson["cityName"] = ((cityName != "Undefined") && (cityName != "") && (cityName != null)) ? cityName : null;
        
    } catch (error) {
        console.error(error);
        currentEventJson["venue"] = null;
        currentEventJson["cityName"] = null;
    }

    // Storing the subGenre for the current event.

    try {
        const classifications = jsonData["classifications"][0];
        currentEventJson["subGenre"] = ((classifications["subGenre"]["name"] != "Undefined") && (classifications["subGenre"]["name"] != null) && (classifications["subGenre"]["name"] != "")) ? classifications["subGenre"]["name"] : null;
        
    } catch (error) {
        console.error(error);
        currentEventJson["subGenre"] = null;
        
    }


    // Storing the genre for the current event.

    try {
        const classifications = jsonData["classifications"][0];
        currentEventJson["genre"] = ((classifications["genre"]["name"] != "Undefined") && (classifications["genre"]["name"] != null) && (classifications["genre"]["name"] != "")) ? classifications["genre"]["name"] : null;

    } catch (error) {
        console.error(error);
        currentEventJson["genre"] = null;
    }


    // Storing the segment of the event.
    try {
        const classifications = jsonData["classifications"][0];
        currentEventJson["segment"] = ((classifications["segment"]["name"] != "Undefined") && (classifications["segment"]["name"] != null) && (classifications["segment"]["name"] != "")) ? classifications["segment"]["name"] : null;

    } catch (error) {
        console.error(error);
        currentEventJson["segment"] = null;
    }


    // Storing the type of the event.
    try {
        const classifications = jsonData["classifications"][0];
        currentEventJson["type"] = ((classifications["type"]["name"] != "Undefined") && (classifications["type"]["name"] != null) && (classifications["type"]["name"] != "")) ? classifications["type"]["name"] : null;
        
    } catch (error) {
        console.error(error);
        currentEventJson["type"] = null;
    }


    // Storing the subType of the event.
    try {
        const classifications = jsonData["classifications"][0];
        currentEventJson["subType"] = ((classifications["subType"]["name"] != "Undefined") && (classifications["subType"]["name"] != null) && (classifications["subType"]["name"] != "")) ? classifications["subType"]["name"] : null;

    } catch (error) {
        console.error(error);
        currentEventJson["subType"] = null;
    }
    
    /*   Storing the Price Ranges for the current event.   */

    // Storing the minimum price range for the current event.
    try {
        const priceRanges = jsonData["priceRanges"][0]
        currentEventJson["priceRanges"]["min"] = ((priceRanges["min"] != "Undefined") && (priceRanges["min"] != null) && (priceRanges["min"] != "")) ? priceRanges["min"] : null;
    } catch (error) {
        console.error(error);
        currentEventJson["priceRanges"]["min"] = null
    }

    // Storing the maximum price range for the current event.
    try {
        const priceRanges = jsonData["priceRanges"][0]
        currentEventJson["priceRanges"]["max"] = ((priceRanges["max"] != "Undefined") && (priceRanges["max"] != null) && (priceRanges["max"] != "")) ? priceRanges["max"] : null;
    } catch (error) {
        console.error(error);
        currentEventJson["priceRanges"]["max"] = null
    }

    try {
        const priceRanges = jsonData["priceRanges"][0]
        currentEventJson["priceRanges"]["min"] = ((priceRanges["min"] != "Undefined") && (priceRanges["min"] != null) && (priceRanges["min"] != "")) ? priceRanges["min"] : null;

    } catch (error) {
        console.error(error);
        currentEventJson["priceRanges"]["max"] = null
    }


    // Storing the ticket status for the current event.
    try {
        const dates = jsonData["dates"];
        const status = dates["status"];
        currentEventJson["ticketStatus"] = ((status["code"] != "Undefined") && (status["code"] != null) && (status["code"] != "")) ? status["code"] : null;
        
    } catch (error) {
        console.error(error);
        currentEventJson["ticketStatus"] = null;
    }
    

    // Storing the ticket buy url for the current event.
    try {
        const saleUrl = jsonData["url"];
        currentEventJson["saleUrl"] = ((saleUrl != "Undefined") && (saleUrl != null) && (saleUrl != "")) ? saleUrl : null;
    } catch (error) {
        console.error(error);
        currentEventJson["saleUrl"] = null;
    }

    // Storing the seat map for the current event.
    try {
        const seatMap = jsonData["seatmap"]["staticUrl"];
        currentEventJson["seatMap"] = ((seatMap != "Undefined") && (seatMap != null) && (seatMap != "")) ? seatMap : null;
    } catch (error) {
        console.error(error);
        currentEventJson["seatMap"] = null;
    }

    return currentEventJson;
}


// Makes a get request to ticketmaster api specifically to the events endpoint and gets the details of the event corresponding
// to the event's id passed as query parameter.
const eventDetails = async(ticketMasterConfig, urlAddOns) => {
    const response = {
        "status" : false,
        "data" : null
    }

    try {

        const ticketMasterParams = {
            "apikey" : ticketMasterConfig["ticketMasterParams"]["apikey"]
        }

        const ticketMasterHeader = {
            'Accept': 'application/json'
        }
        
        // Making a get request to the events endpoint and passing the current event's id as query parameter to get the
        // details of this event.
        const res = await axiosRequest.get(ticketMasterConfig["ticketMasterBaseUrl"] + urlAddOns, {
            params: ticketMasterParams,
            headers : ticketMasterHeader
        })

        const currentEventDetails = eventDetailsHelper(res["data"]);

        response["status"] = true;
        response["data"] = currentEventDetails;
        return response;

    } catch (error) {
        console.error(error);
        return response;
    }
}


// Helper function for the venueDetails() function.
const venueDetailsHelper = async(jsonData) => {
    // Response object which will be sent to the venueDetails() function.
    currentVenueJson = {
        "address" : {
            "line1" : null,
            "city" : null,
            "state" : null,
            "lat": null,
            "lng" : null
        }
    }

    // Storing the name of the venue.
    try {
        const embedded = jsonData["_embedded"];
        const venues = embedded["venues"][0];
        currentVenueJson["name"] = ((venues["name"] != "Undefined") && (venues["name"] != null) && (venues["name"] != "")) ? venues["name"] : null;
    } catch (error) {
        console.error(error);
        currentEventJson["name"] = null;
    }

    // Storing the line1 of address of the venue.
    try {
        const embedded = jsonData["_embedded"];
        const venues = embedded["venues"][0];
        currentVenueJson["address"]["line1"] = ((venues["address"]["line1"] != "Undefined") && (venues["address"]["line1"] != null) && (venues["address"]["line1"] != "")) ? venues["address"]["line1"] : null;
    } catch (error) {
        console.error(error);
        currentVenueDetails["address"]["line1"] = null;
    }


    // Storing the city of address of the venue.
    try {
        const embedded = jsonData["_embedded"];
        const venues = embedded["venues"][0];
        currentVenueJson["address"]["city"] = ((venues["city"]["name"] != "Undefined") && (venues["city"]["name"] != null) && (venues["city"]["name"] != "")) ? venues["city"]["name"] : null;
    } catch (error) {
        console.error(error);
        currentVenueDetails["address"]["city"] = null;
    }


    // Storing the state of address of the venue.
    try {
        const embedded = jsonData["_embedded"];
        const venues = embedded["venues"][0];
        currentVenueJson["address"]["state"] = ((venues["state"]["name"] != "Undefined") && (venues["state"]["name"] != null) && (venues["state"]["name"] != "")) ? venues["state"]["name"] : null;
    } catch (error) {
        console.error(error);
        currentVenueDetails["address"]["state"] = null;
    }


    // Storing the phone number of the venue
    try {
        const embedded = jsonData["_embedded"];
        const venues = embedded["venues"][0];
        const boxOfficeInfo = venues["boxOfficeInfo"]
        currentVenueJson["phoneNumber"] = ((boxOfficeInfo["phoneNumberDetail"] != "undefined")  && (boxOfficeInfo["phoneNumberDetail"] != null ) && (boxOfficeInfo["phoneNumberDetail"] != "")) ? boxOfficeInfo["phoneNumberDetail"] : null;
    } catch (error) {
        console.error(error);
        currentVenueJson["phoneNumber"] = null;
    }
    


    // Storing the open-hours details of the venue.
    try {
        const embedded = jsonData["_embedded"];
        const venues = embedded["venues"][0];
        const boxOfficeInfo = venues["boxOfficeInfo"]
        currentVenueJson["openHours"] = ((boxOfficeInfo["openHoursDetail"] != "undefined")  && (boxOfficeInfo["openHoursDetail"] != null ) && (boxOfficeInfo["openHoursDetail"] != "")) ? boxOfficeInfo["openHoursDetail"] : null;
    } catch (error) {
        console.error(error);
        currentVenueJson["openHours"] = null;
    }

    // Storing the general-rule details of the venue.
    try {
        const embedded = jsonData["_embedded"];
        const venues = embedded["venues"][0];
        const generalInfo = venues["generalInfo"]

        currentVenueJson["generalRule"] = ((generalInfo["generalRule"] != "Undefined") && (generalInfo["generalRule"] != null) && (generalInfo["generalRule"] != "")) ? generalInfo["generalRule"] : null;
        
    } catch (error) {
        console.error(error);
        currentVenueJson["generalRule"] = null;
    }

    // Storing the child-rule details of the venue.
    try {
        const embedded = jsonData["_embedded"];
        const venues = embedded["venues"][0];
        const generalInfo = venues["generalInfo"]

        currentVenueJson["childRule"] = ((generalInfo["childRule"] != "Undefined") && (generalInfo["childRule"] != null) && (generalInfo["childRule"] != "")) ? generalInfo["childRule"] : null;
    } catch (error) {
        console.error(error);
        currentVenueJson["childRule"] = null;
    }

    // Storing the LAtitude and Longitude of the location in the response object.
    try {
        let fullLocation = ""
        if (currentVenueJson["address"]["line1"] || null){
            fullLocation += currentVenueJson["address"]["line1"] + ", ";
        }
        if (currentVenueJson.address.city || null){
                fullLocation+= currentVenueJson.address.city + ", ";
        }
        if(currentVenueJson.address.state || null){
                fullLocation+= currentVenueJson.address.state;
        }
        const encodedFullLocation = fullLocation.replace(/\s+/g, '+');
        console.log(encodedFullLocation);

        const geoCodingResp = await getLatLng(fullLocation)

        currentVenueJson.address.lat = geoCodingResp.lat
        currentVenueJson.address.lng = geoCodingResp.lng
    } catch (error) {
        console.error(error);
        
    }
    return currentVenueJson;
}


// Makes a get request to ticketmaster api specifically to the venues endpoint and gets the details of the venue corresponding
// to the event's id passed as query parameter.
const venueDetails = async(ticketMasterConfig, urlAddOns) => {
    const response = {
        "status" : false,
        "data" : null
    }


    try {

        const ticketMasterParams = {
            "apikey" : ticketMasterConfig["ticketMasterParams"]["apikey"],
            "keyword" : ticketMasterConfig["ticketMasterParams"]["venue"]
        }

        const ticketMasterHeader = {
            'Accept': 'application/json'
        }

        // Making a get request to the /venues endpoint and passing the venue as parameter to get information about the venue.
        const res = await axiosRequest.get(ticketMasterConfig["ticketMasterBaseUrl"] + urlAddOns, {
            params: ticketMasterParams,
            headers : ticketMasterHeader
        })

        const currentVenueDetails = await venueDetailsHelper(res["data"]);

        response["status"] = true;
        response["data"] = currentVenueDetails;
        return response;

    } catch (error) {
        console.error(error);
        return response;
    }
}

// Helper function to get useful data for each artist using the spotifyApi.searchArtists() function.
// Helper to the artistDetails() function.
const spotifyHelper = async(artistName, spotifyApi) => {
    let spotifyResponse = {
        "status" : false,
        "data" : {}
    };

    try {
        await spotifyApi.searchArtists(artistName)
        .then(async(data) => {
            spotifyResponse["status"] = true;
            const artists = data.body.artists;
            const item = artists["items"][0];

            // spotifyResponse["data"] = item;

            // Storing the name of the artist. 
            try {
                spotifyResponse["data"]["name"] = item["name"];

            } catch (error) {
                console.error(error);
                spotifyResponse["data"]["name"] = null;
            }

            // Storing the artist image.
            try {
                spotifyResponse["data"]["image"] = item["images"][2]["url"];
            } catch (error) {
                console.error(error);
                spotifyResponse["data"]["image"] = null;
            }
            // Storing the popularity of the artist.
            try {
                spotifyResponse["data"]["popularity"] = item["popularity"];

            } catch (error) {
                console.error(error);
                spotifyResponse["data"]["popularity"] = null;
            }

            // Storing the total followers count of the artist.
            try {
                spotifyResponse["data"]["followers"] = item["followers"].total;
            } catch (error) {
                console.error(error);
                spotifyResponse["data"]["followers"] = null
            }

            // Storing the spotifyLink of the artist.
            try {
                spotifyResponse["data"]["spotifyLink"] = item["external_urls"].spotify;
                
            } catch (error) {
                console.error(error);
                spotifyResponse["data"]["spotifyLink"] = null;
            }

            // Storing the top 3 albums of the artist using his/her spotify id.
            try {
                const artistId = item["id"];
                await spotifyApi.getArtistAlbums(artistId,{ limit: 3})
                .then((data) => {
                    const albumCover = [];
                    const albums = data.body.items;
                    for (const [index, album] of albums.entries()){
                        albumCover.push(album["images"][1]["url"]);
                    }
                    spotifyResponse["data"]["albums"] = albumCover;
                })
                .catch((err) => {
                    console.error(error);
                    spotifyResponse["data"]["albums"] = null;
                    return spotifyResponse;
                })
            } catch (error) {
                console.error(error);
                spotifyResponse["data"]["albums"] = null;
            }

        })
        .catch((err) => {
            console.error(error);
            spotifyResponse["data"] = null;
            return spotifyResponse;
        })

        return spotifyResponse

    } catch (error) {
        console.error(error);
        spotifyResponse["data"] = null;
        return spotifyResponse;
    }
   
}

// Helper function to the artistDetails() function which will send the segment data of the artist passed as parameter to this helper function.
const artistDetailsHelper = async(attractions) => {
    const segmentData = {};

    // Checking if artist is having a music background or not.
    for (const [index, artist] of attractions.entries()){
        try {
            segmentData[artist["name"]] = artist["classifications"][0]["segment"]["name"];
        } catch (error) {
            console.error(error);
            segmentData[artist["name"]] = null;
        }
    }

    return segmentData
} 


// Making a get request to the events endpoint and passing the id as query parameter to get all information about the event
// Also getting an access token for spotify and saving it inorder to make get requests to get information about the artist.
const artistDetails = async(ticketMasterConfig,  urlAddOns, spotifyApi) => {
    const response = {
        "status" : false,
        "data" : {
            "musicFlag": false,
            "data" : null
        }
    }

    try {

        const ticketMasterParams = {
            "apikey" : ticketMasterConfig["ticketMasterParams"]["apikey"]
        }

        const ticketMasterHeader = {
            'Accept': 'application/json'
        }
        
        const res = await axiosRequest.get(ticketMasterConfig["ticketMasterBaseUrl"] + urlAddOns, {
            params: ticketMasterParams,
            headers : ticketMasterHeader
        })

        const segmentData = await artistDetailsHelper(res["data"]["_embedded"]["attractions"]);
        
        const artistData = [];
        index = 0
        await spotifyApi.clientCredentialsGrant()
        .then(async(data) => {
            console.log('The access token expires in ' + data.body['expires_in']);
            console.log('The access token is ' + data.body['access_token']);

            // Save the access token so that it's used in future calls
            await spotifyApi.setAccessToken(data.body['access_token']);
            for (const key in segmentData){
                if (segmentData[key] != "Music"){
                    artistData.push(
                        "No music related artist details to show"
                    )
                    response["data"].musicFlag = false;
                    break;
                }
                else{
                    const spotifyResponse = await spotifyHelper(key, spotifyApi)
                    if(spotifyResponse.data.name){
                        artistData.push(spotifyResponse.data)
                        response["data"].musicFlag = true;
                    }
                    else{
                        artistData.push("No music related artist details to show")
                        response["data"].musicFlag = false;
                        break;
                    }
                }
                index += 1;
            }
        })
        .catch((err) => {
            console.error('Something went wrong when retrieving an access token', err);
        })

        response["status"] = true;
        response["data"]["data"] = artistData;

        return response;
    } catch (error) {
        console.error(error);
        return response;
    }


}

// Exporting all the functions to be used in the server.js file.
exports.performAutocomplete = performAutocomplete;
exports.getGeocoding = getGeocoding;
exports.eventSearch = eventSearch;
exports.eventDetails = eventDetails;
exports.venueDetails = venueDetails;
exports.artistDetails = artistDetails;
