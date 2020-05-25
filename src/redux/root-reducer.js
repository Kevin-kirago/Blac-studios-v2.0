// Root-Reducer Represent all reducers as the base state reduver
import { combineReducers } from "redux";
import galleryReducer from "./gallery/gallery.reducer";
import modalReducer from "./modal/modal.reducer";

const rootReducer = combineReducers({
	gallery: galleryReducer,
	modal: modalReducer,
});

export default rootReducer;
