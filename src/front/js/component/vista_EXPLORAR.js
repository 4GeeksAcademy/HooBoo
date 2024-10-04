
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import BookCard from "./BookCard.jsx";
import "../../styles/BookCard.css";
import Footercolapsado from "./Footercolapsado.jsx"
import Navbaractivo from "./Navbaractivo.jsx";

const VistaExplorar = () => {
    const { store } = useContext(Context);
    // const [searchBox, setSearchBox] = useState("");

    // const handleSearch = (event) => {
    //     setSearchBox(event.target.value);
    // };

    return (
        <>
        <Navbaractivo />
        <div className="book-list">
            {store.books.map((book, index) => (
                <BookCard 
                    key={index}
                    book={book}
                />
            ))}
        </div>
        <Footercolapsado/>
        </>
    );
};

export default VistaExplorar;

