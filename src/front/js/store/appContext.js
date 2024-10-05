import React, { useState, useEffect } from "react";
import getState from "./flux.js";

export const Context = React.createContext(null);

const injectContext = PassedComponent => {
	const StoreWrapper = props => {
		const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: (updatedStore) =>
					setState(prevState => ({
						store: {
							...prevState.store,
							...updatedStore,
						},
						actions: { ...prevState.actions }
					}))
		})
	); 

	useEffect(() => {
		state.actions.traerTodosLosLibros();
	}, []);

		return (
			<Context.Provider value={state}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext;