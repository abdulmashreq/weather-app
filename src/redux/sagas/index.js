import { takeEvery } from 'redux-saga/effects';

import { actionTypes } from '../actions/actionTypes';
import * as weatherSaga from './weatherSaga';
import * as gallerySaga from './gallerySaga';
import * as citiesSaga from './citiesSaga';

export default function* rootSaga() {
  yield [
    takeEvery(actionTypes.FETCH_WEATHER, weatherSaga.getWeather),
    takeEvery(actionTypes.FETCH_GALLERY, gallerySaga.getImages),
    takeEvery(actionTypes.FETCH_CITIES, citiesSaga.getCities),
    takeEvery(actionTypes.FETCH_GALLERY_OPEN, gallerySaga.activeGallery),
  ];
}
