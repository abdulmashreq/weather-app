import { call, put } from 'redux-saga/effects';
import { actionTypes } from '../actions/actionTypes';
import { gallery } from '../../api';

export function* getImages(action) {
  try {
    const data = yield call(gallery);
    yield put({ type: actionTypes.FETCH_GALLERY_SUCCESS, data });
  } catch (e) {
    yield put({ type: actionTypes.FETCH_GALLERY_ERROR, message: e });
  }
}

export function* activeGallery(action) {
  yield put({ type: actionTypes.FETCH_GALLERY_SUCCESS });
}

export default {
  getImages,
  activeGallery
};
