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
      description: "Apasionada de la lectura y creadora de la idea original de HooBoo, vi una oportunidad en el mercado para crear una plataforma innovadora para lectores. Mi enfoque se centra en el diseño visual y el desarrollo front-end del proyecto, asegurándome de que cada detalle brinde una experiencia atractiva y fácil de usar. Estoy comprometida con convertir nuestra visión en un espacio donde los amantes de los libros puedan conectar, descubrir y compartir su pasión por la lectura.",
    },
    {
      name: 'Mariana',
      role: 'Especialista en Backend',
      image: marianaImage,
      description: "Mariana, mexicana y amante de la buena comida, aporta esfuerzo y pasión en cada detalle de HooBoo. Siempre dispuesta a dar lo mejor de sí, ha contribuido en todos los aspectos posibles del proyecto, demostrando una actitud abierta y flexible para escuchar, aprender y hacer mejoras constantes. Su dedicación y entusiasmo son clave para el crecimiento de nuestro equipo.",
    },
    {
      name: 'Luis Castilla',
      role: 'Encargado de Backend y Frontend',
      image: luisImage,
      description: 'Es un profesional colombiano de 30 años, actualmente residiendo en España. Con una pasión por la tecnología y el desarrollo de software, ha dedicado su carrera a la creación de soluciones innovadoras tanto en el ámbito del backend como en el frontend. Apasionado por aprender y adaptarse a nuevas tecnologías, su objetivo es seguir creciendo en el mundo de la programación mientras disfruta de la vida en un nuevo país. le encanta trabajar en equipo, compartir conocimientos y siempre busca nuevos retos que impulsen su desarrollo personal y profesional.',
    },
    {
      name: 'Raúl Santana Castilla',
      role: 'Encargado del Frontend',
      image: raulImage,
      description: "Aficionado a los videojuegos y la informática, Raúl es un miembro comprometido que escucha a sus compañeros, aportando siempre su actitud positiva y disposición para adaptarse a las decisiones del equipo. Cabe destacar su capacidad para amoldarse y seguir adelante. Raúl acepta cualquier tarea con entusiasmo, esforzándose siempre por dar lo mejor de sí mismo. Su mejora constante es evidente y refleja el gran empeño que pone en crecer y contribuir al proyecto.",
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
            <p className='negrita-paralosroles'>{member.role}</p>
            <p className='color-letra'>{member.description}</p>
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
