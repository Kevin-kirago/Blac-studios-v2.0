import { createSelector } from "reselect";

const selectGallery = (state) => state.gallery;
export const selectGalleryData = createSelector([selectGallery], (gallery) => gallery.data);
export const selectGalleryItem = (url) => createSelector([selectGalleryData], (data) => data.find((item) => `/${item.routeName}` === url));
