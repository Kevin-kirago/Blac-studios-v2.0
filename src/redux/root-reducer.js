// Root-Reducer Represent all reducers as the base state reduver
import { combineReducers } from "redux";
import galleryReducer from "./Galla/gallery.reducer";

const rootReducer = combineReducers({
	gallery: galleryReducer,
});

export default rootReducer;
