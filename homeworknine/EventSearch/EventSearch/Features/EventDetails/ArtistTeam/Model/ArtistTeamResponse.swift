//
//  ArtistTeamResponse.swift
//  EventSearch
//
//  Created by Sudesh Kumar on 4/15/23.
//

import Foundation

// MARK: - ArtistTeamResponse
struct ArtistTeamResponse: Codable {
    let status: Bool
    let data: ArtistData?
}

// MARK: - DataClass
struct ArtistData: Codable {
    let musicFlag: Bool
    let data: [ArtistDetails]?
}

// MARK: - Datum
struct ArtistDetails: Codable, Hashable {
    let name: String?
    let image: String?
    let popularity, followers: Int?
    let spotifyLink: String?
    let albums: [String]?
}
