import BookList from "/workspaces/HooBoo/src/front/js/component/BookCard.jsx";

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            token: localStorage.getItem("jwt-token") || null,
            books: [],
			favorites: [],
        },
        actions: {
            crear_usuario: async (email, password) => {
                try {
                    const res = await fetch(`${process.env.BACKEND_URL}/api/Registro`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ email, password }),
                    });
                    if (!res.ok) {
                        const errorData = await res.json();
                        throw new Error(errorData.msg || "Error al registrar usuario");
                    }
                    const data = await res.json();
                    console.log(data.msg);
                    return data;
                } catch (error) {
                    console.error("Error al registrar usuario:", error);
                    return { error: error.message };
                }
            },
            iniciarSesion: async (email, password) => {
                try {
                    const res = await fetch(`${process.env.BACKEND_URL}/api/Login`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ email, password }),
                    });

                    if (!res.ok) {
                        const errorData = await res.json();
                        throw new Error(errorData.msg || "Error en la solicitud de login");
                    }

                    const data = await res.json();
                    localStorage.setItem("jwt-token", data.access_token);
                    setStore({ token: data.access_token });
                    console.log("Usuario autenticado:", data);

                    return { success: true, token: data.access_token };
                } catch (error) {
                    console.error("Error en la solicitud de login:", error);
                    return { success: false, error: error.message };
                }
            },
            traerLibros: async () => {
                try {
                    const res = await fetch("https://www.googleapis.com/books/v1/volumes?q=subject:romance&maxResults=40&key=AIzaSyDWeHrvToJGuNVbZjPWHcP6C_QDdGNBlbg", {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            "Authorization": '55948_25703fc2113e4aece39188c265f17591'
                        }
                    });

                    if (!res.ok) {
                        const errorData = await res.json();
                        throw new Error(errorData.msg || "Error al obtener los libros");
                    }

                    const data = await res.json();
                    setStore({ books: data.items });
                    console.log("Libros obtenidos:", data.items);
                    return data.items;
                } catch (error) {
                    console.error("Error al obtener los libros:", error);
                    return { error: error.message };
                }
            }, 
            cerrarSesion: () => {
                localStorage.removeItem("jwt-token");
                setStore({ token: null });
                console.log("Usuario deslogueado");
            },
            addFavoritos: (book) => {
                console.log(book)
                const store = getStore();
                if (!store.favorites.some((fav) => fav.id === book.id)) {
                    console.log([...store.favorites, book])
                    store.favorites.push(book)
                    setStore({ favorites: [...store.favorites] });
                    console.log("Libro agregado a favoritos:", book.volumeInfo.title);
                    console.log(store.favorites)
                } else {
                    console.log("El libro ya está en tus favoritos");
                }
            },
            removeFavoritos: (book) => {
                const store = getStore();
                setStore({
                    favorites: store.favorites.filter((fav) => fav.id !== book.id),
                });
                console.log("Libro eliminado de favoritos:", book.volumeInfo.title);
            },
        }
    };
};

export default getState;