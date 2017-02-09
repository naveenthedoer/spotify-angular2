import { Album } from '../album';
import { ActionReducer, Action } from '@ngrx/store';

export const LOAD_ALBUMS = 'LOAD_ALBUMS';
export const CHANGE_PHOTO = 'CHANGE_PHOTO';
export const SELECT_ALBUM = 'SELECT_ALBUM';
export const SELECT_PHOTO = 'SELECT_PHOTO';
export const CHANGE_ALBUM = 'CHANGE_ALBUM';

export interface AlbumState {
    collection: Album[];
    selectedAlbum: Album;
}

export const initialState: AlbumState = {
    collection: [],
    selectedAlbum: null
};

export const albumReducer: ActionReducer<AlbumState> = (state: AlbumState = initialState, action: Action) => {
    switch (action.type) {

        case LOAD_ALBUMS:
            return Object.assign({}, state, {
                collection: action.payload,
                selectedAlbum: null,
            });

        default:
            return state;
    }

};
