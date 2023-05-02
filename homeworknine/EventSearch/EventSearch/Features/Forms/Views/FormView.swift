//
//  FormView.swift
//  EventSearch
//
//  Created by Sudesh Kumar on 4/14/23.
//

import SwiftUI


struct FormView: View {
    
    @Binding var displayResults: Bool
    @Binding var isFormCollapsed: Bool
    
    @ObservedObject var results_vm: ResultsViewModelImpl
    @ObservedObject var auto_vm: AutoCompleteViewModelImpl
    
    
    @StateObject private var ipinfo_vm = IPInfoViewModelImpl(
        service: IPInfoServiceImpl()
    )
    
    @State private var keyword: String = ""
    @State private var distance: String = "10"
    @State private var category: String = "Default"
    @State private var selectedCategory: String = ""
    @State private var location: String = ""
    
    
    @State private var isSubmitDisabled: Bool = true
    @State private var isAutoDetectEnabled: Bool = false
    @State private var searchResultsQueryParams: [String: String] = ["data": ""]
    @State private var autoCompleteQueryParams: [String: String] = ["keyword": ""]
    
    @State private var showSuggestions: Bool = false
    @State private var isSuggestionSelected: Bool = true
    @State private var combinedFlag : Bool = false
    @State private var prevValue: String = ""
    
    let categories: [String] = ["Default", "Music", "Sports", "Art & Theatre", "Film", "Miscellaneous"]
    
    let categorySelections: [String: String] = [
        "Default": "",
        "Music": "KZFzniwnSyZfZ7v7nJ",
        "Sports": "KZFzniwnSyZfZ7v7nE",
        "Art & Theatre": "KZFzniwnSyZfZ7v7na",
        "Film": "KZFzniwnSyZfZ7v7nn",
        "Miscellaneous": "KZFzniwnSyZfZ7v7n1"
    ]
    
    
    
    
    func updateSubmitState(){
        if (!isAutoDetectEnabled){
            isSubmitDisabled = keyword.isEmpty || location.isEmpty ? true : false
        }
        else{
            isSubmitDisabled = keyword.isEmpty
        }
    }
    
    func clearLocation(){
        if isAutoDetectEnabled {
            self.isFormCollapsed =  true
            print("Auto-Detect Location is ON and getting Location from IPInfo!")
            Task {
                await ipinfo_vm.findLocation()
                location = ipinfo_vm.response.city + ", " + ipinfo_vm.response.region
            }
        }
        else{
            location = ""
            self.isFormCollapsed =  false
        }
    }
    
    
    func handleClearForm(){
        print("Clear Button Clicked!")
        self.displayResults = false
        keyword = ""
        distance = "10"
        location = ""
        category = "Default"
        isAutoDetectEnabled = false
        isSubmitDisabled = true
    }
    
    
    func handleSubmit(){
        
        print("Keyword changed to: \(keyword)")
        print("Distance changed to: \(distance)")
        print("Category changed to: \(category)")
        print("SelectedCategory changed to: \(selectedCategory)")
        print("Location changed to: \(location)")
        
        let dataDict: [String: String] = [
            
            "keyword": keyword,
             "distance": distance,
             "category": selectedCategory,
             "location": location
        ]
        // Convert the dictionary to a JSON string
        let jsonData = try! JSONSerialization.data(withJSONObject: dataDict, options: [])
        let jsonString = String(data: jsonData, encoding: .utf8)!
        let allowedCharacterSet = CharacterSet(charactersIn: "!*'();:@&=+$,/?%#[]{}\" ").inverted
        let encodedData = jsonString.addingPercentEncoding(withAllowedCharacters: allowedCharacterSet)!
        print(encodedData)
        searchResultsQueryParams = [
            "data": encodedData
        ]
        Task{
            await results_vm.searchEvents(queryParameters: searchResultsQueryParams)
        }
        self.displayResults = true
    }
    
    
    var body: some View {
//        let _ = Self._printChanges()
       
            Form{
                LabeledContent {
                    TextField("required", text: $keyword)
                        .onChange(of: keyword) { newValue in
                            updateSubmitState()
                            
                            if ((newValue.count > 3) && (prevValue != newValue)){
                                showSuggestions = true
                            }
                            else{
                                showSuggestions = false
                            }
                            
                            autoCompleteQueryParams = [
                                "keyword": newValue
                            ]
                            
                        }
                } label: {
                    Text("Keyword :")
                        .foregroundColor(.gray)
                }
                
                LabeledContent {
                    TextField("", text: $distance
                    )
                    .keyboardType(.numberPad)
                } label: {
                    Text("Distance:")
                        .foregroundColor(.gray)
                }
                
                LabeledContent {
                    Picker("", selection: $category){
                        ForEach(categories, id: \.self){category in
                            Text(category)
                                .foregroundColor(Color.red)
                            
                        }
                        
                    }
                    .pickerStyle(.menu)
                    .tint(.blue)
                    
                } label: {
                    Text("Category:")
                        .foregroundColor(.gray)
                }
                .onChange(of: category) { newValue in
                    selectedCategory = categorySelections[newValue] ?? ""
                }
                
                
                Group{
                    if (!isAutoDetectEnabled){
                        LabeledContent {
                            TextField("required", text: $location)
                                .onChange(of: location) { newValue in
                                    updateSubmitState()
                                }
                        } label: {
                            Text("Location :")
                                .foregroundColor(.gray)
                        }
                    }
                }
                
                
                Toggle("Auto-Detect Location", isOn: $isAutoDetectEnabled)
                    .onChange(of: isAutoDetectEnabled){ newValue in
                        clearLocation()
                        updateSubmitState()
                    }
                    .foregroundColor(.gray)
                
                HStack(spacing: 50){
                    Spacer()
                    Button(action: handleSubmit) {
                        Text("Submit")
                            .padding()
                            .font(.system(size: 20))
                            .foregroundColor(.white)
                            .frame(width: 120)
                            .background(isSubmitDisabled ? Color.gray : Color.red)
                            .cornerRadius(10)
                    }
                    .disabled(isSubmitDisabled)
                    .buttonStyle(BorderlessButtonStyle())
                    
                    Button(action: handleClearForm) {
                        Text("Clear")
                            .font(.system(size: 20))
                            .foregroundColor(.white)
                            .padding()
                            .frame(width: 120)
                            .background(Color.blue)
                            .cornerRadius(10)
                    }
                    .buttonStyle(BorderlessButtonStyle())
                    Spacer()
                }
                .fullScreenCover(isPresented: $showSuggestions) {
                    SuggestionsView(isPresented: $showSuggestions, keyword: $keyword, previousKeyword: $prevValue, queryParams: $autoCompleteQueryParams,  auto_vm: auto_vm)
                }
            }
                
    }
}



struct FormView_Previews: PreviewProvider {
    static var previews: some View {
        let displayResults = true
        func onSubmit (){
            print("Update Results Preview!")
        }
        
        let new_results_vm = ResultsViewModelImpl(
            service: ResultsServiceImpl() )
        
        let new_auto_vm = AutoCompleteViewModelImpl(
            service: AutoCompleteServiceImpl())
        
        return FormView(displayResults: .constant(displayResults), isFormCollapsed: .constant(false), results_vm: new_results_vm, auto_vm: new_auto_vm)
    }
}
