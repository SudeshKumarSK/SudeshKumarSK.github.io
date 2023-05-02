//
//  TableView.swift
//  EventSearch
//
//  Created by Sudesh Kumar on 4/19/23.
//

import SwiftUI

struct TableView: View {
    
//    @ObservedObject var results_vm: ResultsViewModelImpl
    let item: Datum
    
    func formatDate(date: String, time: String) -> String{
        var dateTime: String = ""
        if (date != "-"){
            dateTime = date
        }
        
        if (time != "-"){
            dateTime = dateTime + "|" + time.prefix(5)
        }
        
        return dateTime
        
    }
    var body: some View {
        HStack(spacing: 10){
            
            let dateTime: String = formatDate(date: (item.localDate ?? "-"), time: item.localTime ?? "-")
            
            Text(dateTime)
                .fontWeight(.semibold)
                .foregroundColor(.gray)
                .font(.system(size: 15))
                .frame(width: 75)
            
            AsyncImage(url: URL(string: item.icon ?? "")) { image in
                image
                    .resizable()
                    .clipShape(RoundedRectangle(cornerRadius: 10))
            } placeholder: {
                ProgressView()
            }
            .frame(width: 70, height: 70)
            
            let maxLength = 20 // maximum length of the string
            let truncatedString = (item.event).prefix(maxLength) + (item.event.count > maxLength ? "..." : "")
            
            Text(truncatedString)
                .fontWeight(.bold)
                .foregroundColor(.black)
                .font(.system(size: 15))
                .frame(width: 80)
            
            Text(item.venue ?? "-")
                .fontWeight(.semibold)
                .font(.system(size: 15))
                .foregroundColor(.gray)
                .frame(width: 60)
            
        }
    }
}
                
        
struct TableView_Previews: PreviewProvider {
    static var previews: some View {
        let sampleItem: Datum = Datum(event: "Once Upon a Time", localDate: "2022-05-15", localTime: "00:00", genre: "Music", venue: "My Venue", icon: "https://usc.edu/sample_png.png", id: "6969")

        TableView(item: sampleItem)
    }
}
