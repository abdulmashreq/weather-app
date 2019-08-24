import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import weather from './WeatherReducer';
import gallery from './GalleryReducer';
import cities from './CitiesReducer';
import form from './ContactReducer';

export default combineReducers({
  weather,
  gallery,
  cities,
  form,
  router: routerReducer,
});
