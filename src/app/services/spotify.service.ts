import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { ɵsetRootDomAdapter } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http : HttpClient ) { 
    
  }
  
  getQuery(query :string){
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders ({
      'Authorization' : 'Bearer BQBNjBEoN2uyxN0MPaJA5Ywr9MDhnJpa9xvKVmzB0hA0ac_pgaqlUMd5hxs9ohEDK3fwRgNOGD-3dVuhzdY'
    });

    return this.http.get( url, { headers } );
  }

  // VERSION INICIAL
  // getNewReleases(){
  //   const headers = new HttpHeaders ({
  //     'Authorization' : 'Bearer BQAuVB6vcWsV23ySsIeg4JDCWEVPT5pnzb6pLlj_HFuWifwWmLuLoW00xyhUbiC8cDapmNnyCyHZJR8ftcQ'
  //   });
  //   return this.http.get('https://api.spotify.com/v1/browse/new-releases?country=CO', { headers } )
  //              .pipe(map( data => data['albums'].items));
  // }
  // OPTIMIZED
  getNewReleases(){
    return this.getQuery('browse/new-releases?country=CO')
               .pipe(map( data => data['albums'].items));
  }

  // VERSION INICIAL
  // getArtista( termino : string ){
  //   const headers = new HttpHeaders ({
  //     'Authorization' : 'Bearer BQAuVB6vcWsV23ySsIeg4JDCWEVPT5pnzb6pLlj_HFuWifwWmLuLoW00xyhUbiC8cDapmNnyCyHZJR8ftcQ'
  //   });
  //   return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers } )
  //                   .pipe( map( data => data['artists'].items));
  // }
  getArtistas( termino : string ){
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
               .pipe( map( data => data['artists'].items));
  }

  getArtista( id : string ){
    return this.getQuery(`artists/${id}`);
  }
}
