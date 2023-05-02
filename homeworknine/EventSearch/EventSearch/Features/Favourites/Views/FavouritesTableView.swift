//
//  FavouritesTableView.swift
//  EventSearch
//
//  Created by Sudesh Kumar on 4/30/23.
//

import SwiftUI

struct FavouritesTableView: View {
    let item: FavouritesData
    var body: some View {
        HStack(spacing: 5){
            
        
            Text(item.date ?? "-")
                .fontWeight(.medium)
                .foregroundColor(.black)
                .font(.system(size: 12.5))
                .frame(width: 80)
            
            
            Text(item.eventName)
                .fontWeight(.medium)
                .foregroundColor(.black)
                .font(.system(size: 12.5))
                .frame(width: 90)
            
            Text(item.genre ?? "-")
                .fontWeight(.medium)
                .font(.system(size: 12.5))
                .foregroundColor(.black)
                .frame(width: 90)
            
            Text(item.venue ?? "-")
                .fontWeight(.medium)
                .font(.system(size: 12.5))
                .foregroundColor(.black)
                .frame(width: 50)
            
        }
    }
}

struct FavouritesTableView_Previews: PreviewProvider {
    static var previews: some View {
        let sampleItem: FavouritesData = FavouritesData(eventId: "6969", date: "2022-05-15", eventName: "Once upon a time", genre: "Music", venue: "My Venue")
        FavouritesTableView(item: sampleItem)
    }
}
