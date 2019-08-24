import { actionTypes } from './actionTypes';

export const weatherData = {
  weatherDataStart: payload => ({
    type: actionTypes.FETCH_WEATHER,
    payload,
  }),
  weatherDataError: payload => ({
    type: actionTypes.FETCH_WEATHER_ERROR,
    payload,
  }),
  weatherDataSuccess: payload => ({
    type: actionTypes.FETCH_WEATHER_SUCCESS,
    payload,
  }),
};

export const reloadData = data => ({
  type: actionTypes.RELOAD_DATA,
  payload: data,
});
