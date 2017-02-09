import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {SearchComponent} from './search/search.component';
import {ArtistComponent} from './artist/artist.component';
import {AlbumComponent} from './album/album.component';

const APP_ROUTES: Routes = [
  {path: 'home', component: AppComponent },
  {path: 'about', component: AboutComponent},
  {path: '', component: SearchComponent},
  {path: 'artist/:id', component: ArtistComponent},
  {path: 'album/:id', component: AlbumComponent }
]

export const routing = RouterModule.forRoot(APP_ROUTES);
