//
//  EventDetailsResponse.swift
//  EventSearch
//
//  Created by Sudesh Kumar on 4/15/23.
//

import Foundation

// MARK: - EventDetailsResponse
struct EventDetailsResponse: Codable {
    let status: Bool
    let data: EventInfo?
}

// MARK: - DataClass
struct EventInfo: Codable {
    let artist: [String]?
    let priceRanges: PriceRanges?
    let localDate, localTime, venue, cityName: String?
    let subGenre, genre, segment: String?
    let type, subType: String?
    let ticketStatus: String?
    let saleURL, seatMap: String?

    enum CodingKeys: String, CodingKey {
        case artist, priceRanges, localDate, localTime, venue, cityName, subGenre, genre, segment, type, subType, ticketStatus
        case saleURL = "saleUrl"
        case seatMap
    }
}

// MARK: - PriceRanges
struct PriceRanges: Codable {
    let min, max: Int?
}
