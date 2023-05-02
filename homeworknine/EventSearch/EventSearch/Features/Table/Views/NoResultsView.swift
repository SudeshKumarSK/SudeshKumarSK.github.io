//
//  NoResultsView.swift
//  EventSearch
//
//  Created by Sudesh Kumar on 4/20/23.
//

import SwiftUI

struct NoResultsView: View {
    var body: some View {
        Text("No results available")
            .foregroundColor(.red)
            .fontWeight(.medium)
            .font(.system(size: 25))
    }
}

struct NoResultsView_Previews: PreviewProvider {
    static var previews: some View {
        NoResultsView()
    }
}
