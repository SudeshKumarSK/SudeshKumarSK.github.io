//
//  FavouritesData.swift
//  EventSearch
//
//  Created by Sudesh Kumar on 4/30/23.
//

import Foundation

struct FavouritesData: Codable, Hashable {
    let eventId: String
    let date: String?
    let eventName: String
    let genre: String?
    let venue: String?
}
