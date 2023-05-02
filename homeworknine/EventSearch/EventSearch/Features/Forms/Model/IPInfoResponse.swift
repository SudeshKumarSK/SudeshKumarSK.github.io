//
//  IPInfoResponse.swift
//  EventSearch
//
//  Created by Sudesh Kumar on 4/18/23.
//

import Foundation

// MARK: - IPInfoResponse
struct IPInfoResponse: Codable {
    let ip: String
    let hostname: String
    let city: String
    let region: String
    let country: String
    let loc: String
    let org: String
    let postal: String
    let timezone: String
}
