import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent implements OnInit {

  artista : any={};
  canciones : any[] = [];
  loadingArtista : boolean;

  constructor(private spotifyService : SpotifyService,
              private activeRoute : ActivatedRoute) {
    this.loadingArtista = true;
    this.activeRoute.params.subscribe( params => {
      this.getArtista( params['id']);
      this.getArtistaTracks(params['id']);
    });
    
  }

  getArtista(id : string){
    this.loadingArtista = true;
    this.spotifyService.getArtista(id)
    .subscribe( (artista) => {
      this.artista = artista
      this.loadingArtista = false;
    });
  }

  getArtistaTracks(id : string){
    this.spotifyService.getArtistaTracks(id).subscribe( tracks => {
      console.log(tracks)
      this.canciones =  tracks;
    });
  }

  ngOnInit(): void {
  }

}
