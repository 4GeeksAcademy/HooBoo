import { Link } from 'react-router-dom';
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/one_book.css";

export const OneBookFantasia = ({ tituloFantasia, id }) => {
	const { store, actions } = useContext(Context);

	// const imgReserva = "https://www.worten.es/i/d46971b652a8ef7d7702aea130b6378978c748dc"
	// const imgURL = id ? `https://m.media-amazon.com/images/I/614y6qyQLGL._SL1053_.jpg` : imgReserva
    const imgURL = `https://m.media-amazon.com/images/I/614y6qyQLGL._SL1053_.jpg`

	const esFavorito = store.favorito.some(f => f.libro === tituloFantasia && f.categoria === 'libroFantasia')

	const handleFavoriteToggle = () => {
		actions.añadirFavorito('libroFantasia', tituloFantasia);
	};

	return (
			<div className="onebook">
					<img
						src={imgURL}
						className="card-img-top"
						alt={`foto personaje ${tituloFantasia}`}
						onError={(e) => e.target.src = imgReserva}
					/>

					<div className="card-body">
						<h5 className="card-title">{tituloFantasia}</h5>

						<div className="botonesinfoyfav">
							<Link to={`/libroFantasia/${id}`} className="btn"> Más Info </Link>
							<button
								onClick={handleFavoriteToggle}
								className="btn"
								aria-label={esFavorito ? `Eliminar ${tituloFantasia} de favoritos` : `Añadir ${tituloFantasia} a favoritos`}
							>
								<i className={`fa-star ${esFavorito ? 'fa-solid' : 'fa-regular'}`}></i>
							</button>
							{/* //necesito que lo agregue al panel de libros favoritos añadidos*/}
						</div>
					</div>
				</div>
	);
};

export default OneBookFantasia