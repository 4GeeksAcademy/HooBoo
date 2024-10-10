import React, { useContext } from 'react';
import '../../styles/acercaDeNosotros.css';
import luisImage from '../../img/Luis.png';
import marianaImage from '../../img/Mariana.png';
import patriciaImage from '../../img/Patricia.png';
import raulImage from '../../img/Raul.png';
import { useNavigate } from 'react-router-dom';
import { Context } from "../store/appContext"; 


const AcercaDeNosotros = ({ isActive }) => {
  const { store } = useContext(Context);
  const navigate = useNavigate();

  const teamMembers = [
    {
      name: 'Patricia',
      role: 'Project Manager',
      image: patriciaImage,
      description: 'Patricia fue la que propuso la idea del proyecto de hacer esta librería online.',
    },
    {
      name: 'Mariana',
      role: 'Especialista en Backend',
      image: marianaImage,
      description: 'Mariana ha sido la encargada del backend.',
    },
    {
      name: 'Luis Castilla',
      role: 'Encargado de Backend y Frontend',
      image: luisImage,
      description: 'Es un profesional colombiano de 30 años, actualmente residiendo en España. Con una pasión por la tecnología y el desarrollo de software, ha dedicado su carrera a la creación de soluciones innovadoras tanto en el ámbito del backend como en el frontend. Apasionado por aprender y adaptarse a nuevas tecnologías, su objetivo es seguir creciendo en el mundo de la programación mientras disfruta de la vida en un nuevo país. le encanta trabajar en equipo, compartir conocimientos y siempre busca nuevos retos que impulsen su desarrollo personal y profesional.',
    },
    {
      name: 'Raúl',
      role: 'Encargado del Frontend',
      image: raulImage,
      description: 'Nacido en Madrid, Raúl siempre ha sido un apasionado de la informática, ya desde pequeño ha estado trasteando con el ordenador ya sea para descubrir nuevos programas y aprender, como modear juegos como por ejemplo Skyrim. Todo esas horas al ordenador le ha llevado a aprender programación y a día de hoy se especializa en frontend aunque con el tiempo y práctica aprenderá sobre backend mucho más también.',
    },
  ];

  const handleBackClick = () => {
    if (store.token) {
      navigate('/vistaexplorar');
    } else {
      navigate('/');
    }
  };
  return (
    <div className={`teamPage ${isActive ? 'active' : ''}`}>
      <h1 className='diseño-deestetitulo'>Conoce a Nuestro Equipo</h1>
      <div className='teamContainer'>
        {teamMembers.map((member, index) => (
          <div key={index} className='memberCard'>
            <img src={member.image} alt={member.name} className='memberImage' />
            <h3 className='negrita-paralosrole'>{member.name}</h3>
            <p className='negrita-paralosrole'>{member.role}</p>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
      <div className="backButtonContainer">
        <button onClick={handleBackClick} className="backButton">Volver</button>
      </div>
    </div>
  );
};

export default AcercaDeNosotros;
