//
//  NoFavouritesView.swift
//  EventSearch
//
//  Created by Sudesh Kumar on 4/30/23.
//

import SwiftUI

struct NoFavouritesView: View {
    var body: some View {
        VStack{
            HStack{
                Text("Favorites")
                    .fontWeight(.bold)
                    .font(.system(size: 35))
                    .padding(.top, -20)
                    .padding(.leading, 10)
                Spacer()
            }
            .padding(.leading, 10)
            .padding(.top, 10)
            Spacer()
            
            VStack{
                Spacer()
                HStack{
                    Spacer()
                    Text("No favourites found")
                        .foregroundColor(.red)
                        .fontWeight(.semibold)
                        .font(.system(size: 25))
                    Spacer()
                }
                Spacer()
            }
            
        }
    }
}

struct NoFavouritesView_Previews: PreviewProvider {
    static var previews: some View {
        NoFavouritesView()
    }
}
