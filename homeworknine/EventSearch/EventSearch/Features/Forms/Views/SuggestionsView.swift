//
//  SuggestionsView.swift
//  EventSearch
//
//  Created by Sudesh Kumar on 4/20/23.
//

import SwiftUI

struct SuggestionsView: View {
    @Binding var isPresented: Bool
    @Binding var keyword: String
    @Binding var previousKeyword: String
    @Binding var queryParams: [String: String]
    
    @ObservedObject var auto_vm: AutoCompleteViewModelImpl
    
    @State private var autoCompleteQueryParams: [String: String] = ["keyword": ""]
    
    var body: some View {
        let _ = Self._printChanges()
        VStack{
            Text("Suggestions")
                .fontWeight(.bold)
                .font(.system(size: 35))
                .padding(.top, 30)
            
            if(auto_vm.isLoading) {
                VStack {
                    ProgressView()
                        .padding(5)
                    Text("Please Wait ...")
                        .font(.headline)
                        .foregroundColor(.secondary)
                }
                .frame(maxWidth: .infinity, maxHeight: .infinity)
            }
            else{
                if(auto_vm.response.status){
                    if let suggestions = auto_vm.response.data{
                        Form {
                            ForEach(suggestions, id: \.self) { suggestion in
                                Button(action: {
                                    previousKeyword = suggestion
                                    keyword = suggestion
                                    isPresented = false
                                    
                                }) {
                                    Text(suggestion)
                                        .foregroundColor(.black)
                                }
                            }
                            
                        }
                    }
                }else{
                    VStack{
                        Spacer()
                        HStack{
                            Spacer()
                            Text("No Suggestions Found!")
                                .foregroundColor(.red)
                                .fontWeight(.semibold)
                                .font(.system(size: 25))
                            Spacer()
                        }
                        Spacer()
                    }
                }
            }
        }
        .background(Color.white)
        .cornerRadius(10)
        .shadow(radius: 10)
        .padding()
        .gesture(
            DragGesture()
                .onEnded { value in
                    if value.translation.height > 100 {
                        isPresented = false
                    }
                }
        )
        .task{
            await auto_vm.autocomplete(queryParameters: queryParams)
        }
    }
}


struct SuggestionsView_Previews: PreviewProvider {
    static var previews: some View {
        let new_auto_vm = AutoCompleteViewModelImpl(
            service: AutoCompleteServiceImpl())
        
        
        SuggestionsView(isPresented: .constant(true), keyword: .constant("Ed Sheeran"),
                        previousKeyword: .constant("Ed Sheeran"), queryParams: .constant(["keyword": "Ed She"]),
                        auto_vm: new_auto_vm)
    }
}
