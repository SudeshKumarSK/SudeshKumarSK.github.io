/* 
    javascript file for events.html
    Created by Sudesh Kumar Santhosh Kumar
    Date : 
    Web Tech CSCi - 571 Assignment -> 6
*/

// Declaring and Initializing all the necessary variables.
const clearButton = document.querySelector("#clear-btn");
const searchButton = document.querySelector("#search-btn");
const checkbox = document.querySelector('#checkbox');
const locationTextBox = document.querySelector(".location");
const form = document.getElementById("events-search-form");
let inProgressEvent = false;
let inProgressDetail = false;
let divElement, tableElement;

// Defining the api that must be requested with GET method to invoke the Ticket Master API.
const flaskApi = "Webtechhw6-env.eba-asfx3paw.us-west-1.elasticbeanstalk.com/api"


// Function to perform the clearing of form data when the user clicks on the CLEAR Button.
function clearForm(){
    const form = document.getElementById("events-search-form");
    form.reset();
    locationTextBox.classList.remove("collapsed");
    locationTextBox.removeAttribute("disabled");
    removeElementsMain();
}


// Function to collapse the Location Text Box when the user checks the check box and vice verse.
function handleCheckBox(){
    if (checkbox.checked){
        locationTextBox.setAttribute("disabled", '');
        console.log("Checked the check box");
        locationTextBox.classList.add("collapsed")
    }
    else{
        console.log("Un-Checked the check box");
        locationTextBox.removeAttribute("disabled");
        locationTextBox.classList.remove("collapsed")
    }
}


// Async Function to perform a GET Request to the ipinfo api and receive the current location of the user in-order
// to perform the auto-detect feature.
async function fetchGeoLocation(){

    // GET request to ipinfo api.
    const response = await fetch("https://ipinfo.io/json?token=bab2690c3e129d", {
        method : "GET",
        mode : "cors",
        cache : "no-cache",
        credentials : "omit",
        referrerPolicy: 'no-referrer',
        headers: {
            'Content-Type': 'application/json'
        },
    });

    if(response.ok){
        return response;
    }
    else{
        throw Error(response.statusText + ' - ' + response.url);
    }
}


// async function to perform a GET Request to the flask api where the TicketMaster API is called and the response from
// TicketMaster is beautified and returned as a JSON response to Javascript.
async function sendJsonData(url){
    
    // Making a GET Request to the flask API.
    const response = await fetch(url,{
        method : "GET",
        mode : "cors",
        cache : "no-cache",
        credentials : "omit",
        referrerPolicy: 'no-referrer',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    if(response.ok){
        return response;
    }
    else{
        throw Error(response.statusText + ' - ' + response.url);
    }
}

function generateGenreString(responseData, genre){
    let genreString = "";

    if ((responseData["subGenre"] != "") && (responseData["subGenre"] != null)){
        genreString += responseData["subGenre"];
    }

    if ((responseData["genre"] != "") && (responseData["genre"] != null)){
        genreString += " | " + responseData["genre"];
    }

    if ((responseData["segment"] != "") && (responseData["segment"] != null)){
        genreString += " | " + responseData["segment"];
    }

    if ((responseData["subType"] != "") && (responseData["subType"] != null)){
        genreString += " | " + responseData["subType"];
    }

    if ((responseData["type"] != "") && (responseData['type'] != null)){
        genreString += " | " + responseData["type"] ;
    }

    if (genreString == ""){
        genreString = genre;
    }
    return genreString;

}

function decideDivColor(ticketStatus){
    let color = "white"
    let status = "onsale"

    if (ticketStatus == "onsale"){
        status = "On Sale";
        color = "green"
    }

    else if (ticketStatus == "offsale"){
        status = "Off Sale";
        color = "red"
    }

    else if (ticketStatus == "canceled"){
        status = "Canceled";
        color = "black"
    }

    else if (ticketStatus == "postponed"){
        status = "Postponed";
        color = "orange"
    }

    else{
        status = "Rescheduled";
        color = "orange"
    }

    return {
        divColor : color,
        divContent : status
    }
}

function getPriceDetails(PriceRange){
    let output = "";
    
    if ((PriceRange == "") || (PriceRange == null)){
        return output
    }

    if ((PriceRange["min"] != "") && (PriceRange["min"] != null)){
        output += PriceRange["min"] + " - ";
    }

    if ((PriceRange["max"] != "") && (PriceRange["max"] != null)){
        output += PriceRange["max"];
    }

    return output + " USD"
}

function gmapHref(location){
    let url = "https://www.google.com/maps/search/?api=1&query=";
    let completeAddress = "";

    if (location["line1"]) completeAddress = completeAddress + location["line1"] + " ";
        if(location["city"]) completeAddress = completeAddress + location["city"] + " ";
            if(location["state"]) completeAddress = completeAddress + location["state"] + " ";
                if(location["postalCode"]) completeAddress = completeAddress + location["postalCode"];


    completeAddress = encodeURIComponent(completeAddress);
    return url + completeAddress;
}

function generateVenueDetails(responseData, venueDetailsDiv){
    const outerDiv = document.createElement("div");
    outerDiv.classList.add("outer-container");

    const mapCard = document.createElement("div");
    mapCard.classList.add("map-card");
    outerDiv.appendChild(mapCard);
    venueDetailsDiv.appendChild(outerDiv);

   
    const titleContainer = document.createElement("div");
    titleContainer.classList.add("title-container")
    const venueName = document.createElement("p");
    venueName.classList.add("venue-name");
    let name = ""
    if(responseData["name"]){
        name = responseData["name"]
    }
    else{
        name = "N/A"
    }
    venueName.innerHTML = name;
    titleContainer.appendChild(venueName);
    
    // if(name != "N/A"){
    //     const line = document.createElement("hr");
    //     line.classList.add("venue-line")
    //     titleContainer.appendChild(line);

    // }

    mapCard.appendChild(titleContainer);

    if(responseData["image"]){
        const imageContainer = document.createElement("div")
        imageContainer.classList.add("image-container");
        imageContainer.classList.add("image-container");

        const img = document.createElement("img");
        img.src = responseData["image"];
        img.style.width = "180px";
        img.style.height = "90px";
        
        imageContainer.appendChild(img);
        mapCard.appendChild(imageContainer);
    }

    const divContent = document.createElement("div");
    divContent.classList.add("event-content-container");
    divContent.classList.add("event-content-container-enh");

    const leftContainer = document.createElement("div");
    leftContainer.classList.add("left-container");
    leftContainer.classList.add("left-container-style");
    divContent.appendChild(leftContainer);
    
    const rightContainer = document.createElement("div");
    rightContainer.classList.add("right-container");
    rightContainer.classList.add("right-container-style");
    divContent.appendChild(rightContainer);
    
    mapCard.appendChild(divContent);

    // Populating the address details and gmap link

    if(responseData["address"]){
        const addrDiv = document.createElement("div");
        addrDiv.style.marginTop = "5px";
        const line1 = document.createElement("p");
        const strong = document.createElement("p")
        strong.innerHTML = "Address: "
        strong.style.fontWeight = "bold";
        strong.style.display = "inline";
        strong.style.marginLeft = "100px"
        line1.innerHTML = responseData["address"]["line1"];
        line1.style.marginLeft = "5px";
        line1.style.display = "inline";

        const city = document.createElement("p");
        city.style.marginTop = "1px";
        city.style.marginLeft = "170px";
        city.style.marginBottom = "0px";
        city.innerHTML = responseData["address"]["city"] + ", " + responseData["address"]["state"];
        
        const postalCode = document.createElement("p");
        postalCode.innerHTML = responseData["address"]["postalCode"];
        postalCode.style.marginTop = "1px";
        postalCode.style.marginLeft = "170px"

        addrDiv.appendChild(strong);
        addrDiv.appendChild(line1);
        addrDiv.appendChild(city);
        addrDiv.appendChild(postalCode);

        leftContainer.appendChild(addrDiv);

        const gmapContainer =  document.createElement("div");
        gmapContainer.style.display = "flex";
        gmapContainer.style.justifyContent = "center";

        let gmapUrl = gmapHref(responseData["address"]);
        const gmap = document.createElement("a");
        gmap.style.marginTop = "2px";
        gmap.innerHTML = "Open in Google Maps";
        gmap.href = gmapUrl;
        gmap.rel = "noopener";
        gmap.target = "_blank";
        gmap.classList.add("left-container-a-enh");
        gmapContainer.appendChild(gmap);
        leftContainer.appendChild(gmapContainer);
        
    }
    
    else{
        
        const addrDiv = document.createElement("div");
        addrDiv.style.marginTop = "5px";
        const line1 = document.createElement("p");
        const strong = document.createElement("p")
        strong.innerHTML = "Address: "
        strong.style.fontWeight = "bold";
        strong.style.display = "inline";
        strong.style.marginLeft = "100px"
        line1.innerHTML = "N/A";
        line1.style.marginLeft = "5px";
        line1.style.display = "inline";

        addrDiv.appendChild(strong);
        addrDiv.appendChild(line1);
       
        leftContainer.appendChild(addrDiv);

        const gmapContainer =  document.createElement("div");
        gmapContainer.style.display = "flex";
        gmapContainer.style.justifyContent = "center";

        const gmap = document.createElement("a");
        gmap.style.marginTop = "2px";
        gmap.innerHTML = "Open in Google Maps";
        gmap.classList.add("left-container-a-enh");
        gmapContainer.appendChild(gmap);
        leftContainer.appendChild(gmapContainer);
    }
    
        // Populating the upcoming events link
        const upcomingEvents = document.createElement("a");
        upcomingEvents.innerHTML = "More Events at this venue";

        if(responseData["upcomingEvents"]){
            upcomingEvents.href = responseData["upcomingEvents"];
            upcomingEvents.rel = "noopener";
            upcomingEvents.target = "_blank";
        }
        upcomingEvents.classList.add("left-container-a-enh");
        rightContainer.appendChild(upcomingEvents);
    

    outerDiv.scrollIntoView();
}
// Function to fetch event details from the TicketMaster API through the Flask backend
// and dynamically populate the div with the seatmap and other info.
async function getEventDetails(id, eventName, genre){
    const url = `/api/eventdetails?id=${encodeURIComponent(id)}`; 
    await sendJsonData(url)
        .then((res) => res.json())
        .then((data) => {
        console.log(data);
            
        const responseData = data["response"];
        const eventdetailsDiv = document.querySelector(".event-details");
        eventdetailsDiv.classList.add("event-details-enh");
        
        // Selecting the venue details div to populate it with the "Show Venue Details" and Down Arrow icon.
        const venueDetailsDiv = document.querySelector(".venue-details");

        // Selected the div container inside the event-details container which has class name "title-container"
        // Adding a heading2 inside this container which holds the event name.
        const divTitle = document.createElement("div");
        divTitle.classList.add("title-conatiner");
        eventdetailsDiv.appendChild(divTitle);

        // Also creating here our next div for icons and "Show Venue Details "
        // and appending it to the venue-details div.
        const innerContainer = document.createElement("div");
        innerContainer.classList.add("inner-container");

        const titleHeaderSh = document.createElement("p");    
        titleHeaderSh.innerHTML = "Show Venue Details";
        titleHeaderSh.classList.add("venue-details-p-style");
        innerContainer.appendChild(titleHeaderSh);
        
        const divIcon = document.createElement("div");
        divIcon.classList.add("icon-container");
        innerContainer.appendChild(divIcon);

        venueDetailsDiv.appendChild(innerContainer);

        // Lets create an icon using fonts awesome
        const arrowDown = document.createElement("i");
        arrowDown.classList.add("fa-solid");
        arrowDown.classList.add("fa-chevron-down");
        divIcon.appendChild(arrowDown);


        const titleHeader = document.createElement("h2");    
        titleHeader.innerHTML = eventName;
        divTitle.appendChild(titleHeader);
        
        const divContent = document.createElement("div");
        divContent.classList.add("event-content-container");
        divContent.classList.add("event-content-container-enh");
        eventdetailsDiv.appendChild(divContent);

        // Selecting the left-container and right container respectively which are present inside the div container with
        // class-name "event-container"

        // Adding the seat map to the right-container
        // Adding the other fetched data from flask in the left-container.
    
        const leftContainer = document.createElement("div");
        leftContainer.classList.add("left-container");
        leftContainer.classList.add("left-container-enh");
        divContent.appendChild(leftContainer);
        
        const rightContainer = document.createElement("div");
        rightContainer.classList.add("right-container");
        rightContainer.classList.add("right-container-enh");
        divContent.appendChild(rightContainer);


        // Populating the left-container with date fetched from flask
        if((responseData["localTime"]) || (responseData["localDate"])){
            let date = "";
            const leftContainerDateHead = document.createElement("h3");
            leftContainerDateHead.innerHTML = "Date";
            leftContainer.appendChild(leftContainerDateHead);

            if((responseData["localDate"]) && (!(responseData["localTime"]))){
                date += responseData["localDate"];
            }
            
            if (!(responseData["localDate"]) && ((responseData["localTime"]))){
                date += responseData["localTime"];
            }
            else{
                date += responseData["localDate"];
                date += " ";
                date += responseData["localTime"];
            }
            const leftContainerDateContent = document.createElement("p");
            leftContainerDateContent.innerHTML = date;
            leftContainerDateContent.classList.add("left-container-content-style");
            leftContainer.appendChild(leftContainerDateContent);
            
        }
        

        // Populating the left-container with Artist Details fetched from flask

        if(responseData["artist"]["name"]){
            let url = ""
            const leftContainerArtistHead = document.createElement("h3");
            leftContainerArtistHead.innerHTML = "Artist/Team";
            leftContainer.appendChild(leftContainerArtistHead);

            const leftContainerArtistContent = document.createElement("a");
            leftContainerArtistContent.innerHTML = responseData["artist"]["name"];

            if((responseData["artist"]["url"])){
                leftContainerArtistContent.href = responseData["artist"]["url"];
                leftContainerArtistContent.rel = "noopener";
                leftContainerArtistContent.target = "_blank";
            }
            
            leftContainerArtistContent.classList.add("left-container-a-style");
            leftContainer.appendChild(leftContainerArtistContent);
        }


        // Populating the left-container with Venue Details fetched from flask.

        if(responseData["venue"]){
            const leftContainerVenueHead = document.createElement("h3");
            leftContainerVenueHead.innerHTML = "Venue";
            leftContainer.appendChild(leftContainerVenueHead);

            const leftContainerVenueContent = document.createElement("p");
            leftContainerVenueContent.innerHTML = responseData["venue"];
            leftContainerVenueContent.classList.add("left-container-content-style");
            leftContainer.appendChild(leftContainerVenueContent);
        }
        

        let genreString = generateGenreString(responseData, genre);
        if(genreString){
            // Populating the left-container with Genres Details fetched from flask.
            const leftContainerGenresHead = document.createElement("h3");
            leftContainerGenresHead.innerHTML = "Genres";
            leftContainer.appendChild(leftContainerGenresHead);
            const leftContainerGenresContent = document.createElement("p");
            leftContainerGenresContent.innerHTML = genreString;
            leftContainerGenresContent.classList.add("left-container-content-style");
            leftContainer.appendChild(leftContainerGenresContent);

        }


        // Populating the left-container with Ticket Status Details fetched from flask.
        if(responseData["ticketStatus"]){
            const leftContainerTicketStatusHead = document.createElement("h3");
            leftContainerTicketStatusHead.innerHTML = "Ticket Status";
            leftContainer.appendChild(leftContainerTicketStatusHead);
            
            const newDiv = document.createElement("div");
            newDiv.style.borderRadius = "5px";

            let obj = decideDivColor(responseData["ticketStatus"]);
            newDiv.style.backgroundColor = obj["divColor"];
            newDiv.style.marginLeft = "10px";
            newDiv.style.marginTop = "5px";
            newDiv.style.width = "fit-content";
            newDiv.style.height = "fit-content";
            leftContainer.appendChild(newDiv);
            const leftContainerTicketStatusContent = document.createElement("p");
            leftContainerTicketStatusContent.innerHTML = obj["divContent"];
            leftContainerTicketStatusContent.classList.add("left-container-content-style-sale");
            newDiv.appendChild(leftContainerTicketStatusContent);
        }

        // Populating the left-container with Price Range Details fetched from flask.
        if (responseData["priceRanges"]){
            const leftContainerPriceHead = document.createElement("h3");
            leftContainerPriceHead.innerHTML = "Price Range";
            leftContainer.appendChild(leftContainerPriceHead);

            const leftContainerPriceContent = document.createElement("p");
            let priceDetails = getPriceDetails(responseData["priceRanges"]);
            leftContainerPriceContent.innerHTML = priceDetails;
            leftContainerPriceContent.classList.add("left-container-content-style");
            leftContainer.appendChild(leftContainerPriceContent);
        }

        // Populating the left-container with Ticket Purchase Link Details fetched from flask.

        if (responseData["saleUrl"]){
            const leftContainerPurchaseHead = document.createElement("h3");
            leftContainerPurchaseHead.innerHTML = "Buy At";
            leftContainer.appendChild(leftContainerPurchaseHead);

            const leftContainerPurchaseContent = document.createElement("a");
            leftContainerPurchaseContent.innerHTML = "Ticketmaster";
            leftContainerPurchaseContent.href = responseData["saleUrl"];
            leftContainerPurchaseContent.rel = "noopener";
            leftContainerPurchaseContent.target = "_blank";
            leftContainerPurchaseContent.classList.add("left-container-a-style");
            leftContainer.appendChild(leftContainerPurchaseContent);
        }
           
        /* Adding the seat map to the right-container */
        
        if(responseData["seatMap"]){
            const rightContainerImage = document.createElement("img");
            rightContainerImage.src = responseData["seatMap"];
            rightContainerImage.style.width = "450px";
            rightContainerImage.style.height = "300px";
            rightContainerImage.style.margin = "auto";
            rightContainerImage.style.marginTop = "30px";
            rightContainer.appendChild(rightContainerImage);
        }
        
        eventdetailsDiv.scrollIntoView();

        arrowDown.addEventListener("click", async() => {
            
            innerContainer.style.display = "none";

            if(responseData["venue"])
            {
                const url = `/api/venuedetails?venue=${encodeURIComponent(responseData["cityName"] + " " + responseData["venue"])}`; 
                await sendJsonData(url)
                    .then((res) => res.json())
                    .then((data) => {
                    console.log(data);
                    if(data["flag"]){
                        generateVenueDetails(data["response"], venueDetailsDiv);
                    }
                    else{
                        const eventdetailsDiv = document.querySelector(".event-details-div");
                        eventdetailsDiv.classList.add("event-details-enh");
                        const divTitle = document.createElement("h1");
                        divTitle.innerHTML = "No Records Found";
                    }

                    })
                    .catch((err) => {
                        console.log("Error: ");
                        console.log(err)
                        generateNoResultsBox(".venue-details")
                    });
            }
        });
    })
    .catch((err) => {
        console.log("Error: ");
        console.log(err)
        generateNoResultsBox(".event-details")
    });

    inProgressDetail = false;
}


// Sorting the table rows based on clicks on the header.
// Credits : w3 schools
function sortTable(n) {
    let table, rows, i, x, y, shouldSwitch;
    let switchFlag = true;
    let direction = "asc";
    let switchcount = 0;
    table = document.getElementsByClassName("dynamic-events-table");
    
    while (switchFlag) {
      switchFlag = false;
      rows = document.querySelectorAll("tr");
     
      for (i = 1; i < rows.length - 1; i++) {
        shouldSwitch = false;
        
        x = rows[i].getElementsByTagName("td")[n];
        y = rows[i + 1].getElementsByTagName("td")[n];
        
        if (direction  == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        } else if (direction == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switchFlag = true;
        switchcount ++;
      } else {
        
            if (switchcount == 0 && direction == "asc") {
            direction = "desc";
            switchFlag = true;
            }
      }
    }
}



function generateNoResultsBox(divName){
    divElement = document.querySelector(divName);
    divElement.classList.add("no-records-found");
    messageElement = document.createElement('h2');
    messageElement.innerHTML = "No Records Found";
    messageElement.classList.add("message");
    divElement.appendChild(messageElement);

    divElement.scrollIntoView();
}

// Function to generate the Table Rows and Cells dynamically based on the number of events received from the flask api
// and populating it with the data like "data", "icon", "event", "genre", "venue". 
function generateDynamicTable(data){
    if(data["flag"] == false){
        // divElement = document.querySelector(".dynamic-events-div");
        // divElement.classList.add("no-records-found");
        // messageElement = document.createElement('h2');
        // messageElement.innerHTML = "No Records Found";
        // messageElement.classList.add("message");
        // divElement.appendChild(messageElement);
        generateNoResultsBox(".dynamic-events-div");
    }

    else{
        // extracting the value of "response" key from the data sent to the function.
        let responseData = data["response"];

        // Calculating the number of events in the data received from flask.
        let numberOfRows = Object.keys(responseData).length;
        console.log(`Number of Events: ${numberOfRows}`);
        
        // Get the existing div element with class "dynamic-table_div"
        divElement = document.querySelector(".dynamic-events-div");

        // Create a new table element
        tableElement = document.createElement('table');
        tableElement.classList.add("dynamic-events-table");
        
        // Create table header
        const headerRow = tableElement.insertRow();
        const headerLabels = ["Date", "Icon", "Event", "Genre", "Venue"];
        for (let i = 0; i < headerLabels.length; i++) {
            const headerCell = headerRow.insertCell();
            headerCell.classList.add(`thead_${i}`);
            headerCell.classList.add(`th`);
            headerCell.style.textAlign = "center";
            headerCell.style.verticalAlign = "center";
            headerCell.style.fontWeight = "bold";
            if (i > 1) headerCell.style.cursor = "pointer";
            headerCell.textContent = headerLabels[i];
        }

        // Create the table rows and table cells.
        for (let i = 0; i < numberOfRows; i++){

            // Inserting a row in the table.
            let row = tableElement.insertRow();
            row.classList.add(`trow_${i}`)

            // Creating a cell for the date.
            let cell = row.insertCell();
            cell.innerHTML = responseData[i]["localDate"] + "  " + responseData[i]["localTime"] ;
            cell.style.width = "120px";
            cell.style.height = "50px";
            cell.style.verticalAlign = "center"
            cell.style.textAlign = "center";
        
            // Creating a cell for the icon.
            cell = row.insertCell();
            const image = document.createElement("img");
            image.src = `${responseData[i]["icon"]}`;
            image.style.width = "90px";
            image.style.height = "60px";
            image.style.margin = "auto";
            image.style.marginTop = "5px";    
            cell.style.width = "140px";
            cell.style.height = "50px";
            cell.style.textAlign = "center";
            cell.style.verticalAlign = "center"
            cell.appendChild(image)


            // Creating a cell for the event.
            cell = row.insertCell();
            // cell.innerHTML = responseData[i]["event"];
            const link = document.createElement('a');
            link.textContent = `${responseData[i]["event"]}`;
            link.style.cursor = 'pointer';
            link.classList.add('event-link');
            cell.appendChild(link);

        
            link.addEventListener('click', async() => {
                // Do something when the link is clicked, e.g. show an alert
                console.log(`You Clicked id: ${responseData[i]["id"]}`);
                if(document.querySelector(".event-details-enh")){
                    document.querySelector(".event-details").classList.remove("event-details-enh");
            
                    console.log("Removed the enhancement for event-details div!");
            
                    if(document.querySelector(".title-conatiner")){
                        document.querySelector(".title-conatiner").remove();
                        console.log("Deleted Title Container also!");
                    }
            
                    if(document.querySelector(".event-content-container")){
                        document.querySelector(".event-content-container").remove();
                        console.log("Deleted Event Content Container also!");
                    }

                    if(document.querySelector(".inner-container")){
                        document.querySelector(".inner-container").remove();
                    }

                    if(document.querySelector(".outer-container")){
                        document.querySelector(".outer-container").remove();
                    }
                }

                if(!inProgressDetail){
                    inProgressDetail = true;
                    await getEventDetails(responseData[i]["id"], responseData[i]["event"], responseData[i]["genre"])

                }

            });

            
            cell.style.textAlign = "center";
            cell.style.verticalAlign = "center"
            cell.style.height = "50px";
            cell.style.width = "600px";
        
            // Creating a cell for the genre.
            cell = row.insertCell();
            cell.innerHTML = responseData[i]["genre"];
            cell.style.width = "100px";
            cell.style.height = "50px";
            cell.style.verticalAlign = "center"
            cell.style.textAlign = "center";
        
            // Creating a cell for the venue.
            cell = row.insertCell();
            cell.innerHTML = responseData[i]["venue"];
            cell.style.width = "300px";
            cell.style.height = "50px";
            cell.style.verticalAlign = "center"
            cell.style.textAlign = "center";
            
        }

        // Add styles to the table and cells
        tableElement.style.border = '1px solid black';
        tableElement.style.borderCollapse = 'collapse';
        tableElement.style.backgroundColor = "white";
        tableElement.style.margin = "30px auto 0px auto"
        const cellElements = tableElement.getElementsByTagName('td');
        for (let i = 0; i < cellElements.length; i++) {
        cellElements[i].style.border = '1px solid black';
        cellElements[i].style.padding = '5px';
        }

        // Append the new table element to the existing div element
        divElement.appendChild(tableElement);
        
    }

    inProgressEvent = false;
}

function removeElementsMain(){
    console.log("Inside remove Elements Function!!");
    console.log(`In Progress: ${inProgressEvent}`);
    // If the dynamic-events-table which gets generated dynamically is present we just remove it.
    const dynamicTable = document.querySelector(".dynamic-events-table");

    
    if (dynamicTable){
        console.log("Table got Deleted!");
        dynamicTable.remove()
    }


    if(document.querySelector(".no-records-found")){
        divElement = document.querySelector(".dynamic-events-div");
        divElement.classList.remove("no-records-found");
        console.log("Removed the no-records-found class from dynamic-events-div!");
    }

    if(document.querySelector(".message")){
        document.querySelector(".message").remove();
        console.log("Removed the message element!");
    }

    if(document.querySelector(".event-details-enh")){
        document.querySelector(".event-details").classList.remove("event-details-enh");

        console.log("Removed the enhancement for event-details div!");

        if(document.querySelector(".title-conatiner")){
            document.querySelector(".title-conatiner").remove();
            console.log("Deleted Title Container also!");
        }

        if(document.querySelector(".event-content-container")){
            document.querySelector(".event-content-container").remove();
            console.log("Deleted Event Content Container also!");
        }
    }

    if(document.querySelector(".inner-container")){
        document.querySelector(".inner-container").remove();
    }

    if(document.querySelector(".outer-container")){
        document.querySelector(".outer-container").remove();
    }
}

// Adding an event listener to the clearButton and checking if the user clicks the button or not inorder to clear the form data
// by calling the clearForm() as a callback.
clearButton.addEventListener("click", clearForm);


// Adding an event listener to the checkBox and checking if the user checks it or not in order to collapse the location text box
// by calling the handleCheckBox() as a callback.
checkbox.addEventListener("click", handleCheckBox);

// Adding an event listener to the form element and checking if the SEARCH Button is clicked by the user or not in order to
// collect the form data and send it to the flask api.
form.addEventListener('submit', async (event) => {
    
    removeElementsMain();

    event.preventDefault();

    const formData = new FormData(form);
    var object = {};
    formData.forEach(function(value, key){
        object[key] = value;
    });


    // Separate routine if the checkbox is checked.
    if(!inProgressEvent) {
        console.log("About to fetch data from the sever!");
        if (checkbox.checked){
            
            // Calling the fetchGeoLocation() to get the current location of the user 
            inProgressEvent = true;
            await fetchGeoLocation()
                .then((res) => res.json())
                .then(async (data) => {
                    console.log("Auto-Detected Location is: ");
                    console.log(data);
                    object["location"] = data["city"]+ ", " + data["region"];
                    })
                    .catch((err) => {
                        console.log("Error: ");
                        console.log(err)
                    });
                }
                let jsonData = JSON.stringify(object);
                
                // Calling the sendJsonData(url) to parse the formdata to the flask api and get the response from it. 
                const url = `api/eventsearch?data=${encodeURIComponent(jsonData)}`;
    
                await sendJsonData(url)
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);

                        console.log(`Flag from API is ${data["flag"]}`);
                        // Using the received data to generate and dynamically populate the table.
                        generateDynamicTable(data);
                        
                        // Adding an event listener to all the headers and sorting the table data based on the header.
                        const headers = document.querySelectorAll('.th');
                        [].forEach.call(headers, function (header, index) {
                            header.addEventListener('click', function () {
                                console.log("Header clicked");
                                sortTable(index);
                            });
                        });

                    })
                    .catch((err) => {
                        console.log("Error: ");
                        console.log(err)
                        generateNoResultsBox(".dynamic-events-div");
                    });
        
    }   
});

