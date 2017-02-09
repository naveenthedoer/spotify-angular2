import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../services/spotify.service';
import {Album} from '../album';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'sp-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  id: string;
  album: Album[];
  private json:string = "";
  errorString:string;
  constructor(private _spotifyService: SpotifyService,
                private _route: ActivatedRoute) {

  }

  ngOnInit() {
    this._route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this._spotifyService.getAlbum(id)
          .subscribe(album => {
            this.album = album;
            // this.json = JSON.stringify(album, undefined, 4);
          }, error => {
            this.errorString = <any> error.message;
        });
      });
  }

}
