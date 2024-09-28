/* Muestra la foto y detalles de cada libro*/

import { Link } from 'react-router-dom';
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/one_book.css";


export const OneBookAccion = ({ tituloAccion, id }) => {
	const { store, actions } = useContext(Context);

	// const imgReserva = "https://m.media-amazon.com/images/I/51lwhVas6SL._SY445_SX342_.jpg"
	// const imgURL = id ? `https://m.media-amazon.com/images/I/81cfqUl4EiL._SL1500_.jpg` : imgReserva
	const imgURL = `https://m.media-amazon.com/images/I/81cfqUl4EiL._SL1500_.jpg`
	const esFavorito = store.favorito.some(f => f.libro === tituloAccion && f.categoria === 'libroAccion')

	const handleFavoriteToggle = () => {
		actions.añadirFavorito('libroAccion', tituloAccion);
	};

	return (
		<div className="onebook">
			<img
				src={imgURL}
				className="card-img-top"
				alt={`foto personaje ${tituloAccion}`}
				onError={(e) => e.target.src = imgReserva}
			/>
			<div className="card-body">
				<h5 className="card-title">{tituloAccion}</h5>

				<div className="botonesinfoyfav">
					<Link to={`/libroAccion/${id}`} className="boton-info"> <i class="fa-solid fa-plus"></i> </Link>
					<button
						onClick={handleFavoriteToggle}
						className="btn "
						aria-label={esFavorito ? `Eliminar ${tituloAccion} de favoritos` : `Añadir ${tituloAccion} a favoritos`}
					>
						<i className={`fa-star ${esFavorito ? 'fa-solid' : 'fa-regular'}`}></i>
					</button>
					{/* //necesito que lo agregue al panel de libros favoritos añadidos*/}
				</div>
			</div>
		</div>
	);
};

export default OneBookAccion