import { createSelector } from "reselect";
import { selectGalleryData } from "../gallery/gallery.selectors";

export const selectModal = (state) => state.modal;
export const selectModalReel = (id) => createSelector([selectGalleryData], (data) => data.find((item) => (item.id === id ? item.reel : null)));
