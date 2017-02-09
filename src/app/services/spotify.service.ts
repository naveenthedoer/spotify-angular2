import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Artist} from '../artist';
import {Album} from '../album';

@Injectable()
export class SpotifyService {
  private searchUrl: string;
  private artistUrl: string;
  private albumUrl: string;

  constructor(private _http:Http) {
  }

  private handleError (error: Response){
    console.error(error.json().error);
    return Observable.throw(error.json().error || 'Server Error');
  }

  searchMusic(str: string, type="artist"){
    this.searchUrl = `https://api.spotify.com/v1/search?query=${str}&offset=0&limit=20&type=${type}&market=US`;

    return this._http.get(this.searchUrl)
      .map((res:Response) => res.json())
      .catch(this.handleError);
  }

  getArtist(id: string){
    this.artistUrl = `https://api.spotify.com/v1/artists/${id}`;

    return this._http.get(this.artistUrl)
      .map((res:Response) => res.json())
      .catch(this.handleError);
  }

  getAlbums(artistId: string){
    this.albumUrl = `https://api.spotify.com/v1/artists/${artistId}/albums`;

    return this._http.get(this.albumUrl)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getAlbum(id: string){
    this.albumUrl = `https://api.spotify.com/v1/albums/${id}`;

    return this._http.get(this.albumUrl)
      .map(res => res.json())
      .catch(this.handleError);
  }


}
