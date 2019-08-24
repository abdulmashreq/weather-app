import { actionTypes } from './../actions/actionTypes';

export const initialState = {
  data: null,
  activeImage: 0,
  loading: false,
  success: false,
  error: false,
  active: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GALLERY:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.FETCH_GALLERY_SUCCESS: {
      const allData = action.data;
      return {
        ...state,
        data: allData,
        success: true,
        loading: false,
      };
    }
    case actionTypes.FETCH_GALLERY_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case actionTypes.FETCH_GALLERY_OPEN:
      return {
        ...state,
        data: state.data,
        active: !state.active,
        activeImage: !state.active ? action.payload.index : 0,
        success: true,
        loading: false
      };

    case actionTypes.FETCH_GALLERY_IMAGE:
      return {
        ...state,
        data: state.data,
        activeImage: action.payload.index,
        success: true,
        loading: false
      };

    default:
      return state;
  }
};
