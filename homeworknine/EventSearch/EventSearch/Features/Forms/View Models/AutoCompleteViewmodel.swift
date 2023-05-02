//
//  AutoCompleteViewmodel.swift
//  EventSearch
//
//  Created by Sudesh Kumar on 4/20/23.
//

import Foundation

protocol AutoCompleteViewModel: ObservableObject{
    func autocomplete(queryParameters: [String: String]) async
        
}


@MainActor
final class AutoCompleteViewModelImpl: AutoCompleteViewModel{
    
    @Published private(set) var response: AutocompleteResponse = AutocompleteResponse(status: false, data: [])
    @Published private(set) var isLoading: Bool = true
    
    private let service: AutoCompleteService
    
    init(service: AutoCompleteService){
        self.service = service
    }
    
    func autocomplete(queryParameters: [String: String]) async {
        isLoading = true
        defer { isLoading = false }
        
        do{
            self.response = try await service.fetchAutoComplete(queryParameters: queryParameters)
        }catch{
            print(error)
        }
    }
}
