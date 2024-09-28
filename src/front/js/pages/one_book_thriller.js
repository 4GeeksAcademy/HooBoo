import { Link } from 'react-router-dom';
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/one_book.css";

export const OneBookThriller = ({ tituloThriller, id }) => {
	const { store, actions } = useContext(Context);

	// const imgReserva = "https://www.worten.es/i/d46971b652a8ef7d7702aea130b6378978c748dc"
	// const imgURL = id ? `https://m.media-amazon.com/images/I/614y6qyQLGL._SL1053_.jpg` : imgReserva
	const imgURL = `https://m.media-amazon.com/images/I/71UilMg9WPL._SL1500_.jpg`
	const esFavorito = store.favorito.some(f => f.libro === tituloThriller && f.categoria === 'libroThriller')

	const handleFavoriteToggle = () => {
		actions.añadirFavorito('libroThriller', tituloThriller);
	};

	return (
		<div className="onebook">
			<img
				src={imgURL}
				className="card-img-top"
				alt={`foto personaje ${tituloThriller}`}
				onError={(e) => e.target.src = imgReserva}
			/>
			<div className="card-body">
				<h5 className="card-title">{tituloThriller}</h5>

				<div className="botonesinfoyfav">
					<Link to={`/libroThriller/${id}`} className="boton-info"> <i class="fa-solid fa-plus"></i> </Link>
					<button
						onClick={handleFavoriteToggle}
						className="btn"
						aria-label={esFavorito ? `Eliminar ${tituloThriller} de favoritos` : `Añadir ${tituloThriller} a favoritos`}
					>
						<i className={`fa-star ${esFavorito ? 'fa-solid' : 'fa-regular'}`}></i>
					</button>
					{/* //necesito que lo agregue al panel de libros favoritos añadidos*/}
				</div>
			</div>
		</div>
	);
};

export default OneBookThriller