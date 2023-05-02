//
//  IPInfoViewModel.swift
//  EventSearch
//
//  Created by Sudesh Kumar on 4/18/23.
//

import Foundation

protocol IPInfoViewModel: ObservableObject{
    func  findLocation() async
        
}


@MainActor
final class IPInfoViewModelImpl: IPInfoViewModel{
    
    @Published private(set) var response: IPInfoResponse = IPInfoResponse(ip: "", hostname: "", city: "", region: "", country: "", loc: "", org: "", postal: "", timezone: "")
    
    
    private let service: IPInfoService
    
    init(service: IPInfoService){
        self.service = service
    }
    
    func findLocation() async{
        do{
            self.response = try await service.fetchLocation()
        }catch{
            print("Couldn't make an API Call to IPINFO from IPInfo View Model!")
            print(error)
        }
    }
    
    
    
}
