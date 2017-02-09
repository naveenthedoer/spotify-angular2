import * as fromAlbums from './albums.reducer';
import { AlbumState } from './albums.reducer';
import { combineReducers } from '@ngrx/store';
// import * as fromOperation from './operation.reducer';
// import { OperationState } from './operation.reducer';

export interface AppState {
    albums: AlbumState;
}


export const initialState: AppState = {
    albums: fromAlbums.initialState
};


export const reducer = {
    albums: fromAlbums.albumReducer
};
