import GALLERY_DATA from "./data";
console.log(GALLERY_DATA);

const initial_state = {
	data: GALLERY_DATA,
};

const galleryReducer = (state = initial_state, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default galleryReducer;
