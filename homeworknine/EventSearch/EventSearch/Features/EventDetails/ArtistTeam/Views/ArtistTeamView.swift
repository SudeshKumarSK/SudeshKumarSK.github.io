//
//  ArtistTeamView.swift
//  EventSearch
//
//  Created by Sudesh Kumar on 4/20/23.
//

import SwiftUI

struct ArtistTeamView: View {
    @Binding var currentEventId: String
    
    @ObservedObject var artist_vm: ArtistTeamViewModelImpl
    
    func formatFollowers(followers: Int) -> String{
        var millionResult: Int = 0
        
        if(String(followers).count >= 7){
            millionResult = followers / 1000000
            return String(millionResult) + "M" + " Followers"
        }
        
        return String(followers) + " Followers"
    }
    
    var body: some View {
        let _ = Self._printChanges()
        VStack(spacing: -100){
            if(artist_vm.isLoading)  {
                VStack {
                    ProgressView()
                    Text("Please Wait ...")
                        .font(.headline)
                        .fontWeight(.semibold)
                        .foregroundColor(.secondary)
                }
                .frame(maxWidth: .infinity, maxHeight: .infinity)
            }
            
            else{
                if(artist_vm.response.status){
                    if let res = artist_vm.response.data{
                        if (res.musicFlag){
                            if let data = res.data{
                                ScrollView {
                                    ForEach(data, id: \.self) { artistItem in
                                        
                                        // The VStack is the back box which contains a couple of VStacks and HStacks inside it. This gets repeated inside the ForEach for everyartist.
                                        VStack{
                                            
                                            // The top VStack above the Popular Albums which contains HStack that holds the Artist Album Icon, Artist Name, Popularity.
                                            VStack(spacing: -10){
                                                
                                                // This HStack holds the VStack1 => [Artist Image], VStack2 => [Artist Name, Followers, Spotify Link] and VStack3 => [Popularity with Yellow Progress Circle]
                                                HStack(spacing: -10) {
                                                    
                                                    // The Vstack1 => contains the Artist Image.
                                                    VStack(spacing: 0){
                                                        AsyncImage(url: URL(string: artistItem.image ?? "")) { image in
                                                            image
                                                                .resizable()
                                                                .clipShape(RoundedRectangle(cornerRadius: 10))
                                                        } placeholder: {
                                                            ProgressView()
                                                        }
                                                        .frame(width: 100, height: 100)
                                                        .padding(.leading, 5)
                                                    }
                                                    .padding(.top, 5)
                                                    
                                                    
                                                    // The Vstack2 => [Artist Name, Followers, Spotify Link]
                                                    VStack(spacing: 0){
                                                        Text(artistItem.name ?? "-")
                                                            .foregroundColor(.white)
                                                            .fontWeight(.bold)
                                                            .font(.system(size: 25))
                                                            .padding(.bottom, 10)
                                                        
                                                        
                                                        
                                                        Text(formatFollowers(followers: artistItem.followers ?? 0))
                                                            .foregroundColor(.white)
                                                            .fontWeight(.semibold)
                                                            .font(.system(size: 18))
                                                            .padding(.bottom, 10)
                                                        
                                                        
                                                        
                                                        if let spotifyLink = artistItem.spotifyLink{
                                                            Link(destination: URL(string: spotifyLink)!,
                                                                 label: {
                                                                HStack{
                                                                    Spacer()
                                                                    Image("SpotifyIcon")
                                                                        .resizable()
                                                                        .aspectRatio(contentMode: .fit)
                                                                        .frame(width: 30, height: 30)
                                                                    
                                                                    
                                                                    Text("Spotify")
                                                                        .foregroundColor(.green)
                                                                        .fontWeight(.medium)
                                                                        .font(.system(size: 15))
                                                                    
                                                                    Spacer()
                                                                    
                                                                }
                                                            })
                                                            .padding(.bottom, 10)
                                                        }
                                                    }
                                                    .padding(.leading, 5)
                                                    .padding(.top, 5)
                                                    
                                                    
                                                    // VStack3 => [Popularity with Yellow Progress Circle]
                                                    VStack(spacing: 4){
                                                        Text("Popularity")
                                                            .foregroundColor(.white)
                                                            .fontWeight(.semibold)
                                                            .font(.system(size: 18))
                                                            .padding(.bottom, 10)
                                                            .padding(.top, 15)
                                                        
                                                        //Using the ProgressRingView to generate the progress Ring below.
                                                        ProgressRingView(popularity: Binding.constant(artistItem.popularity ?? 0))
                                                        
                                                        Spacer()
                                                    }
                                                    .padding(.leading, 5)
                                                    .padding(.trailing, 10)
                                                    
                                                    
                                                }
                                            }
                                            .padding(.leading, 10)
                                            .padding(.bottom, 5)
                                            
                                            
                                            // The bottom VStack which comntains the Popular Albums
                                            VStack{
                                                HStack(spacing: -10){
                                                    Text("Popular Albums")
                                                        .foregroundColor(.white)
                                                        .fontWeight(.semibold)
                                                        .font(.system(size: 25))
                                                        .padding(.bottom, 10)
                                                    Spacer()
                                                }
                                                .padding(.leading, 10)
                                                
                                                VStack{
                                                    HStack(spacing: 0){
                                                        if let albums = artistItem.albums{
                                                            AsyncImage(url: URL(string: albums[0] )) { image in
                                                                image
                                                                    .resizable()
                                                                    .clipShape(RoundedRectangle(cornerRadius: 10))
                                                            } placeholder: {
                                                                ProgressView()
                                                            }
                                                            .frame(width: 100, height: 100)
                                                            .padding(.leading, 20)
                                                            
                                                            AsyncImage(url: URL(string: albums[1] )) { image in
                                                                image
                                                                    .resizable()
                                                                    .clipShape(RoundedRectangle(cornerRadius: 10))
                                                            } placeholder: {
                                                                ProgressView()
                                                            }
                                                            .frame(width: 100, height: 100)
                                                            .padding(.leading, 20)
                                                            
                                                            AsyncImage(url: URL(string: albums[2] )) { image in
                                                                image
                                                                    .resizable()
                                                                    .clipShape(RoundedRectangle(cornerRadius: 10))
                                                            } placeholder: {
                                                                ProgressView()
                                                            }
                                                            .frame(width: 100, height: 100)
                                                            .padding(.leading, 20)
                                                            
                                                            Spacer()
                                                            
                                                        }
                                                    }
                                                    .padding(.bottom, 10)
                                                    
                                                }
                                            }
                                            .padding(.leading, 10)
                                            .padding(.bottom, 5)
                                            
                                        }
                                        .background(Theme.artistBG)
                                        .cornerRadius(10)
                                        .padding(.bottom, 20)
                                        .padding(.leading, 5)
                                        .padding(.trailing, 5)
                                    }
                                }

                            }else{
                                NoArtistRelatedView()
                            }
                        }
                        else{
                            NoArtistRelatedView()
                        }
                    }else{
                        NoArtistRelatedView()
                    }
                }else{
                    NoArtistRelatedView()
                }
            }
    
        }
        .onAppear{
            Task{
                await artist_vm.getArtistDetails(queryParameters: ["id": currentEventId])
            }
        }
    }
}
struct ArtistTeamView_Previews: PreviewProvider {
    static var previews: some View {
        
        let new_artist_vm = ArtistTeamViewModelImpl(
            service: ArtistTeamServiceImpl())
        
        ArtistTeamView(currentEventId: .constant("sudeshkumar"),
                       artist_vm: new_artist_vm)
    }
}
