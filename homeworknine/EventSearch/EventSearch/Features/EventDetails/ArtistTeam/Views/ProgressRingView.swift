//
//  ProgressRingView.swift
//  EventSearch
//
//  Created by Sudesh Kumar on 4/29/23.
//

import SwiftUI

struct ProgressRingView: View {
    
    @Binding var popularity: Int
    var body: some View {
        ZStack {
            Circle()
                .stroke(lineWidth: 15.0)
                .opacity(0.3)
                .foregroundColor(Color.orange)
            Circle()
                .trim(from: 0.0, to: CGFloat(min(popularity, 100)) / 100.0)
                .stroke(style: StrokeStyle(lineWidth: 15.0, lineCap: .butt, lineJoin: .round))
                .foregroundColor(Color.orange)
                .rotationEffect(Angle(degrees: 0))
                .animation(.easeInOut, value: popularity)
            Text(String(popularity))
                .font(.title)
                .fontWeight(.bold)
                .foregroundColor(.white)
        }
        .frame(width: 75, height: 75)
    }
}

struct ProgressRingView_Previews: PreviewProvider {
    static var previews: some View {
        ProgressRingView(popularity: .constant(78))
    }
}
