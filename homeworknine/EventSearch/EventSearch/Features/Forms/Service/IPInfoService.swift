//
//  IPInfoService.swift
//  EventSearch
//
//  Created by Sudesh Kumar on 4/18/23.
//

import Foundation

protocol IPInfoService{
    func fetchLocation() async throws -> IPInfoResponse
}

final class IPInfoServiceImpl: IPInfoService{
    
    func fetchLocation() async throws -> IPInfoResponse{
        let UrlSession = URLSession.shared
        let url = URL(string: APIConstants.ipInfoUrl)
        let (data, _) = try await UrlSession.data(from: url!)
        return try JSONDecoder().decode(IPInfoResponse.self, from: data)
    }
    
}
