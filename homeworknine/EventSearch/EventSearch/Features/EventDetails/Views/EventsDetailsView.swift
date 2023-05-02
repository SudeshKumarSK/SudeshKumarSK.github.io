//
//  EventsDetailsView.swift
//  EventSearch
//
//  Created by Sudesh Kumar on 4/20/23.
//

import SwiftUI

struct EventsDetailsView: View {
    
    @Binding var eventId: String
    @Binding var eventName: String
    @Binding var venue: String?
    
    @StateObject private var events_vm = EventsViewModelImpl(
        service: EventsServiceImpl()
    )
    
    @StateObject private var venue_vm = VenueViewModelImpl(
        service: VenueServiceImpl()
    )
    
    @StateObject private var artist_vm = ArtistTeamViewModelImpl(
        service: ArtistTeamServiceImpl()
    )
    
    var body: some View {
        TabView{
            EventsView(currentEventId: $eventId, currentEventName: $eventName, currentVenueName: $venue, events_vm: events_vm, venue_vm:  venue_vm, artist_vm: artist_vm)
                .tabItem{
                    Symbols.events
                    Text("Events")
                }
            ArtistTeamView(currentEventId: $eventId, artist_vm: artist_vm)
                .tabItem{
                    Symbols.artistTeam
                    Text("Artist/Team")
                }
            
            VenueView(currentEventName: $eventName, currentVenueName: $venue, venue_vm: venue_vm)
                .tabItem{
                    Symbols.location
                    Text("Venue")
                }
        }
    }
}

struct EventsDetailsView_Previews: PreviewProvider {
    static var previews: some View {
        
        EventsDetailsView(eventId: .constant("qwertyuizs"), eventName: .constant("Once upon a Time"), venue: .constant("Chennai"))
    }
}
