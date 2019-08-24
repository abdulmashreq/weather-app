import { call, put } from 'redux-saga/effects';
import { actionTypes } from '../actions/actionTypes';
import { toronto, montreal, city } from '../../api';

export function* getWeather(action) {
  const cityName = action.payload.city === 'toronto' ? toronto : montreal
  try {
    const data = yield call(cityName);
    data.city = yield call(city, data.placecode);
    yield put({ type: actionTypes.FETCH_WEATHER_SUCCESS, data });
  } catch (e) {
    yield put({ type: actionTypes.FETCH_WEATHER_ERROR, message: e });
  }
}


export default {
  getWeather
};
