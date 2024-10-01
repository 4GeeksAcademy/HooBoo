import BookList from "/workspaces/HooBoo/src/front/js/component/BookCard.jsx";

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            token: localStorage.getItem("jwt-token") || null,
            books: [
                { id: 1, image: "https://m.media-amazon.com/images/I/71eodkfaQmL._AC_UL320_.jpg", title: "Pride and Prejudice", description: "Descripción de Pride and Prejudice", author: "Jane Austen" },
                { id: 2, image: "https://m.media-amazon.com/images/I/41IpwC2TMWL._SY445_SX342_.jpg", title: "Me Before You", description: "Descripción de Me Before You", author: "Jojo Moyes" },
                { id: 3, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQa7MrAxsinuHd0lnonL5TruTmF1d78wEAf0D9vcbRwuDirmG_Cs2ucZOfTAB9-xjTimz61fHUiepSg375_6Ls0-HzodFlF7OnmiG5rKPo&usqp=CAc", title: "The Notebook", description: "Descripción de The Notebook", author: "Nicholas Sparks" },
                { id: 4, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Jane_Eyre_title_page.jpg/200px-Jane_Eyre_title_page.jpg", title: "Jane Eyre", description: "Descripción de Jane Eyre", author: "Charlotte Brontë" },
                { id: 5, image: "https://upload.wikimedia.org/wikipedia/en/0/0b/Outlander-1991_1st_Edition_cover.jpg", title: "Outlander", description: "Descripción de Outlander", author: "Diana Gabaldon" },
                { id: 6, image: "https://m.media-amazon.com/images/I/817iFfLhJ+L._SY466_.jpg", title: "The Time Traveler's Wife", description: "Descripción de The Time Traveler's Wife", author: "Audrey Niffenegger" },
                { id: 7, image: "https://m.media-amazon.com/images/I/41RDgCHpGTL._SY445_SX342_.jpg", title: "The Fault in Our Stars", description: "Descripción de The Fault in Our Stars", author: "John Green" },
                { id: 8, image: "https://m.media-amazon.com/images/I/31HeDw9gMzL._SY445_SX342_.jpg", title: "Twilight", description: "Descripción de Twilight", author: "Stephenie Meyer" },
                { id: 9, image: "https://m.media-amazon.com/images/I/815UM9D+lKL._SY466_.jpg", title: "Beautiful Disaster", description: "Descripción de Beautiful Disaster", author: "Jamie McGuire" },
                { id: 10, image: "https://m.media-amazon.com/images/I/813aV273-rL._SY466_.jpg", title: "It Ends with Us", description: "Descripción de It Ends with Us", author: "Colleen Hoover" },
                { id: 11, image: "https://m.media-amazon.com/images/I/41kGNyUXkbL._SY445_SX342_.jpg", title: "The Hating Game", description: "Descripción de The Hating Game", author: "Sally Thorne" },
                { id: 12, image: "https://m.media-amazon.com/images/I/41hv25yqOCL._SY445_SX342_.jpg", title: "Red, White & Royal Blue", description: "Descripción de Red, White & Royal Blue", author: "Casey McQuiston" },            ],
			favorito: []
        },
        actions: {
            traerLibros: () => {
                // Aquí se reemplaza la llamada a la API con tus libros predefinidos
                const libros = getStore().books; // Usa tus datos manuales
                setStore({ books: libros }); // Guardar libros en el store
                console.log("Libros obtenidos:", libros);
                return libros;
            },
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
            // Puedes descomentar esto cuando quieras hacer la llamada a la API real
            /* traerLibros: async () => {
                try {
                    const res = await fetch("https://www.googleapis.com/books/v1/volumes?q=subject:romance&key=AIzaSyDWeHrvToJGuNVbZjPWHcP6C_QDdGNBlbg", {
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
                    const libros = data.items.map(item => ({
                        id: item.id, 
                        title: item.volumeInfo.title,
                        image: item.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/150", // Placeholder si no hay imagen
                        description: item.volumeInfo.description || "Descripción no disponible",
                        author: item.volumeInfo.authors ? item.volumeInfo.authors.join(", ") : "Autor no disponible"
                    }));
                    setStore({ books: libros }); // Guardar libros en el store
                    console.log("Libros obtenidos:", libros);
                    return libros;
                } catch (error) {
                    console.error("Error al obtener los libros:", error);
                    return { error: error.message };
                }
            }, */

            cerrarSesion: () => {
                localStorage.removeItem("jwt-token");
                setStore({ token: null });
                console.log("Usuario deslogueado");
            },
            añadirFavorito: (categoria, libroFavorito) => {
                const store = getStore();
                const favorito = { categoria, libro: libroFavorito };

                if (store.favorito.some(f => f.libro === libroFavorito && f.categoria === categoria)) {
                    setStore({
                        favorito: store.favorito.filter(f => f.libro !== libroFavorito || f.categoria !== categoria)
                    });
                } else {
                    setStore({
                        favorito: [...store.favorito, favorito]
                    });
                }
            },
            deleteFavorito: (categoria, libroFavorito) => {
                const store = getStore();
                setStore({
                    favorito: store.favorito.filter(f => f.libro !== libroFavorito || f.categoria !== categoria)
                });
            }
        }
    };
};

export default getState;