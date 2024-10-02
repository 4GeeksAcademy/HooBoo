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
		// USE EFFECT ORIGINAL
		// useEffect(() => {
		// 	state.actions.traerLibrosAccion();
		// 	state.actions.traerLibrosFantasia();
		// 	state.actions.traerLibrosThriller();
		// 	state.actions.traerLibrosRomance();

		// }, []);

		useEffect(() => {
			const { traerLibrosAccion, traerLibrosFantasia, traerLibrosThriller, traerLibrosRomance } = state.actions;
		
			const cargarLibros = async () => {
				try {
					await traerLibrosAccion();
					await traerLibrosFantasia();
					await traerLibrosThriller();
					await traerLibrosRomance();
				} catch (error) {
					console.error("Error al cargar los libros:", error);
				}
			};
		
			cargarLibros();
		}, [state.actions]);
		

		return (
			<Context.Provider value={state}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext;