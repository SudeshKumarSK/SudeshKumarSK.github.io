//
//  VenueView.swift
//  EventSearch
//
//  Created by Sudesh Kumar on 4/20/23.
//

import SwiftUI

struct VenueView: View {
    
    @Binding var currentEventName: String
    @Binding var currentVenueName: String?
    
    @ObservedObject var venue_vm: VenueViewModelImpl
    
    @State private var showMap: Bool = false
    @State private var latitude: Double = 34.0294
    @State private var longitude: Double = -118.2871
    
    
    func formatAddress(line1: String, city: String, state: String) -> String{
        var completeAddress: String = ""
        if (line1 != "-"){
            completeAddress = line1
        }
        
        if(city != "-"){
            completeAddress = completeAddress + " " + city
        }
        
        if(state != "-"){
            completeAddress = completeAddress + " " + state
        }
        
        
        return completeAddress
    }
    
    var body: some View {
        VStack(spacing: 0){
            // Checking if the API call is still in pending state. The events_vm.isLoading with become false once the promise gets resolved by the backend Nodejs Server.
            if(venue_vm.isLoading){
                VStack {
                    ProgressView()
                    Text("Please Wait ...")
                        .font(.headline)
                        .fontWeight(.semibold)
                        .foregroundColor(.secondary)
                    
                }
                .frame(maxWidth: .infinity, maxHeight: .infinity)
            }
            
            else{
                // Display Event Name in the top.
                HStack{
                    Spacer()
                    Text(currentEventName)
                        .fontWeight(.bold)
                        .font(.system(size: 30))
                        .padding(.top, -50)
                    Spacer()
                }
                .padding(.bottom, 20)
                
                if (venue_vm.response.status){
                    if let venueData = venue_vm.response.data{
                        
                        let isMapDisabled: Bool = (venueData.address?.lat == nil || venueData.address?.lng == nil)

                        let completeAddress: String = formatAddress(line1: venueData.address?.line1 ?? "-",
                                                                    city: venueData.address?.city ?? "-",
                                                                    state: venueData.address?.state ?? "-")
                        
                        // Display Venue Name
                        HStack{
                            Spacer()
                            VStack(spacing: -2){
                                Text("Name")
                                    .fontWeight(.bold)
                                    .font(.system(size: 22))
                                    .padding(.bottom, 5)
                                
                                Text(venueData.name ?? "-")
                                    .fontWeight(.semibold)
                                    .foregroundColor(.gray)
                                    .font(.system(size: 17))
                            }
                            Spacer()
                        }
                        .padding(.bottom, 20)
                        
                        // Display Address.
                        HStack{
                            Spacer()
                            VStack(spacing: -2){
                                Text("Address")
                                    .fontWeight(.bold)
                                    .font(.system(size: 22))
                                    .padding(.bottom, 5)
                                
                                Text(completeAddress)
                                    .fontWeight(.semibold)
                                    .foregroundColor(.gray)
                                    .font(.system(size: 17))
                            }
                            Spacer()
                        }
                        .padding(.bottom, 20)
                        
                        // Display Phone Number.
                        HStack{
                            Spacer()
                            VStack(spacing: -2){
                                Text("Phone Number")
                                    .fontWeight(.bold)
                                    .font(.system(size: 22))
                                    .padding(.bottom, 5)
                                
                                
                                Text(venueData.phoneNumber ?? "-")
                                    .fontWeight(.semibold)
                                    .foregroundColor(.gray)
                                    .font(.system(size: 17))
                            }
                            Spacer()
                        }
                        .padding(.bottom, 20)
                        
                        // Display Open Hours
                        HStack{
                            Spacer()
                            VStack(spacing: -2){
                                Text("Open Hours")
                                    .fontWeight(.bold)
                                    .font(.system(size: 22))
                                    .padding(.bottom, 5)
                                
                                ScrollView(.vertical) {
                                    Text(venueData.openHours ?? "-")
                                        .fontWeight(.semibold)
                                        .foregroundColor(.gray)
                                        .font(.system(size: 17))
                                }
                            }
                            Spacer()
                        }
                        .padding(.bottom, 20)
                        
                        // Display General Rule
                        HStack{
                            Spacer()
                            VStack(spacing: -2){
                                Text("General Rule")
                                    .fontWeight(.bold)
                                    .font(.system(size: 22))
                                    .padding(.bottom, 5)
                                
                                ScrollView(.vertical) {
                                    Text(venueData.generalRule ?? "-")
                                        .fontWeight(.semibold)
                                        .foregroundColor(.gray)
                                        .font(.system(size: 17))
                                }
                            }
                            Spacer()
                        }
                        .padding(.bottom, 20)
                        
                        
                        // Display Child Rule
                        HStack{
                            Spacer()
                            VStack(spacing: -2){
                                Text("Child Rule")
                                    .fontWeight(.bold)
                                    .font(.system(size: 20))
                                    .padding(.bottom, 5)
                                
                                ScrollView(.vertical) {
                                    Text(venueData.childRule ?? "-")
                                        .fontWeight(.semibold)
                                        .foregroundColor(.gray)
                                        .font(.system(size: 17))
                                }
                            }
                            Spacer()
                        }
                        .padding(.bottom, 20)
                        
                        // Display Maps Button
                        HStack{
                            Spacer()
                            Button(action: {
                                print("Display Maps Plz!")
                                latitude = venue_vm.response.data?.address?.lat ?? 34.0294
                                longitude = venue_vm.response.data?.address?.lng ?? -118.2871
                                showMap = true
                            }) {
                                Text("Show Venue on Maps")
                                    .font(.system(size: 20))
                                    .foregroundColor(.white)
                                    .padding()
                                    .frame(width: 250, alignment: .center)
                                    .background(isMapDisabled ? Color.gray : Color.red)
                                    .cornerRadius(15)
                            }
                            .buttonStyle(BorderlessButtonStyle())
                            .disabled(isMapDisabled)
                            Spacer()
                        }
                    }
                }
            }
            Spacer()
        }
        .onAppear{
            Task{
                await venue_vm.getVenueDetails(queryParameters: ["venue": currentVenueName ?? ""])
                
            }
        }
        .fullScreenCover(isPresented: $showMap) {
            MapView(isPresented: $showMap,
                    latitude: $latitude,
                    longitude: $longitude)
        }
    }
}

struct VenueView_Previews: PreviewProvider {
    static var previews: some View {
        
        let new_venue_vm = VenueViewModelImpl(
            service: VenueServiceImpl())
        
        VenueView(currentEventName: .constant("Once Upon a Time"),
                  currentVenueName: .constant("Bangalore"),
                  venue_vm: new_venue_vm)
    }
}
