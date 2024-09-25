const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: []
		},
		actions: {
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			}
		}
	};
};

export default getState;
