import { actionTypes } from './actionTypes';

export const galleryData = {
  galleryDataStart: payload => ({
    type: actionTypes.FETCH_GALLERY,
    payload,
  }),
  galleryDataError: payload => ({
    type: actionTypes.FETCH_GALLERY_ERROR,
    payload,
  }),
  galleryDataSuccess: payload => ({
    type: actionTypes.FETCH_GALLERY_SUCCESS,
    payload,
  }),
  galleryOpen: payload => ({
    type: actionTypes.FETCH_GALLERY_OPEN,
    payload,
  }),
  galleryImage: payload => ({
    type: actionTypes.FETCH_GALLERY_IMAGE,
    payload,
  })
};
