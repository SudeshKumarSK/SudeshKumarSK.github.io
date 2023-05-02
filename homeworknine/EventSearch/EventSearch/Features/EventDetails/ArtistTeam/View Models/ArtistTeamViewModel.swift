//
//  ArtistTeamViewModel.swift
//  EventSearch
//
//  Created by Sudesh Kumar on 4/21/23.
//

import Foundation

/* This protocol ArtistTeamViewModel declares a function getArtistDetails that takes a dictionary of string keys and values as query parameters and returns an async function.*/

protocol ArtistTeamViewModel: ObservableObject{
    func getArtistDetails(queryParameters: [String: String]) async
        
}


@MainActor
final class ArtistTeamViewModelImpl: ArtistTeamViewModel{
    
    // Defining the source of truth.
    @Published private(set) var response: ArtistTeamResponse = ArtistTeamResponse(status: false, data: nil)
    @Published private(set) var isLoading: Bool = true
    
    
    private let service: ArtistTeamService
    
    // Instantiating the ArtistTeamService class and assigning it to the serive property.
    init(service: ArtistTeamService){
        self.service = service
    }
    
    // Async Function getArtistDetails takes in the queryParameters and performs the api call by using the function defined under the ArtistTeamService.
    func getArtistDetails(queryParameters: [String: String]) async {
        isLoading = true
        defer { isLoading = false }
        
        do{
            self.response = try await service.fetchArtistDetails(queryParameters: queryParameters)
        }catch{
            print(error)
        }
    }
}
