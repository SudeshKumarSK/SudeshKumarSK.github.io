'''
    app.py backend flask api 
    Created by Sudesh Kumar Santhosh Kumar
    Web Tech CSCi - 571 Assignment -> 6
'''
#Importing all the necessary Libraries.
from flask import Flask, request
from flask_cors import CORS
import json
import urllib
import requests
from geolib import geohash
from ticketmaster import TicketMaster

# Initializing API Key for GCP Geocoding API and base url for Google API.
gcp_API_KEY = "AIzaSyDKECWK_Ps6L5CBGMdUQBoLuHEch3HoIHw"
gcpBaseUrl = "https://maps.googleapis.com/maps/api/geocode/json?"
gcpParams = {
    'key' : gcp_API_KEY
}

# Initializing API key  and base url for for the Ticket Master API.

ticketMasterConfig = {
    "ticketMasterBaseUrl" : "https://app.ticketmaster.com/discovery/v2",
    "ticketMasterAPI_KEY" : "5oBFZdV8Bs6AmATQpFA7Bt015HQsC1TU",

    "ticketMasterParams" : {
        "apikey" : "5oBFZdV8Bs6AmATQpFA7Bt015HQsC1TU",
        },

    "ticketMasterHeader" : {'Accept': 'application/json'}
}


location = {}
hashedLocation = ""


# Creating an instance for the Flask() class and calling it app.
application = Flask(__name__)

#Enabling Cross-Origin Resource Sharing because we will invoking this flask api call from Javascript using AJAX.
CORS(application)

# Creating an instance for the Ticket Master class.
tm = TicketMaster(ticketMasterConfig)


@application.route("/", methods=["GET"])
def index():
    return application.send_static_file("home.html")


# Creating an endpoint called "/api/endpoint" to make a GET request and send the form-data as query parameters.
@application.route('/api/eventsearch', methods=['GET'])
def eventSearch():

    response = {
    "flag" : False,
    "response" : None
    }

    try:
        # Receiving the query parameters from the get request.
        encodedRequest = request.args.get('data')

        # Converting the string of JSON of actual JSON.
        decodedRequest = json.loads(urllib.parse.unquote(encodedRequest))
        
        print(f"Request that we received from AJAX is: {decodedRequest}")

        # Setting the address query parameter for the geocoding api call and making a get request to google's geocoding api.
        gcpParams["address"] = decodedRequest["location"]
        gcpResponse = requests.get(gcpBaseUrl, params=gcpParams)

        # Checking the status of the response returned by the api and proceeding further else we return "No Records Found" response.
        if gcpResponse.status_code == 200:
            gcpResponseData = gcpResponse.json()

            # try block tries to get the latitude and longitude values from the JSON returned by geocoding api
            # If the address given by the user is invalid we hit the except block and return "No Records Found" response.
            try:
                location = gcpResponseData["results"][0]["geometry"]["location"]
                hashedLocation = geohash.encode(location["lat"], location["lng"], 7)
                print(location["lat"], location["lng"], hashedLocation)

            except:
                print("No Results Found")
                return response
            
        else:
            print("No Results Found")
            return response
     
        # Adding parameter to the ticketMasterConfig.
        ticketMasterConfig["ticketMasterParams"]["keyword"] = decodedRequest["keyword"]
        ticketMasterConfig["ticketMasterParams"]["segmentId"] = decodedRequest["category"]
        ticketMasterConfig["ticketMasterParams"]["radius"] = decodedRequest["distance"]
        ticketMasterConfig["ticketMasterParams"]["unit"] = "miles"
        ticketMasterConfig["ticketMasterParams"]["geoPoint"] = hashedLocation

        tm.updateConfig(ticketMasterConfig)
        print(ticketMasterConfig)

        # Getting event details from the Ticket Master class by involing the getEventDetails() fn.
        tmResponse = tm.eventsSearch(urlAddOns = "/events?")
        # print(tmResponse)
        return tmResponse
        
    except:
        print("Except")
        return response
        

@application.route("/api/eventdetails", methods=['GET'])
def eventDetails():

    response = {
    "flag" : False,
    "response" : None
    }

    
    try:
        # Receiving the query parameters from the get request.
        id = request.args.get('id')
        
        # print(f"Request that we received from AJAX is: {id}")
        
        urlAddOns = "/events" + "/" + id
        tmResponse = tm.getEventDetails(urlAddOns=urlAddOns)
        print(tmResponse)
        return tmResponse
    
    except:
        return response


@application.route("/api/venuedetails", methods=["GET"])
def venueDetails():
    
    response = {
    "flag" : False,
    "response" : None
    }

    try:
        venue = request.args.get("venue")
        print(f"Request that we received from AJAX is: {venue}")

        urlAddOns = "/" + "venues"
        tmResponse = tm.getVenueDetails(urlAddOns=urlAddOns, venue=venue)
        print(tmResponse)
        return tmResponse
    
    except:
        return response


if __name__ == '__main__':
    application.run()