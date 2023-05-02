//
//  EventsService.swift
//  EventSearch
//
//  Created by Sudesh Kumar on 4/21/23.
//

import Foundation

/*This protocol, EventsService, defines a contract for an object that can fetch event details by making a network request with a dictionary of query parameters. The protocol requires the implementation of a single asynchronous function, fetchEventDetails(queryParameters: async throws -> EventDetailsResponse, which takes a dictionary of strings as query parameters, and returns an EventDetailsResponse object or throws an error if there is a problem with the network request or decoding the response.
 */

protocol EventsService{
    func fetchEventDetails(queryParameters: [String: String]) async throws -> EventDetailsResponse
}


// Creating the EventsServiceImpl class which conforms to the EventsService protocol.
final class EventsServiceImpl: EventsService{
    let session = URLSession.shared
    let baseURL = URL(string: APIConstants.baseUrl)!
    
    // Async function to fetch the EventDetailsResponse Object from the "/api/eventDetails" endpoint.
    func fetchEventDetails(queryParameters: [String: String]) async throws -> EventDetailsResponse{
        
        // We are creating a valid url with the baseUrl and appending the endpoint to form baseurl + "/api/eventDetails"
        var urlComponents = URLComponents(url: baseURL.appendingPathComponent("api/eventDetails"), resolvingAgainstBaseURL: true)!
        
        // We are adding the query params after the /eventDetails using ?. Here urlComponents is an instance of the URLComponents struct.
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
        
        // We are decoding the received data tuple into EventDetailsResponse json Object.
        return try decoder.decode(EventDetailsResponse.self, from: data)
    }
}

