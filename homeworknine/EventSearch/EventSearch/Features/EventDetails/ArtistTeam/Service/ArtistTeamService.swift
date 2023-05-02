//
//  ArtistTeamService.swift
//  EventSearch
//
//  Created by Sudesh Kumar on 4/21/23.
//

import Foundation

/*This protocol, ArtistTeamService, defines a contract for an object that can fetch artist details by making a network request with a dictionary of query parameters. The protocol requires the implementation of a single asynchronous function, fetchArtistDetails(queryParameters: async throws -> ArtistTeamResponse, which takes a dictionary of strings as query parameters, and returns an ArtistTeamResponse object or throws an error if there is a problem with the network request or decoding the response.
 */

protocol ArtistTeamService{
    func fetchArtistDetails(queryParameters: [String: String]) async throws -> ArtistTeamResponse
}


// Creating the ArtistTeamServiceImpl class which conforms to the ArtistTeamService protocol.
final class ArtistTeamServiceImpl: ArtistTeamService{
    let session = URLSession.shared
    let baseURL = URL(string: APIConstants.baseUrl)!
    
    // Async function to fetch the ArtistTeamResponse Object from the "/api/venueDetails" endpoint.
    func fetchArtistDetails(queryParameters: [String: String]) async throws -> ArtistTeamResponse{
        
        // We are creating a valid url with the baseUrl and appending the endpoint to form baseurl + "/api/artistDetails"
        var urlComponents = URLComponents(url: baseURL.appendingPathComponent("api/artistDetails"), resolvingAgainstBaseURL: true)!
        
        // We are adding the query params after the /artistDetails using ?. Here urlComponents is an instance of the URLComponents struct.
        urlComponents.queryItems = queryParameters.map { key, value in
            URLQueryItem(name: key, value: value)
        }
        
        // Calling the url method of the urlComponents object which returns nil or valid url.  The guard statement throws an error to indicate that the URL is bad.
        guard let url = urlComponents.url else {
            throw URLError(.badURL)
        }
        
        // Here the data received using the asynchronous data method of session is a tuple.
        let (data, _) = try await session.data(from: url)
        
        // Creating an instance for the JSONDecoder() class and the object name is decoder.
        let decoder = JSONDecoder()
        
        // We are decoding the received data tuple into ArtistTeamResponse json Object.
        return try decoder.decode(ArtistTeamResponse.self, from: data)
    }
}

