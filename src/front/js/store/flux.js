import BookList from "../pages/book_list";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

				listaAccion: [],
				listaRomance: [],
				listaFantasia: [],
				listaThriller: [],
	
				libroAccion: [],
				libroRomance: [],
				libroFantasia: [],
				libroThriller: [],
	
				favorito: [],
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			cargarListaAccion: () => {
				fetch(url)
					.then(resp => resp.json())
					.then(data => {
						setStore({listaAccion: data.results})
					})
					.catch(error => console.log(error))
			},

			cargarListaRomance: () => {
				fetch(url)
				.then(resp => resp.json())
				.then(data => {
					setStore({listaRomance: data.results})
				})
				.catch(error => console.log(error))

			},

			cargarListaFantasia: () => {
				fetch(url)
				.then(resp => resp.json())
				.then(data => {
					setStore({listaFantasia: data.results})
				})
				.catch(error => console.log(error))
			},

			cargarListaThriller: () => {
				fetch(url)
				.then(resp => resp.json())
				.then(data => {
					setStore({listaThriller: data.results})
				})
				.catch(error => console.log(error))

			},
			
// aqui habria que cambiar propiedades por como se llamase la lista de detalles y el id
			getInfolibroAccion: (id) => {
				fetch(`url/${id}`)
				.then(resp => resp.json())
				.then(data => 
					setStore({libroAccion: data.results.propiedades})
				)
				.catch(error => console.log(error))

			},
			getInfolibroRomance: (id) => {
				fetch(`url/${id}`)
				.then(resp => resp.json())
				.then(data => 
					setStore({libroRomance: data.results.propiedades})
				)
				.catch(error => console.log(error))

			},
			getInfolibroFantasia: () => {
				fetch(`url/${id}`)
				.then(resp => resp.json())
				.then(data => 
					setStore({libroFantasia: data.results.propiedades})
				)
				.catch(error => console.log(error))

			},
			getInfolibroThriller: () => {
				fetch(`url/${id}`)
				.then(resp => resp.json())
				.then(data => 
					setStore({libroThriller: data.results.propiedades})
				)
				.catch(error => console.log(error))

			},
			añadirFavorito: (categoria, libroFavorito) => {
				const store = getStore();
				const favorito = {categoria, libro: libroFavorito}

				if (store.favorito.some(f => f.libro === libroFavorito && f.categoria === categoria)) {
					setStore({
						favorito: store.favorito.filter(f => f.libro !== libroFavorito || f.categoria !== categoria )
					});
					
				} else {
					setStore({
						favorito: [ ...store.favorito, favorito]
					})
				}

			},
			deleteFavorito: (categoria, libroFavorito) => {
				const store = getStore();
				setStore({
					favorito: store.favorito.filter(f => f.libro !== libroFavorito || f.categoria !== categoria )
				})

			},


			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
		
		}
	};
};

export default getState;
