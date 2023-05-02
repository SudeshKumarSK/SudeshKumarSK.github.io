//
//  ResultsViewModel.swift
//  EventSearch
//
//  Created by Sudesh Kumar on 4/19/23.
//

import Foundation

protocol ResultsViewModel: ObservableObject{
    func searchEvents(queryParameters: [String: String]) async
        
}


@MainActor
final class ResultsViewModelImpl: ResultsViewModel{
    
    @Published private(set) var response: EventsSearchResponse = EventsSearchResponse(status: false, data: [])
    @Published private(set) var isLoading: Bool = true
    
    private let service: ResultsService
    
    init(service: ResultsService){
        self.service = service
    }
    
    func searchEvents(queryParameters: [String: String]) async {
        isLoading = true
        defer { isLoading = false }
        
        do{
            self.response = try await service.fetchEventsInformation(queryParameters: queryParameters)
        }catch{
            print(error)
        }
    }

}
