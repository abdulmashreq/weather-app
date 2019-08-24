import { actionTypes } from './../actions/actionTypes';

export const initialState = {
  data: null,
  loading: false,
  success: false,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.FETCH_WEATHER:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.FETCH_WEATHER_SUCCESS: {
      const allData = action.data;
      return {
        ...state,
        data: allData,
        success: true,
        loading: false,
      };
    }
    case actionTypes.FETCH_WEATHER_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
