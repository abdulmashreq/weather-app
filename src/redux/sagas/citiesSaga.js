import { call, put } from 'redux-saga/effects';
import { actionTypes } from '../actions/actionTypes';
import { cities } from '../../api';

export function* getCities(action) {
  try {
    const data = yield call(cities);
    yield put({ type: actionTypes.FETCH_CITIES_SUCCESS, data });
  } catch (e) {
    yield put({ type: actionTypes.FETCH_CITIES_ERROR, message: e });
  }
}


export default {
  getCities
};
