import { actionTypes } from './actionTypes';

export const citiesData = {
  citiesDataStart: payload => ({
    type: actionTypes.FETCH_CITIES,
    payload,
  }),
  citiesDataError: payload => ({
    type: actionTypes.FETCH_CITIES_ERROR,
    payload,
  }),
  citiesDataSuccess: payload => ({
    type: actionTypes.FETCH_CITIES_SUCCESS,
    payload,
  }),
};
