import React, { useState, useEffect } from "react";
import getState from "./flux.js";

export const Context = React.createContext(null);

const injectContext = (PassedComponent) => {
  const StoreWrapper = (props) => {
    const [state, setState] = useState(
      getState({
        getStore: () => state.store,
        getActions: () => state.actions,
        setStore: (updatedStore) =>
          setState((prevState) => ({
            store: {
              ...prevState.store,
              ...updatedStore,
            },
            actions: { ...prevState.actions },
          })),
      })
    );

    const [backgroundColor, setBackgroundColor] = useState('#ffffff');

    const toggleBackgroundColor = () => {
      setBackgroundColor(prevColor => (prevColor === '#ffffff' ? '#000000' : '#ffffff'));
    };

    useEffect(() => {
      state.actions.traerTodosLosLibros();

      // Verifica si hay un token almacenado en localStorage al cargar la app
      const token = localStorage.getItem("jwt-token");
      if (token) {
        setState((prevState) => ({
          ...prevState,
          store: { ...prevState.store, token },
        }));
      }
    }, []);

    return (
      <Context.Provider value={{ ...state, backgroundColor, toggleBackgroundColor }}>
        <PassedComponent {...props} />
      </Context.Provider>
    );
  };
  return StoreWrapper;
};

export default injectContext;
