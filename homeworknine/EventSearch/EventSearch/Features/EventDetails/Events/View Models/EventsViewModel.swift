//
//  EventsViewModel.swift
//  EventSearch
//
//  Created by Sudesh Kumar on 4/21/23.
//

import Foundation

/* This protocol EventsViewModel declares a function getEventDetails that takes a dictionary of string keys and values as query parameters and returns an async function.*/

protocol EventsViewModel: ObservableObject{
    func getEventDetails(queryParameters: [String: String]) async
        
}


@MainActor
final class EventsViewModelImpl: EventsViewModel{
    
    // Defining the source of truth.
    @Published private(set) var response: EventDetailsResponse = EventDetailsResponse(status: false, data: nil)
    @Published private(set) var isLoading: Bool = true
    
    
    private let service: EventsService
    
    // Instantiating the EventsSerice class and assigning it to the serive property.
    init(service: EventsService){
        self.service = service
    }
    
    // Async Function getEventDetails takes in the queryParameters and performs the api call by using the function defined under the EventsService.
    func getEventDetails(queryParameters: [String: String]) async {
        isLoading = true
        defer { isLoading = false }
        
        do{
            self.response = try await service.fetchEventDetails(queryParameters: queryParameters)
        }catch{
            print(error)
        }
    }
}
