import BookList from "../pages/book_list";

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            token: localStorage.getItem("jwt-token") || null,
            libros: [],
            favorito: []
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
                    const res = await fetch(`${process.env.BACKEND_URL}/api/books`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    });

                    if (!res.ok) {
                        const errorData = await res.json();
                        throw new Error(errorData.msg || "Error al obtener los libros");
                    }

                    const data = await res.json();
                    setStore({ libros: data });
                    console.log("Libros obtenidos:", data);
                    return data;
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
            añadirFavorito: (categoria, libroFavorito) => {
                const store = getStore();
                const favorito = { categoria, libro: libroFavorito }

                if (store.favorito.some(f => f.libro === libroFavorito && f.categoria === categoria)) {
                    setStore({
                        favorito: store.favorito.filter(f => f.libro !== libroFavorito || f.categoria !== categoria)
                    });

                } else {
                    setStore({
                        favorito: [...store.favorito, favorito]
                    })
                }

            },
            deleteFavorito: (categoria, libroFavorito) => {
                const store = getStore();
                setStore({
                    favorito: store.favorito.filter(f => f.libro !== libroFavorito || f.categoria !== categoria)
                })

            }
        }
    };
};

export default getState;
