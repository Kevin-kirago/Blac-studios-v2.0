import { createSelector } from "reselect";

const selectStore = (state) => state.gallery;
export const selectGalleryData = createSelector([selectStore], (gallery) => gallery.data);
