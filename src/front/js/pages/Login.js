import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Login.css';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate('/Home');
	};

	const handleSignupRedirect = () => {
		navigate('/Registro');
	};

	return (
		<div className="form-container">
			<form onSubmit={handleSubmit}>
				<h2>Iniciar Sesión</h2>
				<label htmlFor="email">Correo electrónico:</label>
				<input
					type="email"
					id="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Ingresa tu correo"
					required
				/>
				<label htmlFor="password">Contraseña:</label>
				<input
					type="password"
					id="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Ingresa tu contraseña"
					required
				/>
				<button type="submit">Ingresar</button>
				<div className="forgot-password">
					<a href="#">has olvidado tu contraseña?</a>
				</div>
				<div className="or-login-with">Ingresa con Gmail</div>
				<button className="Gmail">Gmail</button>
				<div className="signup-redirect">
					<p>¿No tienes una cuenta?</p>
					<button onClick={handleSignupRedirect} className="cancel-button">Registrarse</button>
				</div>
			</form>
		</div>
	);
};

export default Login;