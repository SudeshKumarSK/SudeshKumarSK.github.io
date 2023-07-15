import requests
import urllib.parse

class TicketMaster():

    def __init__(self, config):
        self.rootUrl = config["ticketMasterBaseUrl"]
        self.API_KEY = config["ticketMasterAPI_KEY"]
        self.params = config["ticketMasterParams"]
        self.headers = config["ticketMasterHeader"]
        self.eventsSearchResponse = {
            "flag" : False,
            "response" : ""

        }
        self.eventDetailsResponse = {
            "flag" : False,
            "response" : ""
        }

        self.venueDetailsResponse = {
            "flag" : False,
            "response" : ""
        }

    def updateConfig(self, config):
        self.params = config["ticketMasterParams"]

    
    def populateEventsSearch(self, currentEvent):

        currentJson = {}

        # Storing name of the event .
        try:
            name = currentEvent["name"]
            currentJson["event"] = name if name != "Undefined" else ""

        except:
            currentJson["event"] = None



        # Storing the dates of the event.
        try:
            dates = currentEvent["dates"]

            if dates["start"]["dateTBA"] or dates["start"]["dateTBD"]:
                currentJson["localDate"] = ""
            else:
                currentJson["localDate"] = dates["start"]["localDate"] if dates["start"]["localDate"] != "Undefined" else ""


            if dates["start"]["timeTBA"]:
                currentJson["localTime"] = ""
            else:
                currentJson["localTime"] = dates["start"]["localTime"] if dates["start"]["localTime"] != "Undefined" else ""

        except:
            currentJson["localDate"] = None
            currentJson["localTime"] = None


        # Storing the Genre of the event.
        try:
            classifications = currentEvent["classifications"][0]

            currentJson["genre"] = classifications["segment"]["name"] if classifications["segment"]["name"] != "Undefined" else ""
            
        except:

            currentJson["genre"] = None
            


        # Storing the venue of the event.
        try:

            venue = currentEvent["_embedded"]["venues"][0]
            currentJson["venue"] =  venue["name"] if venue["name"] != "Undefined" else ""

        except:
            currentJson["venue"] = None

        
        # Storing the icon of the event.
        try:

            image = currentEvent["images"][0]
            currentJson["icon"] = image["url"]

        except:
            currentJson["icon"] = None


        # Storing the id of the event.
        try:
            currentJson["id"] = currentEvent["id"]
            
        except:
            currentJson["id"] = None
        
        return currentJson

    def populateEventDetails(self, jsonData):

        currentJson = {
            "artist" : {
                "name" : "",
                "url" : ""
            },

            "priceRanges" : {
                "min" : "",
                "max" : ""
            }  
        }
    
        # Storing name of the artist .
        try:
            embedded = jsonData["_embedded"]
            attractions = embedded["attractions"][0]

            name = attractions["name"]
            if name == "Undefined":
                name = ""

            currentJson["artist"]["name"] = name

        except:
            currentJson["artist"]["name"] = None


        # Storing url of the artist.
        try:
            embedded = jsonData["_embedded"]
            attractions = embedded["attractions"][0]

            url = attractions["url"]
            if url == "Undefined":
                url = ""

            currentJson["artist"]["url"] = url

        except:
            currentJson["artist"]["url"] = None


        # Storing the venue of the event.
        try:
            venues = embedded["venues"][0]
            venueName = venues["name"]
            cityName = venues["city"]["name"]

            if venueName == "Undefined":
                venueName = ""

            currentJson["venue"] = venueName
            currentJson["cityName"] = cityName

        except:
            currentJson["venue"] = None



        # Storing the date of the event.
        try:
            dates = jsonData["dates"]

            if dates["start"]["dateTBA"] or dates["start"]["dateTBD"]:
                currentJson["localDate"] = None
            else:
                if dates["start"]["localDate"] == "Undefined":
                    dates["start"]["localDate"] = ""
                currentJson["localDate"] = dates["start"]["localDate"]


            if dates["start"]["timeTBA"]:
                currentJson["localTime"] = None
            else:
                if dates["start"]["localTime"] == "undefined":
                    dates["start"]["localTime"] = ""
                currentJson["localTime"] = dates["start"]["localTime"]


        except:
            currentJson["localDate"] = None
            currentJson["localTime"] = None


        # Storing the Ticket Status of the event.
        try:
            dates = jsonData["dates"]
            status = dates["status"]

            if status["code"] == "Undefined":
                status["code"] = ""
            currentJson["ticketStatus"] = status["code"]

        except:
            currentJson["ticketStatus"] = None

        

        # Storing the Genre of the event.
        try:
            classifications = jsonData["classifications"][0]

            currentJson["subGenre"] = classifications["subGenre"]["name"] if classifications["subGenre"]["name"] != "Undefined" else ""
            currentJson["genre"] = classifications["genre"]["name"] if classifications["genre"]["name"] != "Undefined" else ""
            currentJson["segment"] = classifications["segment"]["name"] if classifications["segment"]["name"] != "Undefined" else ""
            currentJson["type"] = classifications["type"]["name"] if classifications["type"]["name"] != "Undefined" else ""
            currentJson["subType"] = classifications["subType"]["name"] if classifications["subType"]["name"] != "Undefined" else ""

        except:

            currentJson["subGenre"] = None
            currentJson["genre"] = None
            currentJson["segment"] = None
            currentJson["type"] = None
            currentJson["subType"] = None
            

        # Storing the minimum Price Range of the event.
        try:
            priceRanges = jsonData["priceRanges"][0]

            currentJson["priceRanges"]["min"] = priceRanges["min"] if priceRanges["min"] != "Undefined" else ""
            

        except:
            currentJson["priceRanges"] = None


        # Storing the maximum Price Range of the event.
        try:
            priceRanges = jsonData["priceRanges"][0]

            currentJson["priceRanges"]["max"] = priceRanges["max"] if priceRanges["max"] != "Undefined" else ""
            

        except:
            currentJson["priceRanges"] = None


        # Storing the Ticket Sale Link of the event.
        try:
            saleUrl = jsonData["url"]
            currentJson["saleUrl"] = saleUrl if saleUrl != "undefined" else ""

        except:
            currentJson["saleUrl"] = None


        # Storing the SeatMap for the event.
        try:
            seatMap = jsonData["seatmap"]["staticUrl"]
            currentJson["seatMap"] = seatMap if seatMap != "Undefined" else ""

        except:
            currentJson["seatMap"] = None


        return currentJson

    def populateVenueDetails(self, jsonData):
        currentJson = {
            "address" : {
                "line1" : "",
                "city" : "",
                "state" : "",
                "postalCode" : ""
            }
        }

        # Storing the Venue Name for the event.
        try:
            embedded = jsonData["_embedded"]
            venues = embedded["venues"][0]
            currentJson["name"] = venues["name"] if venues["name"] != "Undefined" else None

        except:
            currentJson["name"] = None


        # Storing the Address of the Venue.
        try:
            embedded = jsonData["_embedded"]
            venues = embedded["venues"][0]
            currentJson["address"]["line1"] = venues["address"]["line1"] if venues["address"]["line1"] != "Undefined" else None
            currentJson["address"]["city"] = venues["city"]["name"] if venues["city"]["name"] != "Undefined" else None
            currentJson["address"]["state"] = venues["state"]["stateCode"] if venues["state"]["stateCode"] != "Undefined" else None
            currentJson["address"]["postalCode"] = venues["postalCode"] if venues["postalCode"] != "Undefined" else None

            if (currentJson["address"]["line1"]) and (currentJson["address"]["city"]) and (currentJson["address"]["state"]) and (currentJson["address"]["postalCode"]):
                pass

            else:
                currentJson["address"] = None


        except:
            currentJson["address"] = None

        # Storing the Upcoming Events details.
        try:
            embedded = jsonData["_embedded"]
            venues = embedded["venues"][0]
            currentJson["image"] = venues["images"][0]["url"] if venues["images"][0]["url"] != "Undefined" else None

        except:
            currentJson["image"] = None


        # Storing the image of the venue.
        try:
            embedded = jsonData["_embedded"]
            venues = embedded["venues"][0]
            currentJson["upcomingEvents"] = venues["url"] if venues["url"] != "Undefined" else None

        except:
            currentJson["upcomingEvents"] = None

        return currentJson
    
        
    

    def eventsSearch(self, urlAddOns):
        
        result = {}

        # Making a GET request to Ticket Master API.
        ticketMasterResponse = requests.get(self.rootUrl + urlAddOns, params=self.params, headers=self.headers)


        if ticketMasterResponse.status_code == 200:
            ticketMasterResponseData = ticketMasterResponse.json()

            try:
                embedded = ticketMasterResponseData["_embedded"]
                events = embedded["events"]
                for i, event in enumerate(events):
                    currentJson = self.populateEventsSearch(event)
                    result[i] = currentJson
                
                if len(result):
                    self.eventsSearchResponse["flag"] = True
                    self.eventsSearchResponse["response"] = result

                else:
                    self.eventsSearchResponse["flag"] = False
                    self.eventsSearchResponse["response"] = result



            except:
                self.eventsSearchResponse["flag"] = False
                self.eventsSearchResponse["response"] = ""


        return self.eventsSearchResponse
    

    def getEventDetails(self, urlAddOns):

        result = {}
        params = {
            "apikey" : self.params["apikey"]
        }

        ticketMasterResponse = requests.get(self.rootUrl + urlAddOns, params = params, headers=self.headers)

        if ticketMasterResponse.status_code == 200:
            ticketMasterResponseData = ticketMasterResponse.json()

            try:
                result = self.populateEventDetails(ticketMasterResponseData)
                self.eventDetailsResponse["flag"] = True
                self.eventDetailsResponse["response"] = result

            except:
                self.eventDetailsResponse["response"] = None

        return self.eventDetailsResponse
    

    def getVenueDetails(self, urlAddOns, venue):

        result = {}
        params = {
            "apikey" : self.params["apikey"],
            "keyword" : venue
        }

        encodedParams = urllib.parse.urlencode(params, quote_via=urllib.parse.quote)

        print(f"UrlAddOns: {urlAddOns}")
        print(f"Params: {params}")

        finalUrl = self.rootUrl + urlAddOns + "?" + encodedParams
        ticketMasterResponse = requests.get(finalUrl)

        if ticketMasterResponse.status_code == 200:
            ticketMasterResponseData = ticketMasterResponse.json()

            try:
                result = self.populateVenueDetails(ticketMasterResponseData)
                self.venueDetailsResponse["flag"] = True
                self.venueDetailsResponse["response"] = result

            except:
                self.venueDetailsResponse["response"] = None


        return self.venueDetailsResponse

        


