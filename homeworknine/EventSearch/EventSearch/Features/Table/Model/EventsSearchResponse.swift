//
//  EventsSearchResponse.swift
//  EventSearch
//
//  Created by Sudesh Kumar on 4/15/23.
//

import Foundation

// MARK: - EventsSearchResponse
struct EventsSearchResponse: Codable {
    let status: Bool
    let data: [Datum]?
}

// MARK: - Datum
struct Datum: Codable, Hashable {
    let event: String
    let localDate: String?
    let localTime: String?
    let genre: String?
    let venue: String?
    let icon: String?
    let id: String
}
