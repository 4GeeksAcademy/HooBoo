const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            user: [],
            token: localStorage.getItem("jwt-token") || null,
            books: [],
            ratings: JSON.parse(localStorage.getItem("ratings")) || [],
            loading: false,
            favorites: JSON.parse(localStorage.getItem("favorites")) || [],
            base_respaldo: {
                romance: [
                    {
                        id: '1',
                        volumeInfo: {
                            title: "Pride and Prejudice",
                            authors: ["Jane Austen"],
                            description: "La historia de Elizabeth Bennet y su complicada relación con el orgulloso Sr. Darcy, en el contexto de las preocupaciones sociales y románticas de la Inglaterra del siglo XIX.",
                            imageLinks: {
                                thumbnail: "https://m.media-amazon.com/images/I/71eodkfaQmL.AC_UL320.jpg"
                            }
                        }
                    },
                    {
                        id: '2',
                        volumeInfo: {
                            title: "Me Before You",
                            authors: ["Jojo Moyes"],
                            description: "Louisa Clark se convierte en la cuidadora de Will Traynor, un hombre rico y exitoso que quedó tetrapléjico en un accidente. La relación entre ellos cambiará la vida de ambos de maneras inesperadas.",
                            imageLinks: {
                                thumbnail: "https://m.media-amazon.com/images/I/41IpwC2TMWL.SY445_SX342.jpg"
                            }
                        }
                    },
                    {
                        id: '3',
                        volumeInfo: {
                            title: "The Notebook",
                            authors: ["Nicholas Sparks"],
                            description: "Una conmovedora historia de amor que narra la relación entre Noah y Allie, dos jóvenes de diferentes clases sociales que se enamoran durante un verano, enfrentando numerosos desafíos a lo largo de los años.",
                            imageLinks: {
                                thumbnail: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQa7MrAxsinuHd0lnonL5TruTmF1d78wEAf0D9vcbRwuDirmG_Cs2ucZOfTAB9-xjTimz61fHUiepSg375_6Ls0-HzodFlF7OnmiG5rKPo&usqp=CAc"
                            }
                        }
                    },
                    {
                        id: '4',
                        volumeInfo: {
                            title: "Jane Eyre",
                            authors: ["Charlotte Brontë"],
                            description: "La vida de Jane Eyre, una huérfana que se convierte en institutriz y se enamora de su enigmático empleador, el Sr. Rochester, descubriendo oscuros secretos en la mansión de Thornfield.",
                            imageLinks: {
                                thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Jane_Eyre_title_page.jpg/200px-Jane_Eyre_title_page.jpg"
                            }
                        }
                    },
                    {
                        id: '5',
                        volumeInfo: {
                            title: "Outlander",
                            authors: ["Diana Gabaldon"],
                            description: "Claire Randall, una enfermera de la Segunda Guerra Mundial, se transporta misteriosamente al siglo XVIII en Escocia, donde se enamora de un guerrero escocés, Jamie Fraser, en medio de peligros y aventuras.",
                            imageLinks: {
                                thumbnail: "https://upload.wikimedia.org/wikipedia/en/0/0b/Outlander-1991_1st_Edition_cover.jpg"
                            }
                        }
                    },
                    {
                        id: '6',
                        volumeInfo: {
                            title: "The Time Traveler's Wife",
                            authors: ["Audrey Niffenegger"],
                            description: "La historia de Henry, un hombre con un desorden genético que lo hace viajar involuntariamente a través del tiempo, y su esposa Clare, quien debe lidiar con las ausencias y apariciones impredecibles de su marido.",
                            imageLinks: {
                                thumbnail: "https://m.media-amazon.com/images/I/817iFfLhJ+L.SY466.jpg"
                            }
                        }
                    },
                    {
                        id: '7',
                        volumeInfo: {
                            title: "The Fault in Our Stars",
                            authors: ["John Green"],
                            description: "Hazel Grace, una joven con cáncer, se enamora de Augustus Waters, un sobreviviente de cáncer, en un grupo de apoyo. Juntos enfrentan la fragilidad de la vida y la intensidad del primer amor.",
                            imageLinks: {
                                thumbnail: "https://m.media-amazon.com/images/I/41RDgCHpGTL.SY445_SX342.jpg"
                            }
                        }
                    },
                    {
                        id: '8',
                        volumeInfo: {
                            title: "Twilight",
                            authors: ["Stephenie Meyer"],
                            description: "Bella Swan se muda a Forks, Washington, donde conoce al misterioso Edward Cullen y se enamora de él, descubriendo que es un vampiro y enfrentando numerosos peligros en su relación.",
                            imageLinks: {
                                thumbnail: "https://m.media-amazon.com/images/I/31HeDw9gMzL.SY445_SX342.jpg"
                            }
                        }
                    },
                    {
                        id: '9',
                        volumeInfo: {
                            title: "Beautiful Disaster",
                            authors: ["Jamie McGuire"],
                            description: "Abby, una estudiante universitaria con un oscuro pasado, se enamora de Travis, un chico peligroso y carismático. Su relación desafía todas las reglas y se convierte en una montaña rusa emocional.",
                            imageLinks: {
                                thumbnail: "https://m.media-amazon.com/images/I/815UM9D+lKL.SY466.jpg"
                            }
                        }
                    },
                    {
                        id: '10',
                        volumeInfo: {
                            title: "It Ends with Us",
                            authors: ["Colleen Hoover"],
                            description: "Lily Bloom se enamora de Ryle, un neurocirujano. A medida que su relación se profundiza, Lily se enfrenta a su pasado y a los desafíos de una relación tóxica.",
                            imageLinks: {
                                thumbnail: "https://m.media-amazon.com/images/I/813aV273-rL.SY466.jpg"
                            }
                        }
                    },
                    {
                        id: '11',
                        volumeInfo: {
                            title: "The Hating Game",
                            authors: ["Sally Thorne"],
                            description: "Lucy y Joshua son compañeros de trabajo que se odian, pero a medida que compiten por un puesto, la tensión entre ellos se transforma en algo más apasionado.",
                            imageLinks: {
                                thumbnail: "https://m.media-amazon.com/images/I/41kGNyUXkbL.SY445_SX342.jpg"
                            }
                        }
                    },
                    {
                        id: '12',
                        volumeInfo: {
                            title: "Red, White & Royal Blue",
                            authors: ["Casey McQuiston"],
                            description: "El hijo de la presidenta de EE. UU. se ve obligado a fingir una amistad con el príncipe de Gales, pero lo que comienza como una farsa se convierte en un romance inesperado.",
                            imageLinks: {
                                thumbnail: "https://m.media-amazon.com/images/I/41hv25yqOCL.SY445_SX342.jpg"
                            }
                        }
                    },
                    {
                        id: '13',
                        volumeInfo: {
                            title: "The Kiss Quotient",
                            authors: ["Helen Hoang"],
                            description: "Stella Lane, una mujer con autismo, decide contratar a un chico para aprender sobre relaciones. A medida que pasan tiempo juntos, sus sentimientos comienzan a complicar las cosas.",
                            imageLinks: {
                                thumbnail: "https://m.media-amazon.com/images/I/81mKbEH0G2L.SY466.jpg"
                            }
                        }
                    },
                    {
                        id: '14',
                        volumeInfo: {
                            title: "Beach Read",
                            authors: ["Emily Henry"],
                            description: "Dos escritores en un bloque creativo pasan el verano en casas vecinas, desafiándose a escribir en el género del otro, lo que desencadena una conexión romántica inesperada.",
                            imageLinks: {
                                thumbnail: "https://m.media-amazon.com/images/I/41BK2XKbLFL.SY445_SX342.jpg"
                            }
                        }
                    }
                ],
                drama: [
                    {
                        id: '16',
                        volumeInfo: {
                            title: "The Bourne Identity",
                            authors: ["Robert Ludlum"],
                            description: "Un hombre con amnesia despierta en el mar y descubre que es perseguido por asesinos. Mientras intenta descubrir su identidad, se ve envuelto en una conspiración internacional.",
                            imageLinks: {
                                thumbnail: "https://m.media-amazon.com/images/I/71Hg019701L.SY466.jpg"
                            },
                            type_book: "drama"
                        }
                    },
                    {
                        id: '17',
                        volumeInfo: {
                            title: "The Hunger Games",
                            authors: ["Suzanne Collins"],
                            description: "Katniss Everdeen vive en un mundo distópico donde se celebra un evento anual en el que los jóvenes deben luchar a muerte en una arena. Ella se ofrece como tributo para salvar a su hermana.",
                            imageLinks: {
                                thumbnail: "https://upload.wikimedia.org/wikipedia/en/d/dc/The_Hunger_Games.jpg"
                            },
                            type_book: "drama"
                        }
                    },
                    {
                        id: '18',
                        volumeInfo: {
                            title: "I Am Watching You",
                            authors: ["Teresa Driscoll"],
                            description: "Una mujer observa a un extraño mientras viaja en tren, solo para descubrir que ha desaparecido. A medida que se involucra en la investigación, se revelan sorprendentes secretos y conexiones.",
                            imageLinks: {
                                thumbnail: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1500655149i/34879754.jpg"
                            },
                            type_book: "drama"
                        }
                    },
                    {
                        id: '19',
                        volumeInfo: {
                            title: "The Maze Runner",
                            authors: ["James Dashner"],
                            description: "Thomas se despierta en un ascensor sin recordar su pasado, y se encuentra en un grupo de jóvenes atrapados en un laberinto mortal. Juntos deben encontrar una salida.",
                            imageLinks: {
                                thumbnail: "https://m.media-amazon.com/images/I/91Jra1QAMPL.SY466.jpg"
                            },
                            type_book: "acción"
                        }
                    },
                    {
                        id: '20',
                        volumeInfo: {
                            title: "The 39 Clues: The Maze of Bones",
                            authors: ["Rick Riordan"],
                            description: "Dos hermanos participan en una emocionante búsqueda de pistas que los llevará a un tesoro perdido, enfrentándose a otros competidores en una carrera llena de peligros.",
                            imageLinks: {
                                thumbnail: "https://m.media-amazon.com/images/I/51HMPg8mhLL.SY445_SX342.jpg"
                            },
                            type_book: "drama"
                        }
                    },
                    {
                        id: '21',
                        volumeInfo: {
                            title: "Ready Player One",
                            authors: ["Ernest Cline"],
                            description: "En un futuro distópico, Wade Watts se sumerge en un mundo virtual llamado OASIS para encontrar un Easter egg que le promete riqueza y poder. Su búsqueda lo lleva a enfrentarse a diversos desafíos.",
                            imageLinks: {
                                thumbnail: "https://m.media-amazon.com/images/I/51VSYjnv1rL.SY445_SX342.jpg"
                            },
                            type_book: "drama"
                        }
                    },
                    {
                        id: '22',
                        volumeInfo: {
                            title: "The Killing Floor",
                            authors: ["Lee Child"],
                            description: "Jack Reacher, un ex-militar, llega a un pequeño pueblo y es arrestado por un asesinato que no cometió. Decidido a demostrar su inocencia, se adentra en una conspiración más grande.",
                            imageLinks: {
                                thumbnail: "https://m.media-amazon.com/images/I/41WAdPVpRaL.SY445_SX342.jpg"
                            },
                            type_book: "drama"
                        }
                    },
                    {
                        id: '23',
                        volumeInfo: {
                            title: "The Count of Monte Cristo",
                            authors: ["Alexandre Dumas"],
                            description: "Edmond Dantès es injustamente encarcelado y busca venganza tras escapar. Su viaje de transformación y redención lo lleva a un enfrentamiento épico.",
                            imageLinks: {
                                thumbnail: "https://pictures.abebooks.com/isbn/9781906814656-us-300.jpg"
                            },
                            type_book: "drama"
                        }
                    },
                    {
                        id: '24',
                        volumeInfo: {
                            title: "Blood Meridian",
                            authors: ["Cormac McCarthy"],
                            description: "En el siglo XIX, un adolescente conocido como: el chico; se une a una banda de cazadores de indios en una violenta travesía a través de la frontera entre Estados Unidos y México.",
                            imageLinks: {
                                thumbnail: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1701688704i/394535.jpg"
                            },
                            type_book: "drama"
                        }
                    },
                    {
                        id: '25',
                        volumeInfo: {
                            title: "Die Hard",
                            authors: ["Roderick Thorp"],
                            description: "Un oficial de policía de Nueva York, John McClane, se encuentra en un rascacielos durante un atraco, y debe usar su ingenio y habilidades para salvar a los rehenes y detener a los criminales.",
                            imageLinks: {
                                thumbnail: "https://pictures.abebooks.com/isbn/9780140115604-us.jpg"
                            },
                            type_book: "drama"
                        }
                    },
                    {
                        id: '26',
                        volumeInfo: {
                            title: "Lethal Weapon",
                            authors: ["Shane Black"],
                            description: "Dos detectives de Los Ángeles, uno joven y rebelde y otro veterano y desgastado, forman una improbable asociación mientras persiguen a un peligroso cartel de drogas.",
                            imageLinks: {
                                thumbnail: "https://pictures.abebooks.com/inventory/31407005159_2.jpg"
                            },
                            type_book: "drama"
                        }
                    },
                    {
                        id: '27',
                        volumeInfo: {
                            title: "The Terminal List",
                            authors: ["Jack Carr"],
                            description: "James Reece, un ex-Navy SEAL, busca venganza después de que su equipo y su familia son asesinados. Con sus habilidades militares, se embarca en una misión para desmantelar a los responsables.",
                            imageLinks: {
                                thumbnail: "https://m.media-amazon.com/images/I/41lU+52e2uL.SY445_SX342.jpg"
                            },
                            type_book: "drama"
                        }
                    },
                    {
                        id: '28',
                        volumeInfo: {
                            title: "The Last of Us: The Road to Survival",
                            authors: ["Naughty Dog"],
                            description: "Ambientada en un mundo post-apocalíptico, sigue a Joel y Ellie mientras luchan por sobrevivir en un entorno lleno de peligros, incluyendo humanos y criaturas infectadas.",
                            imageLinks: {
                                thumbnail: "https://upload.wikimedia.org/wikipedia/en/4/46/Video_Game_Cover_-_The_Last_of_Us.jpg"
                            },
                            type_book: "drama"
                        }
                    },
                    {
                        id: '29',
                        volumeInfo: {
                            title: "Red Rising",
                            authors: ["Pierce Brown"],
                            description: "En un futuro distópico, Darrow, un minero de Marte, se infiltra en la élite dorada para derrocar su tiranía y luchar por la libertad de su pueblo.",
                            imageLinks: {
                                thumbnail: "https://m.media-amazon.com/images/I/51kD6K4Bx9L.SY445_SX342.jpg"
                            },
                            type_book: "drama"
                        }
                    },
                    {
                        id: '30',
                        volumeInfo: {
                            title: "Shutter Island",
                            authors: ["Dennis Lehane"],
                            description: "Dos agentes federales investigan la desaparición de una paciente de un hospital psiquiátrico en una isla remota, pero pronto descubren que no todo es lo que parece.",
                            imageLinks: {
                                thumbnail: "https://m.media-amazon.com/images/I/51NXjr6l+GL.SY445_SX342.jpg"
                            },
                            type_book: "drama"
                        }
                    }
                ],
                thriller: [
                    {
                        id: '31',
                        volumeInfo: {
                            title: "The Girl with the Dragon Tattoo",
                            authors: ["Stieg Larsson"],
                            description: "El periodista Mikael Blomkvist se une a la hacker Lisbeth Salander para investigar la desaparición de una mujer en una familia poderosa y peligrosa en Suecia.",
                            imageLinks: {
                                thumbnail: "https://m.media-amazon.com/images/I/71-ICZM7B4L.SY466.jpg"
                            },
                            type_book: "thriller"
                        }
                    },
                    {
                        id: '32',
                        volumeInfo: {
                            title: "Gone Girl",
                            authors: ["Gillian Flynn"],
                            description: "La desaparición de Amy Dunne se convierte en un misterio nacional. A medida que la investigación avanza, su esposo Nick se convierte en el principal sospechoso, revelando secretos oscuros de su relación.",
                            imageLinks: {
                                thumbnail: "https://m.media-amazon.com/images/I/41+e4AprelL.SY445_SX342.jpg"
                            },
                            type_book: "thriller"
                        }
                    },
                    {
                        id: '33',
                        volumeInfo: {
                            title: "The Silent Patient",
                            authors: ["Alex Michaelides"],
                            description: "Alicia Berenson, una pintora famosa, dispara a su esposo cinco veces y luego guarda silencio. Un psicoterapeuta se obsesiona con descubrir la verdad detrás de su silencio.",
                            imageLinks: {
                                thumbnail: "https://m.media-amazon.com/images/I/41bsvxNUSdL.SY445_SX342.jpg"
                            },
                            type_book: "thriller"
                        }
                    },
                    {
                        id: '34',
                        volumeInfo: {
                            title: "The Girl on the Train",
                            authors: ["Paula Hawkins"],
                            description: "Rachel, una mujer con problemas de alcoholismo, observa a una pareja aparentemente perfecta desde el tren. Cuando la mujer desaparece, Rachel se involucra en una trama de engaños y mentiras.",
                            imageLinks: {
                                thumbnail: "https://m.media-amazon.com/images/I/41iAxnu4R1L.SY445_SX342.jpg"
                            },
                            type_book: "thriller"
                        }
                    },
                    {
                        id: '35',
                        volumeInfo: {
                            title: "The Da Vinci Code",
                            authors: ["Dan Brown"],
                            description: "El profesor Robert Langdon se ve envuelto en una trama que incluye un asesinato en el Museo del Louvre y una búsqueda por descubrir un secreto oculto de la historia.",
                            imageLinks: {
                                thumbnail: "https://m.media-amazon.com/images/I/41nJiN9TSDL.SY445_SX342.jpg"
                            },
                            type_book: "thriller"
                        }
                    },
                    {
                        id: '36',
                        volumeInfo: {
                            title: "Shutter Island",
                            authors: ["Dennis Lehane"],
                            description: "Dos agentes federales investigan la desaparición de una paciente en un hospital psiquiátrico en una isla remota. Pronto, se dan cuenta de que hay más secretos ocultos en el lugar.",
                            imageLinks: {
                                thumbnail: "https://m.media-amazon.com/images/I/811LR22WdaL.SY466.jpg"
                            },
                            type_book: "thriller"
                        }
                    },
                    {
                        id: '37',
                        volumeInfo: {
                            title: "The Woman in the Window",
                            authors: ["A.J. Finn"],
                            description: "Anna Fox, una psicóloga agorafóbica, observa a sus vecinos desde su ventana. Cuando cree haber presenciado un crimen, su vida comienza a desmoronarse mientras intenta descubrir la verdad.",
                            imageLinks: {
                                thumbnail: "https://m.media-amazon.com/images/I/51oZ4pGUvXL.SY445_SX342.jpg"
                            },
                            type_book: "thriller"
                        }
                    },
                    {
                        id: '38',
                        volumeInfo: {
                            title: "Before I Go to Sleep",
                            authors: ["S.J. Watson"],
                            description: "Christine sufre amnesia y olvida su vida cada día. Con la ayuda de su diario y su médico, intenta reconstruir su pasado, pero pronto descubre que no todo es lo que parece.",
                            imageLinks: {
                                thumbnail: "https://upload.wikimedia.org/wikipedia/en/b/b6/BeforeIGoToSleep.jpg"
                            },
                            type_book: "thriller"
                        }
                    },
                    {
                        id: '39',
                        volumeInfo: {
                            title: "The Snowman",
                            authors: ["Jo Nesbø"],
                            description: "El detective Harry Hole investiga una serie de desapariciones de mujeres en Oslo, todas relacionadas con la aparición de un muñeco de nieve, mientras descubre un macabro patrón.",
                            imageLinks: {
                                thumbnail: "https://m.media-amazon.com/images/I/41uSCCI59VL.SY445_SX342.jpg"
                            },
                            type_book: "thriller"
                        }
                    },
                    {
                        id: '40',
                        volumeInfo: {
                            title: "Big Little Lies",
                            authors: ["Liane Moriarty"],
                            description: "La vida aparentemente perfecta de tres mujeres se ve sacudida por secretos y mentiras que culminan en un asesinato durante una reunión escolar.",
                            imageLinks: {
                                thumbnail: "https://m.media-amazon.com/images/I/41P5vHW40AL.SY445_SX342.jpg"
                            },
                            type_book: "thriller"
                        }
                    },
                    {
                        id: '41',
                        volumeInfo: {
                            title: "The Couple Next Door",
                            authors: ["Shari Lapena"],
                            description: "Anne y Marco dejan a su bebé solo en casa para asistir a una cena en casa de sus vecinos. Cuando el bebé desaparece, secretos oscuros salen a la luz en una investigación llena de giros.",
                            imageLinks: {
                                thumbnail: "https://m.media-amazon.com/images/I/41lFdL3S9BL.SY445_SX342.jpg"
                            },
                            type_book: "thriller"
                        }
                    },
                    {
                        id: '42',
                        volumeInfo: {
                            title: "The Reversal",
                            authors: ["Michael Connelly"],
                            description: "El abogado Mickey Haller es contratado para reabrir un caso de asesinato en el que el acusado, que ha pasado 24 años en prisión, puede ser inocente. ¿Se descubrirá la verdad?",
                            imageLinks: {
                                thumbnail: "https://m.media-amazon.com/images/I/818FZJMXgUL.SY466.jpg"
                            },
                            type_book: "thriller"
                        }
                    },
                    {
                        id: '43',
                        volumeInfo: {
                            title: "I Am Watching You",
                            authors: ["Teresa Driscoll"],
                            description: "Durante un viaje en tren, Ella Longfield escucha a dos hombres hablando con chicas jóvenes y se siente inquieta. Al día siguiente, una de las chicas desaparece, y Ella se convierte en parte de la investigación.",
                            imageLinks: {
                                thumbnail: "https://m.media-amazon.com/images/I/51PeVt0WznL.SY445_SX342.jpg"
                            },
                            type_book: "thriller"
                        }
                    },
                    {
                        id: '44',
                        volumeInfo: {
                            title: "The Girl Who Lived",
                            authors: ["Christopher Greyson"],
                            description: "Faith Winters es la única sobreviviente de un asesinato en serie que mató a su hermana y amigos. Diez años después, lucha por descubrir la verdad detrás del ataque mientras su propia vida está en peligro.",
                            imageLinks: {
                                thumbnail: "https://m.media-amazon.com/images/I/51eAMQG-GkL.SY445_SX342.jpg"
                            },
                            type_book: "thriller"
                        }
                    },
                    {
                        id: '45',
                        volumeInfo: {
                            title: "The Chestnut Man",
                            authors: ["Søren Sveistrup"],
                            description: "Un asesino en serie aterroriza Copenhague dejando figuras hechas de castañas en la escena del crimen. Dos detectives investigan un caso lleno de giros y oscuros secretos.",
                            imageLinks: {
                                thumbnail: "https://m.media-amazon.com/images/I/51enZJlMiVL.SY445_SX342.jpg"
                            },
                            type_book: "thriller"
                        }
                    }
                ],
                fantasia: [
                    {
                        "id": "46",
                        "volumeInfo": {
                            "title": "The Lies of Locke Lamora",
                            "authors": ["Scott Lynch"],
                            "description": "Locke Lamora lidera a los Caballeros Bastardos, una banda de ladrones que conspira para robar a los ricos de la ciudad de Camorr, mientras se enfrenta a una red de conspiraciones mortales.",
                            "imageLinks": {
                                "thumbnail": "https://d3525k1ryd2155.cloudfront.net/f/941/588/9780553588941.RH.0.l.jpg"
                            }
                        }
                    },
                    {
                        "id": "47",
                        "volumeInfo": {
                            "title": "American Gods",
                            "authors": ["Neil Gaiman"],
                            "description": "Shadow Moon, un exconvicto, es reclutado por el misterioso Mr. Wednesday para unirse a él en un viaje por Estados Unidos, donde se encuentra atrapado en una guerra entre los antiguos dioses y los modernos.",
                            "imageLinks": {
                                "thumbnail": "https://pictures.abebooks.com/isbn/9780062689733-es.jpg"
                            }
                        }
                    },
                    {
                        "id": "48",
                        "volumeInfo": {
                            "title": "Good Omens",
                            "authors": ["Neil Gaiman", "Terry Pratchett"],
                            "description": "Un ángel y un demonio, que se han acostumbrado a la vida en la Tierra, unen fuerzas para evitar el Apocalipsis, ya que ninguno de los dos quiere ver el mundo destruido.",
                            "imageLinks": {
                                "thumbnail": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1615552073l/12067.jpg"
                            }
                        }
                    },
                    {
                        "id": "49",
                        "volumeInfo": {
                            "title": "The Priory of the Orange Tree",
                            "authors": ["Samantha Shannon"],
                            "description": "En un mundo dividido, una reina sin heredero y una bruja dragón deben unir fuerzas para detener el regreso de un mal ancestral que amenaza con destruir el mundo entero.",
                            "imageLinks": {
                                "thumbnail": "https://images.penguinrandomhouse.com/cover/9788417821739"
                            }
                        }
                    },
                    {
                        "id": "50",
                        "volumeInfo": {
                            "title": "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
                            "authors": ["C.S. Lewis"],
                            "description": "Cuatro hermanos descubren el mundo mágico de Narnia, donde deben ayudar al león Aslan a derrotar a la Bruja Blanca y restaurar el orden y la paz.",
                            "imageLinks": {
                                "thumbnail": "https://mir-s3-cdn-cf.behance.net/project_modules/hd/a0c39048873339.58a470c427a06.jpg"
                            }
                        }
                    },
                    {
                        "id": "51",
                        "volumeInfo": {
                            "title": "Eragon",
                            "authors": ["Christopher Paolini"],
                            "description": "Un joven granjero llamado Eragon descubre un huevo de dragón que cambiará su vida para siempre, convirtiéndolo en uno de los últimos Jinetes de Dragón en una lucha épica contra un rey tirano.",
                            "imageLinks": {
                                "thumbnail": "https://www.paolini.net/wp-content/uploads/2013/09/Eragon-German-cover.jpg"
                            }
                        }
                    },
                    {
                        "id": "52",
                        "volumeInfo": {
                            "title": "The Witcher: The Last Wish",
                            "authors": ["Andrzej Sapkowski"],
                            "description": "Geralt de Rivia, un cazador de monstruos, lucha contra criaturas aterradoras y se enfrenta a dilemas morales en un mundo donde los humanos pueden ser tan peligrosos como las bestias.",
                            "imageLinks": {
                                "thumbnail": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1675358586i/2287468.jpg"
                            }
                        }
                    },
                    {
                        "id": "53",
                        "volumeInfo": {
                            "title": "The Wheel of Time: The Eye of the World",
                            "authors": ["Robert Jordan"],
                            "description": "Rand al'Thor y sus amigos descubren que están destinados a jugar un papel crucial en la batalla contra el Oscuro, quien busca escapar de su prisión y dominar el mundo.",
                            "imageLinks": {
                                "thumbnail": "https://pictures.abebooks.com/isbn/9781857230765-es.jpg"
                            }
                        }
                    },
                    {
                        "id": "54",
                        "volumeInfo": {
                            "title": "The Hobbit",
                            "authors": ["J.R.R. Tolkien"],
                            "description": "Bilbo Bolsón, un hobbit tranquilo y respetable, se ve arrastrado a una peligrosa aventura con un grupo de enanos y un mago para recuperar un tesoro custodiado por el dragón Smaug.",
                            "imageLinks": {
                                "thumbnail": "https://i.ebayimg.com/images/g/HW4AAOSwYDZgjoaO/s-l600.jpg"
                            }
                        }
                    },
                    {
                        "id": "55",
                        "volumeInfo": {
                            "title": "Mistborn: The Final Empire",
                            "authors": ["Brandon Sanderson"],
                            "description": "En un mundo donde las cenizas caen del cielo y la niebla cubre las noches, un joven esclavo descubre su habilidad para utilizar la alomancia y se une a una rebelión para derrocar al tirano inmortal.",
                            "imageLinks": {
                                "thumbnail": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1617768316i/68428.jpg"
                            }
                        }
                    },
                    {
                        "id": "56",
                        "volumeInfo": {
                            "title": "The Name of the Wind",
                            "authors": ["Patrick Rothfuss"],
                            "description": "Kvothe, un músico y mago legendario, narra la historia de su vida desde sus humildes comienzos hasta convertirse en una figura mítica, mientras intenta encontrar la verdad sobre la muerte de sus padres.",
                            "imageLinks": {
                                "thumbnail": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1704917687i/186074.jpg"
                            }
                        }
                    },
                    {
                        "id": "57",
                        "volumeInfo": {
                            "title": "Harry Potter and the Sorcerer's Stone",
                            "authors": ["J.K. Rowling"],
                            "description": "Harry Potter descubre que es un mago y asiste a Hogwarts, una escuela de magia donde conocerá a sus mejores amigos y se enfrentará a un peligroso enemigo.",
                            "imageLinks": {
                                "thumbnail": "https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg"
                            }
                        }
                    }
                ]
            }
        },
        actions: {
            crear_usuario: async (email, password, username) => {
                try {
                    const res = await fetch(`${process.env.BACKEND_URL}/api/Registro`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ email, password, username }),
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
                        
                        // Manejar diferentes tipos de error según la respuesta del backend
                        if (res.status === 404) {
                            throw new Error("Usuario no registrado");
                        } else if (res.status === 401) {
                            throw new Error("Email o contraseña incorrecta");
                        } else {
                            throw new Error(errorData.msg || "Error en la solicitud de login");
                        }
                    }
            
                    const data = await res.json();
                    localStorage.setItem("jwt-token", data.access_token);
                    const favoritosGuardados = JSON.parse(localStorage.getItem("favorites")) || [];
                    setStore({ token: data.access_token, favorites: favoritosGuardados });
                    console.log("Usuario autenticado:", data);
            
                    return { success: true, token: data.access_token };
                } catch (error) {
                    console.error("Error en la solicitud de login:", error);
                    return { success: false, error: error.message };
                }
            },
            traerLibrosRomance: async () => {
                try {
                    const res = await fetch("https://www.googleapis.com/books/v1/volumes?q=subject:romance&maxResults=40&key=AIzaSyDWeHrvToJGuNVbZjPWHcP6C_QDdGNBlbg", {
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
                    const librosConPortada = data.items.filter(item =>
                        item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail
                    );

                    setStore({ books: librosConPortada });
                    return librosConPortada;
                } catch (error) {
                    console.error("Error al obtener los libros de romance:", error);
                    return { error: error.message };
                }
            },
            traerLibrosAccion: async () => {
                try {
                    const res = await fetch("https://www.googleapis.com/books/v1/volumes?q=subject:accion&maxResults=40&key=AIzaSyDWeHrvToJGuNVbZjPWHcP6C_QDdGNBlbg", {
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
                    const librosConPortada = data.items.filter(item =>
                        item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail
                    );

                    setStore({ books: librosConPortada });
                    return librosConPortada;
                } catch (error) {
                    console.error("Error al obtener los libros de acción:", error);
                    return { error: error.message };
                }
            },
            traerLibrosFantasia: async () => {
                try {
                    const res = await fetch("https://www.googleapis.com/books/v1/volumes?q=subject:fantasy&maxResults=40&key=AIzaSyDWeHrvToJGuNVbZjPWHcP6C_QDdGNBlbg", {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    });

                    if (!res.ok) {
                        const errorData = await res.json();
                        throw new Error(errorData.error.message || "Error al obtener los libros");
                    }

                    const data = await res.json();
                    const librosConPortada = data.items.filter(item =>
                        item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail
                    );

                    setStore({ books: librosConPortada });
                    return librosConPortada;
                } catch (error) {
                    console.error("Error al obtener los libros de fantasía:", error.message);
                    return { error: error.message };
                }
            },
            traerLibrosThriller: async () => {
                try {
                    const res = await fetch("https://www.googleapis.com/books/v1/volumes?q=subject:thriller&maxResults=40&key=AIzaSyDWeHrvToJGuNVbZjPWHcP6C_QDdGNBlbg", {
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
                    const librosConPortada = data.items.filter(item =>
                        item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail
                    );

                    setStore({ books: librosConPortada });
                    return librosConPortada;
                } catch (error) {
                    console.error("Error al obtener los libros de thriller:", error.message);
                    return { error: error.message };
                }
            },
            traerTodosLosLibros: async () => {
                setStore({ loading: true });

                try {
                    const [librosAccion, librosRomance, librosFantasia, librosThriller] = await Promise.all([
                        getActions().traerLibrosAccion(),
                        getActions().traerLibrosRomance(),
                        getActions().traerLibrosFantasia(),
                        getActions().traerLibrosThriller(),
                    ]);

                    const todosLosLibros = [...librosAccion, ...librosRomance, ...librosFantasia, ...librosThriller];
                    const librosMezclados = todosLosLibros.sort(() => Math.random() - 0.5);

                    setStore({ books: librosMezclados, loading: false });
                } catch (error) {
                    console.error("Error al obtener todos los libros:", error);
                    setStore({ loading: false });
                }
            },
            cerrarSesion: () => {
                localStorage.removeItem("jwt-token");
                setStore({ token: null, favorites: [] }); 
                if (window.Chatra) {
                    window.Chatra('shutdown'); 
                    window.Chatra('hide');     
                    console.log("Chatra apagado y ocultado");
                } else {
                    console.log("Chatra no está disponible");
                }
                console.log("Usuario deslogueado");
            },
            addFavoritos: (book) => {
                const store = getStore();
                if (!store.favorites.some((fav) => fav.id === book.id)) {
                    store.favorites.push(book);
                    setStore({ favorites: store.favorites });
                    localStorage.setItem("favorites", JSON.stringify(store.favorites));
                    console.log("Libro agregado a favoritos:", book.volumeInfo.title);
                } else {
                    console.log("El libro ya está en tus favoritos");
                }
            },
            removeFavoritos: (book) => {
                const store = getStore();
                const favoriteIndex = store.favorites.findIndex((fav) => fav.id === book.id);

                if (favoriteIndex !== -1) {
                    store.favorites.splice(favoriteIndex, 1);
                    setStore({ favorites: store.favorites });
                    localStorage.setItem("favorites", JSON.stringify(store.favorites));
                    console.log("Libro eliminado de favoritos:", book.volumeInfo.title);
                } else {
                    console.log("El libro ya está eliminado o no está en la lista de favoritos");
                }
            },
            recuperarContraseña: async (email) => {
                try {
                    const res = await fetch(`${process.env.BACKEND_URL}/api/reset-password`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ email }),
                    });
                    if (!res.ok) {
                        const errorData = await res.json();
                        throw new Error(errorData.msg || "Error al solicitar el restablecimiento de contraseña");
                    }
                    const data = await res.json();
                    console.log("Email de restablecimiento enviado:", data.msg);
                    return { success: true };
                } catch (error) {
                    console.error("Error al solicitar el restablecimiento de contraseña:", error);
                    return { success: false, error: error.message };
                }
            },
            cambiarcontraseña: async (id, newPassword) => {
                try {
                    const res = await fetch(`${process.env.BACKEND_URL}/api/reset-password/${id}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ new_password: newPassword }),
                    });
                    if (!res.ok) {
                        const errorData = await res.json();
                        throw new Error(errorData.msg || "Error al restablecer la contraseña");
                    }
                    const data = await res.json();
                    console.log("Contraseña restablecida con éxito:", data.msg);
                    return { success: true, message: data.msg };
                } catch (error) {
                    console.error("Error al restablecer la contraseña:", error);
                    return { success: false, error: error.message };
                }
            },
            obtenerDatosUsuario: async () => {
                const token = localStorage.getItem("jwt-token");
                try {
                    const res = await fetch(`${process.env.BACKEND_URL}/api/perfil`, {
                        method: 'GET',
                        headers: {
                            'Authorization': `Bearer ${token}`,
                        }
                    });
                    if (!res.ok) {
                        const errorData = await res.json();
                        throw new Error(errorData.msg || "Error al obtener los datos del usuario");
                    }
                    const data = await res.json();
                    setStore({ user: data });
                    return data;
                } catch (error) {
                    console.error("Error al obtener los datos del usuario:", error);
                    return { error: error.message };
                }
            },
            submitRating: async (rate) => {
                const token = localStorage.getItem("jwt-token"); 
                
                if (!token) {
                    return;
                }
            
                try {
            
                    const response = await fetch(`${process.env.BACKEND_URL}/api/ratings`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`, 
                        },
                        body: JSON.stringify({ rating: rate }),
                    });
            
                    if (response.ok) {
                        const data = await response.json();
                        setStore({ ratings: data });
                        localStorage.setItem("ratings", JSON.stringify(data));
                    } else {
                        console.log("Error submitting rating, response status:", response.status);
                    }
                } catch (error) {
                    console.log("Error occurred while submitting rating:", error);
                }
            },
            
        }
    };
};

export default getState;