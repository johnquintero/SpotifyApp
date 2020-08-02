import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  nuevasCanciones : any[]=[];
  loading : boolean;
  error : boolean;
  mensajeError : string;

  constructor( private spotifyService : SpotifyService) { 
    this.error = false;
    this.spotifyService.getNewReleases()
    .subscribe((data) =>{
          this.loading = true;
          console.log(data);
          this.nuevasCanciones = data;
          this.loading = false;
        }, (errorServicio: any) => {
          this.loading = false;
          this.error = true;
          this.mensajeError = errorServicio.error.error.message;
          console.log(errorServicio);
    })	;
  }

  ngOnInit(): void {
    
  }

}
