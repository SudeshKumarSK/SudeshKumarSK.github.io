//
//  MapView.swift
//  EventSearch
//
//  Created by Sudesh Kumar on 4/29/23.
//

import SwiftUI
import MapKit

struct EventLocation: Identifiable {
  var id = UUID()
  let name: String
  let latitude: Double
  let longitude: Double
  
  var coordinate: CLLocationCoordinate2D {
    CLLocationCoordinate2D(latitude: latitude, longitude: longitude)
  }
}

struct MapView: View {
    @Binding var isPresented: Bool
    @Binding var latitude: Double
    @Binding var longitude: Double
    
    @State var coordinateRegion = MKCoordinateRegion()
    @State var annotation = MKPointAnnotation()
    
    @State var  eventLocation: [EventLocation] = []
       
    var body: some View {
        VStack{
            
            Map(coordinateRegion: $coordinateRegion,
                    annotationItems: eventLocation) { place in
                  MapMarker(coordinate: place.coordinate, tint: .red)
            }
            .edgesIgnoringSafeArea(.all)
            .padding()
        
        }
        .onAppear{
            let location = CLLocationCoordinate2D(latitude: latitude, longitude: longitude)
            coordinateRegion = MKCoordinateRegion(center: location,
                                                  span: MKCoordinateSpan(latitudeDelta: 0.07, longitudeDelta: 0.07))
            eventLocation = [EventLocation(name: "Kozy Eats", latitude: latitude, longitude: longitude)]
                        
        }
        .background(Color.white)
        .cornerRadius(10)
        .shadow(radius: 10)
        .padding()
        .gesture(
            DragGesture()
                .onEnded { value in
                    if value.translation.height > 100 {
                        isPresented = false
                    }
                }
        )
    }
}

struct MapView_Previews: PreviewProvider {
    static var previews: some View {
        MapView(isPresented: .constant(true),
                latitude: .constant(34.0294),
                longitude: .constant(-118.2871))
    }
}


