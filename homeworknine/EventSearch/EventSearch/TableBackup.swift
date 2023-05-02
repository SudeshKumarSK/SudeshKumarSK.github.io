//
//  TableBackup.swift
//  EventSearch
//
//  Created by Sudesh Kumar on 4/20/23.
//

import SwiftUI

/*List(data, id: \.self) { item in
    NavigationLink(destination: EventsDetailsView()){
        Button(action: {
            print("Clicked on \(item.id!)")
        }){
            HStack(spacing: 5){
                
                let dateTime: String = formatDate(date: (item.localDate ?? "-"), time: item.localTime ?? "-")
                
                Text(dateTime)
                    .fontWeight(.semibold)
                    .foregroundColor(.gray)
                    .frame(width: 80)
                
                
                
                AsyncImage(url: URL(string: item.icon ?? "")) { image in
                    image
                        .resizable()
                        .clipShape(RoundedRectangle(cornerRadius: 10))
                } placeholder: {
                    ProgressView()
                }
                .frame(width: 60, height: 60)
                
                let maxLength = 20 // maximum length of the string
                let truncatedString = (item.event!).prefix(maxLength) + (item.event?.count ?? 0 > maxLength ? "..." : "")
                
                Text(truncatedString)
                    .fontWeight(.bold)
                    .foregroundColor(.black)
                    .font(.system(size: 20))
                    .frame(width: 85)
                
                Text(item.venue ?? "-")
                    .fontWeight(.semibold)
                    .foregroundColor(.gray)
                    .frame(width: 80)
                
                Symbols.next
                    .foregroundColor(.gray)
                    .frame(width: 10)
                
            }
            .opacity(0)
        }
        
    }
}
}
*/
