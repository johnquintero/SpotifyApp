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
  constructor(private spotifyService : SpotifyService,
              private activeRoute : ActivatedRoute) {
    
    this.activeRoute.params.subscribe( params => {
      spotifyService.getArtista(params['id'])
                    .subscribe( (data: any) => {
                      this.artista = data});
    });
    
  }

  ngOnInit(): void {
  }

}
