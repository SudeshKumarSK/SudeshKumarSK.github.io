//
//  VenueViewModel.swift
//  EventSearch
//
//  Created by Sudesh Kumar on 4/21/23.
//

import Foundation

/* This protocol VenueViewModel declares a function getVenueDetails that takes a dictionary of string keys and values as query parameters and returns an async function.*/

protocol VenueViewModel: ObservableObject{
    func getVenueDetails(queryParameters: [String: String]) async
        
}


@MainActor
final class VenueViewModelImpl: VenueViewModel{
    
    // Defining the source of truth.
    @Published private(set) var response: VenueDetailsResponse = VenueDetailsResponse(status: false, data: nil)
    @Published private(set) var isLoading: Bool = true
    
    
    private let service: VenueService
    
    // Instantiating the VenueSerice class and assigning it to the serive property.
    init(service: VenueService){
        self.service = service
    }
    
    // Async Function getVenueDetails takes in the queryParameters and performs the api call by using the function defined under the VenueService.
    func getVenueDetails(queryParameters: [String: String]) async {
        isLoading = true
        defer { isLoading = false }
        
        do{
            self.response = try await service.fetchVenueDetails(queryParameters: queryParameters)
        }catch{
            print(error)
        }
    }
}
