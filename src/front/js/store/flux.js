import BookList from "/workspaces/HooBoo/src/front/js/component/BookCard.jsx";

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            token: localStorage.getItem("jwt-token") || null,
            books: [
                // { image: "https://m.media-amazon.com/images/I/71eodkfaQmL._AC_UL320_.jpg", title: "Pride and Prejudice" },
                // { image: "https://m.media-amazon.com/images/I/41IpwC2TMWL._SY445_SX342_.jpg", title: "Me Before You" },
                // { image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQa7MrAxsinuHd0lnonL5TruTmF1d78wEAf0D9vcbRwuDirmG_Cs2ucZOfTAB9-xjTimz61fHUiepSg375_6Ls0-HzodFlF7OnmiG5rKPo&usqp=CAc", title: "The Notebook" },
                // { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Jane_Eyre_title_page.jpg/200px-Jane_Eyre_title_page.jpg", title: "Jane Eyre" },
                // { image: "https://upload.wikimedia.org/wikipedia/en/0/0b/Outlander-1991_1st_Edition_cover.jpg", title: "Outlander" },
                // { image: "https://m.media-amazon.com/images/I/817iFfLhJ+L._SY466_.jpg", title: "The Time Traveler's Wife" },
                // { image: "https://m.media-amazon.com/images/I/41RDgCHpGTL._SY445_SX342_.jpg", title: "The Fault in Our Stars" },
                // { image: "https://m.media-amazon.com/images/I/31HeDw9gMzL._SY445_SX342_.jpg", title: "Twilight" },
                // { image: "https://m.media-amazon.com/images/I/815UM9D+lKL._SY466_.jpg", title: "Beautiful Disaster" },
                // { image: "https://m.media-amazon.com/images/I/813aV273-rL._SY466_.jpg", title: "It Ends with Us" },
                // { image: "https://m.media-amazon.com/images/I/41kGNyUXkbL._SY445_SX342_.jpg", title: "The Hating Game" },
                // { image: "https://m.media-amazon.com/images/I/41hv25yqOCL._SY445_SX342_.jpg", title: "Red, White & Royal Blue" },
            ],
			favorites: []
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
                const store = getStore();
                if (!store.favorites.some((fav) => fav.volumeInfo.title === book.volumeInfo.title)) {
                    setStore({ favorites: [...store.favorites, book] });
                    console.log("Libro agregado a favoritos:", book.volumeInfo.title);
                } else {
                    console.log("El libro ya está en tus favoritos");
                }
            },

            removeFavoritos: (book) => {
                const store = getStore();
                setStore({
                    favorites: store.favorites.filter((fav) => fav.volumeInfo.title !== book.volumeInfo.title),
                });
                console.log("Libro eliminado de favoritos:", book.volumeInfo.title);
            },
        }
    };
};

export default getState;
