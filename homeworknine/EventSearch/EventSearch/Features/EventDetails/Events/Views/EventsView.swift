//
//  EventsView.swift
//  EventSearch
//
//  Created by Sudesh Kumar on 4/20/23.
//

import SwiftUI
import SimpleToast

struct EventsView: View {
    @Binding var currentEventId: String
    @Binding var currentEventName: String
    @Binding var currentVenueName: String?
    
    @ObservedObject var events_vm: EventsViewModelImpl
    @ObservedObject var venue_vm: VenueViewModelImpl
    @ObservedObject var artist_vm: ArtistTeamViewModelImpl
    
    @State private var ifAddedToFav: Bool = true
    @State private var showFavouritesToast: Bool = false
    @State private var removeFavouritesToast: Bool = false
    
    
    @AppStorage("savedFavData") private var savedFavData: Data?
    @State private var savedFavourites: [FavouritesData] = []

    
    private let toastOptions = SimpleToastOptions(
            alignment: .bottom,
            hideAfter: 2
       )
    
    // User-defined function to format the Artist Details and separate the individual artists by " | "
    func formatArtistDetails(artistTeam: [String]) -> String{
        var artistNames: String = ""
        
        artistTeam.enumerated().forEach{ (index, name) in
            if (index == 0){
                artistNames = name
            }
            
            else if (index == artistTeam.count - 1){
                artistNames = artistNames + name
            }
            
            else{
                artistNames = artistNames + " | " + name
            }
        }
        
        if (artistTeam.count == 0)
        {
            return "-"
        }
        
        return artistNames
    }
    
    
    // User-defined function to format the Price Ranges minimum and maximum prices by "-"
    func formatPriceRanges(minimum: String, maximum:  String) -> String{
        var price: String = ""
        
        if ((minimum != "-1") && (maximum != "-1")){
            price = minimum + "-" + maximum
        }
        
        return price
    }
    
    
    // User-defined function to format the various genres returned by the Nodejs backend and separate them by " | "
    func formatGenre(subGenre: String, genre: String, segment: String, type: String, subType: String) -> String{
        let categories: [String] = [segment, genre, subGenre, type, subType]
        let nonNilCategories = categories.filter({ $0 != "-" })
        let categoryString = nonNilCategories.joined(separator: " | ")
        return categoryString
    }
    
    //User-defined function to return the color corresponding to the ticket status sent as params.
    func formatTicketStatusColor(ticketStatus: String) -> Color{
        switch ticketStatus {
            
            case "onsale":
            return Color.green
            case "offsale":
                return Color.red
            case "postponed":
                return Color.orange
            case "rescheduled":
                return Color.orange
            default:
                return Color.black
            }
    }
    
    //User-defined function to return the exact Ticket Status corresponding to the ticket status sent as params.
    func formatTicketStatus(ticketStatus: String) -> String{
        switch ticketStatus {
            
            case "onsale":
                return "On Sale"
            case "offsale":
                return "Off Sale"
            case "canceled":
                return "Canceled"
            case "postpopned":
                return "Postponed"
            case "rescheduled":
                return "Rescheduled"

            default:
                return "-"
            }
    }
    
    func getSavedFavourites() -> [FavouritesData] {
        guard let savedData = savedFavData else {
            return []
        }
        if let savedFavourites = try? JSONDecoder().decode([FavouritesData].self, from: savedData) {
            return savedFavourites
        } else {
            return []
        }
    }
    
    func updateFavourites(favourites: [FavouritesData]) {
        if let encoded = try? JSONEncoder().encode(favourites) {
            savedFavData = encoded
        }
    }
    
    func deleteFromFavourites(currEventId: String){
        savedFavourites = getSavedFavourites()
        savedFavourites.removeAll(where: { $0.eventId == currEventId })
        updateFavourites(favourites: savedFavourites)
    }
    
    
    func addToFavourites(currEvent: FavouritesData){
        savedFavourites = getSavedFavourites()
        savedFavourites.insert(currEvent, at: 0)
        updateFavourites(favourites: savedFavourites)
    }
    
    
    func checkEventExists() -> Bool{
        print("Inside the checkEventExists() func!")
        var flag: Bool = true
        
        let savedEvents: [FavouritesData] = getSavedFavourites()
        
        if(savedEvents.count != 0){
            savedEvents.forEach{savedEvent in
                if(savedEvent.eventId == currentEventId){
                    flag = false
                }
            }
        }
        
        return flag ? true : false
    }
    
    
    
    // The Events View starts here...
    var body: some View {
        let _ = Self._printChanges()
        
        let twitterText: String = "Check out \(currentEventName) on Ticketmaster!".addingPercentEncoding(withAllowedCharacters: .urlQueryAllowed)!
        
        let genreString: String = formatGenre(subGenre:  events_vm.response.data?.subGenre ?? "-",
                                              genre: events_vm.response.data?.genre ?? "-",
                                              segment: events_vm.response.data?.segment ?? "-",
                                              type: events_vm.response.data?.type ?? "-",
                                              subType: events_vm.response.data?.subType ?? "-")
        let artistNames: String = formatArtistDetails(artistTeam: events_vm.response.data?.artist ?? [""])
        
        
        let genreMaxLength = 17 // maximum length of the string
        let artistMaxLength = 17 // maximum length of the string
        
        let truncatedGenreString = (genreString).prefix(genreMaxLength) + (genreString.count > genreMaxLength ? "..." : "")
        let truncatedartistNames = (artistNames).prefix(artistMaxLength) + (artistNames.count > artistMaxLength ? "..." : "")
        
        
        VStack(alignment: .leading, spacing: 10){
            
            // Checking if the API call is still in pending state. The events_vm.isLoading with become false once the promise gets resolved by the backend Nodejs Server.
            if(events_vm.isLoading)  {
                VStack {
                    ProgressView()
                    Text("Please Wait ...")
                        .font(.headline)
                        .fontWeight(.semibold)
                        .foregroundColor(.secondary)
                }
                .frame(maxWidth: .infinity, maxHeight: .infinity)
            }
            
            // Displaying the Results when the response object got loaded.
            else{
                
                // Display Event Name in the top.
                Text(currentEventName)
                    .fontWeight(.bold)
                    .font(.system(size: 30))
                    .frame(maxWidth: .infinity)
                    .padding(.bottom, 10)
                    .padding(.top, -50)
                
                
                // All Content below the Event Name...
                HStack(spacing: -25){
                    
                    // Content placed to the left of the HStack.
                    VStack(alignment: .leading) {
                        
                        // Display Date.
                        Text("Date")
                            .padding(.leading, 10)
                            .fontWeight(.semibold)
                            .font(.system(size: 20))
                            .padding(.top, -3)
                        
                        Text(events_vm.response.data?.localDate ?? "-")
                            .padding(.leading, 10)
                            .fontWeight(.semibold)
                            .foregroundColor(.gray)
                            .font(.system(size: 17))
                            .padding(.bottom, 7)
                        
                        
                        // Display Venue.
                        Text("Venue")
                            .padding(.leading, 10)
                            .fontWeight(.semibold)
                            .font(.system(size: 20))
                        
                        Text(events_vm.response.data?.venue ?? "-")
                            .padding(.leading, 10)
                            .fontWeight(.semibold)
                            .foregroundColor(.gray)
                            .font(.system(size: 17))
                            .padding(.bottom, 7)
                        
                        
                        // Display Price ranges Min and Max.
                        Text("Price Range")
                            .padding(.leading, 10)
                            .fontWeight(.semibold)
                            .font(.system(size: 20))
                        
                        let price: String = formatPriceRanges(minimum: String(events_vm.response.data?.priceRanges?.min ?? -1), maximum: String(events_vm.response.data?.priceRanges?.max ?? -1))
                        Text(price)
                            .padding(.leading, 10)
                            .fontWeight(.semibold)
                            .foregroundColor(.gray)
                            .font(.system(size: 17))
                            .padding(.bottom, 7)
                        
                        
                    }
                    
                    Spacer()
                    
                    // Content placed to the right of the HStack.
                    VStack(alignment: .trailing) {
                        
                        // Display Artist / Team.
                        Text("Artist | Team")
                            .padding(.trailing, 10)
                            .fontWeight(.semibold)
                            .font(.system(size: 20))
                        
                        Text(truncatedartistNames)
                            .padding(.trailing, 10)
                            .fontWeight(.semibold)
                            .foregroundColor(.gray)
                            .font(.system(size: 17))
                            .padding(.bottom, 7)
                        
                        
                        // Display Genre.
                        Text("Genre")
                            .padding(.trailing, 10)
                            .fontWeight(.semibold)
                            .font(.system(size: 20))
                        
                        
                        Text(truncatedGenreString)
                            .padding(.trailing, 10)
                            .fontWeight(.semibold)
                            .foregroundColor(.gray)
                            .font(.system(size: 17))
                            .padding(.bottom, 7)
                        
                        
                        
                        // Display Ticket Status.
                        Text("TicketStatus")
                            .padding(.trailing, 10)
                            .fontWeight(.semibold)
                            .font(.system(size: 20))
                            .padding(.bottom, -7)
                        
                        let ticketStatus: String = formatTicketStatus(ticketStatus: events_vm.response.data?.ticketStatus ?? "-")
                        let ticketStatusColor: Color = formatTicketStatusColor(ticketStatus: events_vm.response.data?.ticketStatus ?? "-")
                        
                        ZStack {
                            Rectangle()
                                .fill(ticketStatusColor)
                                .cornerRadius(5)
                                .frame(width: 110, height: 30)
                                .padding(.trailing, 10)
                            Text(ticketStatus)
                                .font(.system(size: 17))
                                .foregroundColor(.white)
                                .frame(width: 110, height: 30)
                                .multilineTextAlignment(.center)
                        }
                        .padding(.bottom, 7)
                        .padding(.trailing, 10)
                    }
                }
                
                if(checkEventExists()){
                    HStack{
                        Spacer()
                        Button(action: {
                            print("Added \(currentEventName) to Favourites!")
                            
                            let currentEvent: FavouritesData = FavouritesData(eventId: currentEventId,
                                                       date: events_vm.response.data?.localDate ?? "-",
                                                       eventName: currentEventName,
                                                       genre: genreString,
                                                       venue: events_vm.response.data?.venue ?? "-")
                            
                            addToFavourites(currEvent: currentEvent)
                            
                            showFavouritesToast = true
                            ifAddedToFav = false
                            
                            
                        }) {
                            Text("Save Event")
                                .font(.system(size: 20))
                                .foregroundColor(.white)
                                .padding()
                                .frame(width: 160, alignment: .center)
                                .background(Color.blue)
                                .cornerRadius(15)
                        }
                        .buttonStyle(BorderlessButtonStyle())
                        Spacer()
                    }
                    
                }
                else{
                    HStack{
                        Spacer()
                        Button(action: {
                            print("Removed \(currentEventName) from  Favourites!")
                            
                            deleteFromFavourites(currEventId: currentEventId)
                            
                            ifAddedToFav = true
                            removeFavouritesToast = true
                        }) {
                            Text("Remove From Favourites")
                                .font(.system(size: 20))
                                .foregroundColor(.white)
                                .padding()
                                .frame(width: 250, alignment: .center)
                                .background(Color.red)
                                .cornerRadius(15)
                        }
                        .buttonStyle(BorderlessButtonStyle())
                        Spacer()
                    }
                }
                HStack {
                    Spacer()
                    
                    AsyncImage(url: URL(string: events_vm.response.data?.seatMap ?? "")) { image in
                        image
                            .resizable()
                            .clipShape(RoundedRectangle(cornerRadius: 10))
                    } placeholder: {
                        ProgressView()
                    }
                    .frame(width: 300, height: 250)
                    
                    Spacer()
                }
                .padding(.bottom, -10)
                
                HStack{
                    Spacer()
                    Text("Buy Ticket At: ")
                        .fontWeight(.semibold)
                        .font(.system(size: 17))
                        
                    if let saleUrl = events_vm.response.data?.saleURL{
                        Link(destination: URL(string: saleUrl)!,
                             label: {
                            Text("Ticketmaster")
                                .foregroundColor(.blue)
                        })
                    }
                    Spacer()
                }
                
                HStack{
                    Spacer()
                    Text("Share on: ")
                        .fontWeight(.semibold)
                        .font(.system(size: 17))
                        
                    if let saleUrl = events_vm.response.data?.saleURL{
                        Link(destination: URL(string: "https://www.facebook.com/sharer/sharer.php?u=\(saleUrl)&amp;src=sdkpreparse")!,
                             label: {
                            Image("FacebookIcon")
                                .resizable()
                                .aspectRatio(contentMode: .fit)
                                .frame(width: 30, height: 30)
                        })
                        
                        Link(destination: URL(string: "https://twitter.com/intent/tweet?url=\(saleUrl)&text=\(twitterText)")!,
                             label: {
                            Image("TwitterIcon")
                                .resizable()
                                .aspectRatio(contentMode: .fit)
                                .frame(width: 30, height: 30)
                        })
                    }
                    Spacer()
                }
                    
            }
        }
        .onAppear{
            Task{
                await events_vm.getEventDetails(queryParameters: ["id": currentEventId])
                
                await venue_vm.getVenueDetails(queryParameters: ["venue": currentVenueName ?? ""])
                
            }
        }
        .simpleToast(isPresented: $showFavouritesToast, options: toastOptions) {
            ZStack {
                Rectangle()
                    .fill(.gray).opacity(0.8)
                    .cornerRadius(15)
                    .frame(width: 270, height: 100)
                    .padding(.trailing, 10)
                Text("Added to Favourites!")
                    .font(.system(size: 17))
                    .foregroundColor(.black)
                    .frame(width: 270, height: 100)
                    .multilineTextAlignment(.center)
            }
            }
        .simpleToast(isPresented: $removeFavouritesToast, options: toastOptions) {
            ZStack {
                Rectangle()
                    .fill(.gray).opacity(0.8)
                    .cornerRadius(15)
                    .frame(width: 270, height: 100)
                    .padding(.trailing, 10)
                Text("Removed from Favourites!")
                    .font(.system(size: 17))
                    .foregroundColor(.black)
                    .frame(width: 270, height: 100)
                    .multilineTextAlignment(.center)
            }
        }
        
    }
}
           
           
struct EventsView_Previews: PreviewProvider {
    static var previews: some View {
        
        let new_events_vm = EventsViewModelImpl(
            service: EventsServiceImpl() )
        
        let new_venue_vm = VenueViewModelImpl(
            service: VenueServiceImpl())
        
        let new_artist_vm = ArtistTeamViewModelImpl(
            service: ArtistTeamServiceImpl())
        
        EventsView(currentEventId: .constant("sudeshkumar"),
                   currentEventName: .constant("Once Upon a Time"),
                   currentVenueName: .constant("Bangalore"),
                   events_vm: new_events_vm,
                   venue_vm: new_venue_vm,
                   artist_vm: new_artist_vm)
    }
}

/*
 
 
 */
