const initial_state = {
	isModalOpen: false,
	currentProjectvideo: null,
};

const modalReducer = (state = initial_state, action) => {
	switch (action.type) {
		case "TOGGLEMODAL":
			return {
				isModalOpen: !state.isModalOpen,
				currentProjectvideo: action.payload,
			};
		default:
			return state;
	}
};

export default modalReducer;
