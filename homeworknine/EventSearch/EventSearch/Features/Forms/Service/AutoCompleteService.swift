//
//  AutoCompleteService.swift
//  EventSearch
//
//  Created by Sudesh Kumar on 4/20/23.
//

import Foundation

protocol AutoCompleteService{
    func fetchAutoComplete(queryParameters: [String: String]) async throws -> AutocompleteResponse
}

final class AutoCompleteServiceImpl: AutoCompleteService{
    
    let session = URLSession.shared
    let baseURL = URL(string: APIConstants.baseUrl)!
    
    func fetchAutoComplete(queryParameters: [String: String]) async throws -> AutocompleteResponse{
        
        var urlComponents = URLComponents(url: baseURL.appendingPathComponent("api/autocomplete"), resolvingAgainstBaseURL: true)!
                
        urlComponents.queryItems = queryParameters.map { key, value in
            URLQueryItem(name: key, value: value)
        }
        
        guard let url = urlComponents.url else {
            throw URLError(.badURL)
        }
        
        let (data, _) = try await session.data(from: url)
        let decoder = JSONDecoder()
        return try decoder.decode(AutocompleteResponse.self, from: data)
    }
}

