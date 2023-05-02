//
//  FavouritesView.swift
//  EventSearch
//
//  Created by Sudesh Kumar on 4/30/23.
//

import SwiftUI

struct FavouritesView: View {
    @AppStorage("savedFavData") private var savedFavData: Data?
//    @State private var savedFavourites: [FavouritesData] = []
        
    func loadFavourites() -> [FavouritesData] {
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
        var savedFavourites = loadFavourites()
        savedFavourites.removeAll(where: { $0.eventId == currEventId })
        updateFavourites(favourites: savedFavourites)
    }
    
    var body: some View {
        let savedEvents: [FavouritesData] = loadFavourites()
        
        if(savedEvents.count != 0){
            ZStack{
                Form{
                    Text("Favorites")
                        .fontWeight(.bold)
                        .font(.system(size: 35))
                    List{
                        ForEach(savedEvents, id: \.self){ savedEvent in
                            NavigationLink(destination:  EventsDetailsView(eventId: Binding.constant(savedEvent.eventId), eventName: Binding.constant(savedEvent.eventName), venue: Binding.constant(savedEvent.venue))){
                                FavouritesTableView(item: savedEvent)
                                    .padding(.top, 0)
                                    .padding(.leading, -2).padding(.trailing, -2)
                            }
                            
                        }
                        .onDelete { indexSet in
                            // Loop through the indices of the deleted rows
                            for index in indexSet {
                                // Get the current event's ID based on its position in the list
                                let currEventId = savedEvents[index].eventId
                                
                                // Call the deleteFromFavourites() function with the current event's ID
                                deleteFromFavourites(currEventId: currEventId)
                            }
                        }
                        
                    }
                    
                }
            }
            .padding(0)
            
        }else{
            NoFavouritesView()
        }
    }
}

struct FavouritesView_Previews: PreviewProvider {
    static var previews: some View {
        FavouritesView()
    }
}
