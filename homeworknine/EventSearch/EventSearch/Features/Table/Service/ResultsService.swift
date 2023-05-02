//
//  ResultsService.swift
//  EventSearch
//
//  Created by Sudesh Kumar on 4/19/23.
//

import Foundation

protocol ResultsService{
    func fetchEventsInformation(queryParameters: [String: String]) async throws -> EventsSearchResponse
}



final class ResultsServiceImpl: ResultsService{
    let session = URLSession.shared
    let baseURL = URL(string: APIConstants.baseUrl)!
    
    func fetchEventsInformation(queryParameters: [String: String]) async throws -> EventsSearchResponse{
//        let UrlSession = URLSession.shared
//        let url = URL(string: APIConstants.baseUrl.appending("/api/eventSearch"))
        
        var urlComponents = URLComponents(url: baseURL.appendingPathComponent("api/eventSearch"), resolvingAgainstBaseURL: true)!
                
        urlComponents.queryItems = queryParameters.map { key, value in
            URLQueryItem(name: key, value: value)
        }
        
        guard let url = urlComponents.url else {
            throw URLError(.badURL)
        }
        
        let (data, _) = try await session.data(from: url)
        let decoder = JSONDecoder()
        return try decoder.decode(EventsSearchResponse.self, from: data)
    }
}
