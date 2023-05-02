//
//  AutocompleteResponse.swift
//  EventSearch
//
//  Created by Sudesh Kumar on 4/20/23.
//

import Foundation

// MARK: - AutocompleteResponse
struct AutocompleteResponse: Codable {
    let status: Bool
    let data: [String]
}
