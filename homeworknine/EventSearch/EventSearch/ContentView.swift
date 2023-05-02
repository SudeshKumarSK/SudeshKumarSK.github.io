//
//  ContentView.swift
//  EventSearch
//
//  Created by Sudesh Kumar on 4/14/23.
//

import SwiftUI

struct ContentView: View {
    @State private var displayResults: Bool = false
    @State private var isFormCollapsed: Bool = false
    
    @StateObject private var results_vm = ResultsViewModelImpl(
        service: ResultsServiceImpl()
    )
    
    @StateObject private var auto_vm = AutoCompleteViewModelImpl(
        service: AutoCompleteServiceImpl()
    )
    
    var body: some View {
        
        NavigationView {
//            let _ = Self._printChanges()
            VStack(spacing: -70) {
                FormView(displayResults: $displayResults,
                         isFormCollapsed: $isFormCollapsed,
                         results_vm: results_vm, auto_vm: auto_vm)
                
                if (displayResults) {
                    ZStack{
                        Form{
                            Text("Results")
                                .fontWeight(.bold)
                                .font(.system(size: 35))
                            
                            if(results_vm.isLoading) {
                                VStack {
                                    ProgressView()
                                    Text("Please Wait ...")
                                        .font(.headline)
                                        .foregroundColor(.secondary)
                                }
                                .frame(maxWidth: .infinity, maxHeight: .infinity)
                            }
                            else{
                                if(results_vm.response.status){
                                    if let data = results_vm.response.data?.sorted(by: { $0.localDate ?? "-" < $1.localDate ?? "-" }){
                                        List{
                                            ForEach(data, id: \.self){ item in
                                                NavigationLink(destination:  EventsDetailsView(eventId: Binding.constant(item.id), eventName: Binding.constant(item.event), venue: Binding.constant(item.venue))){
                                                    TableView(item: item)
                                                }
                                                
                                            }
                                        }
                                    }
                                    
                                }else{
                                    NoResultsView()
                                }
                                
                            }
                            
                        }
                    }
                    .padding(.top, (isFormCollapsed ? -45 : 0.0))
                }
            }
            .navigationBarTitle("Events Search")
            .navigationBarItems(trailing:
                HStack {
                    Spacer()
                    NavigationLink(destination: FavouritesView()) {
                        Symbols.like
                            .font(.system(size: 24))
                            .foregroundColor(.blue)
                    }
                }
            )
        }
        
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
