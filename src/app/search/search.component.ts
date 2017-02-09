import { Component} from '@angular/core';
import {SpotifyService} from '../services/spotify.service';
import {Artist} from '../artist';
import { TestComponent } from '../test/test/test.component';
// import { Store } from '@ngrx/store';
// import { AppState } from '../core/store';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'sp-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{

  searchStr: string;
  searchRes: Artist[];
  loadSubscription: Subscription;
  errorString: string;
  private json:string = "";
  constructor(private _spotifyService: SpotifyService){
  }

  searchMusic(){
    this.errorString = "";
    this._spotifyService.searchMusic(this.searchStr)
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(res => {
        this.searchRes = res.artists.items;
        // this.json = JSON.stringify({"artist": res.artists.items}, undefined, 4);
      }, error => {
        this.errorString = <any> error.message;
    });
  }

}
