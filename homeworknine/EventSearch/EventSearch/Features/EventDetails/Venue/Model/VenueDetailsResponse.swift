//
//  VenueDetailsResponse.swift
//  EventSearch
//
//  Created by Sudesh Kumar on 4/15/23.
//

import Foundation

// MARK: - VenueDetailsResponse
struct VenueDetailsResponse: Codable {
    let status: Bool
    let data: Venue?
}

// MARK: - DataClass
struct Venue: Codable {
    let address: Address?
    let name: String?
    let phoneNumber: String?
    let openHours: String?
    let generalRule: String?
    let childRule: String?
}

// MARK: - Address
struct Address: Codable {
    let line1: String?
    let city: String?
    let state: String?
    let lat, lng: Double?
}
