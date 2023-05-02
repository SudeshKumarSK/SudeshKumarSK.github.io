//
//  NoArtistRelatedView.swift
//  EventSearch
//
//  Created by Sudesh Kumar on 4/28/23.
//

import SwiftUI

struct NoArtistRelatedView: View {
    var body: some View {
        VStack{
            Text("No Music Related Artist Details to Show!")
                .foregroundColor(.black)
                .fontWeight(.bold)
                .font(.system(size: 35))
                .padding(10)
        }
    }
}


struct NoArtistRelatedView_Previews: PreviewProvider {
    static var previews: some View {
        NoArtistRelatedView()
    }
}
