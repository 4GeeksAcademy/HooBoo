import React from 'react';
import '../../styles/acercaDeNosotros.css';
import luisImage from '../../img/Luis.png';
import marianaImage from '../../img/Mariana.png';
import patriciaImage from '../../img/Patricia.png';
import raulImage from '../../img/Raul.png';


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
      name: 'Luis',
      role: 'Encargado de Backend y Frontend',
      image: luisImage,
      description: 'Luis se ha encargado del backend y front.',
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
      <h1>Conoce a Nuestro Equipo</h1>
      <div className='teamContainer'>
        {teamMembers.map((member, index) => (
          <div key={index} className='memberCard'>
            <img src={member.image} alt={member.name} className='memberImage' />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcercaDeNosotros;
