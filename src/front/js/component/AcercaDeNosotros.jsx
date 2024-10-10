import React from 'react';
import '../../styles/acercaDeNosotros.css';
import luisImage from '../../img/Luis.png';
import marianaImage from '../../img/Mariana.png';
import patriciaImage from '../../img/Patricia.png';
import raulImage from '../../img/Raul.png';
import { Link } from 'react-router-dom';


const AcercaDeNosotros = ({ isActive }) => {
  const teamMembers = [
    {
      name: 'Patricia',
      role: 'Project Manager',
      image: patriciaImage,
      description: 'Patricia fue la que propuso la idea del proyecto de hacer esta librería online.',
    },
    {
      name: 'Mariana',
      role: 'Especialista en Frontend',
      image: marianaImage,
      description: 'Mariana ha sido la encargada del backend.',
    },
    {
      name: 'Luis Castilla',
      role: 'Encargado de Backend y Frontend',
      image: luisImage,
      description: 'Luis Castilla es un profesional colombiano de 30 años, actualmente residiendo en España. Con una pasión por la tecnología y el desarrollo de software, ha dedicado su carrera a la creación de soluciones innovadoras tanto en el ámbito del backend como en el frontend. Apasionado por aprender y adaptarse a nuevas tecnologías, su objetivo es seguir creciendo en el mundo de la programación mientras disfruta de la vida en un nuevo país. le encanta trabajar en equipo, compartir conocimientos y siempre busca nuevos retos que impulsen su desarrollo personal y profesional.',
    },
    {
      name: 'Raúl',
      role: 'Encargado del Frontend',
      image: raulImage,
      description: 'Raúl ha hecho el frontend.',
    },
  ];

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
        <Link to="/" className="backButton">Volver</Link>
      </div>
    </div>
  );
};

export default AcercaDeNosotros;
