import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html'
})
export class TarjetasComponent implements OnInit {

  @Input() items : any[] = [];
  @Input() padre : string;

  constructor(private router : Router) { 
    
  }


  ngOnInit(): void {
  }

  verArtista(id : any){
    this.router.navigate(['/artista',id]);
  }
}
