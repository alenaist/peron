'use client';

// This file contains just the event data for reference
// Each event will have its own component file

export const biographyEvents = [
  {
    id: 'birth',
    year: '1895',
    day: '8 de octubre',
    title: 'Nacimiento',
    description: 'Juan Domingo Perón nace el 8 de octubre de 1895 en Lobos, provincia de Buenos Aires, Argentina.',
    details: 'Hijo de Mario Tomás Perón y Juana Sosa Toledo. Su familia tenía ascendencia española, italiana y británica. Pasó su infancia entre Lobos y la Patagonia argentina.',
    category: 'personal',
    alignment: 'left',
    imageUrl: 'https://commons.wikimedia.org/wiki/File:Juan_Domingo_Per%C3%B3n.jpg#/media/File:Juan_Domingo_Per%C3%B3n.jpg',
    source: 'https://en.wikipedia.org/wiki/Juan_Per%C3%B3n'
  },
  {
    id: 'military',
    year: '1911',
    title: 'Ingreso al Ejército',
    description: 'Ingresa al Colegio Militar de la Nación, iniciando su carrera militar.',
    details: 'Se graduó como subteniente de infantería en 1913. Su carrera militar fue destacada, llegando a ser profesor en la Escuela Superior de Guerra y escribiendo varios manuales militares.',
    category: 'military',
    alignment: 'right',
    imageUrl: 'https://commons.wikimedia.org/wiki/File:Juan_Domingo_Per%C3%B3n.jpg#/media/File:Juan_Domingo_Per%C3%B3n.jpg',
    source: 'https://en.wikipedia.org/wiki/Juan_Per%C3%B3n'
  },
  {
    id: 'revolution',
    year: '1943',
    day: '4 de junio',
    title: 'Revolución de Junio',
    description: 'Participa en el golpe militar del 4 de junio. Es nombrado Secretario de Trabajo y Previsión.',
    details: 'Como Secretario de Trabajo, implementó numerosas reformas laborales que beneficiaron a los trabajadores, ganándose su apoyo. Estableció tribunales de trabajo, vacaciones pagas, indemnizaciones por despido y mejoras salariales.',
    category: 'political',
    alignment: 'left',
    imageUrl: 'https://commons.wikimedia.org/wiki/File:Edelmiro_Farrell_and_Juan_Domingo_Per%C3%B3n.jpg#/media/File:Edelmiro_Farrell_and_Juan_Domingo_Per%C3%B3n.jpg',
    source: 'https://en.wikipedia.org/wiki/1943_Argentine_coup_d%27%C3%A9tat'
  },
  {
    id: 'eva-meeting',
    year: '1944',
    day: '22 de enero',
    title: 'Conoce a Eva Duarte',
    description: 'Conoce a Eva Duarte (Evita) durante un festival benéfico en el Luna Park.',
    details: 'El encuentro ocurrió durante un evento para recaudar fondos para las víctimas del terremoto de San Juan. Eva era entonces una actriz de radionovelas. Su relación transformaría la política argentina.',
    category: 'personal',
    alignment: 'right',
    imageUrl: 'https://www.thoughtco.com/thmb/XLEIr9ju1EvxSMTTdBvyTLMFZHk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-517357222-0e06f7946c8e465997e97c525b30dd1a.jpg',
    source: 'https://en.wikipedia.org/wiki/Juan_Per%C3%B3n#Rise_to_power'
  },
  {
    id: 'loyalty-day',
    year: '1945',
    day: '17 de octubre',
    title: '17 de Octubre - Día de la Lealtad',
    description: 'Movilización masiva de trabajadores exigiendo la liberación de Perón, detenido días antes.',
    details: 'Tras ser detenido por sus colegas militares, una masiva movilización popular exigió su liberación. Este evento marcó el nacimiento del movimiento peronista y es considerado el "Día de la Lealtad Peronista".',
    category: 'political',
    alignment: 'left',
    imageUrl: 'https://commons.wikimedia.org/wiki/File:17_de_octubre_de_1945.jpg#/media/File:17_de_octubre_de_1945.jpg',
    source: 'https://en.wikipedia.org/wiki/Loyalty_Day_(Argentina)'
  },
  {
    id: 'marriage',
    year: '1945',
    day: '22 de octubre',
    title: 'Matrimonio con Eva',
    description: 'Se casa con Eva Duarte el 22 de octubre de 1945.',
    details: 'La boda se celebró en Junín, provincia de Buenos Aires. Eva se convertiría en una figura política fundamental, trabajando por los derechos de los trabajadores y las mujeres.',
    category: 'personal',
    alignment: 'right',
    imageUrl: 'https://commons.wikimedia.org/wiki/File:Evita_y_Juan_Domingo_Per%C3%B3n.jpg#/media/File:Evita_y_Juan_Domingo_Per%C3%B3n.jpg',
    source: 'https://en.wikipedia.org/wiki/Eva_Per%C3%B3n'
  },
  {
    id: 'first-presidency',
    year: '1946',
    day: '4 de junio',
    title: 'Primera Presidencia',
    description: 'Gana las elecciones presidenciales y asume su primer mandato (1946-1952).',
    details: 'Durante su primera presidencia, implementó el primer Plan Quinquenal, nacionalizó los ferrocarriles y otros servicios públicos, y promovió la industrialización del país. También estableció una política de justicia social, soberanía política e independencia económica.',
    category: 'political',
    alignment: 'left',
    imageUrl: 'https://www.thoughtco.com/thmb/Wk38ArPp8RBPR9n6K28M-GgM6FA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-515447052-dcd735e5f5a84a9c9a2c10ff346c2dbc.jpg',
    source: 'https://en.wikipedia.org/wiki/1946_Argentine_general_election'
  },
  {
    id: 'womens-vote',
    year: '1947',
    day: '23 de septiembre',
    title: 'Voto Femenino',
    description: 'Se sanciona la Ley 13.010 que establece el sufragio femenino en Argentina.',
    details: 'Impulsada por Eva Perón, esta ley otorgó a las mujeres argentinas el derecho al voto y a ser elegidas para cargos públicos. Fue un hito en la historia de los derechos civiles en Argentina.',
    category: 'political',
    alignment: 'right',
    imageUrl: 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/UDEFC2SXUZBLXC6WGXCUUEVYCY.jpg',
    source: 'https://en.wikipedia.org/wiki/Eva_Per%C3%B3n#Political_role'
  },
  {
    id: 'eva-resignation',
    year: '1951',
    day: '22 de agosto',
    title: 'Renuncia de Eva',
    description: 'Eva Perón renuncia a su candidatura a la vicepresidencia por presiones y su enfermedad.',
    details: 'A pesar del apoyo popular, Eva renunció a su candidatura debido a su deteriorada salud y a la oposición de sectores militares. El "Cabildo Abierto del Justicialismo" del 22 de agosto fue el escenario de su renuncia.',
    category: 'personal',
    alignment: 'left',
    imageUrl: 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/UDEFC2SXUZBLXC6WGXCUUEVYCY.jpg',
    source: 'https://en.wikipedia.org/wiki/Eva_Per%C3%B3n#Political_role'
  },
  {
    id: 'eva-death',
    year: '1952',
    day: '26 de julio',
    title: 'Fallece Eva Perón',
    description: 'Eva Perón fallece el 26 de julio de 1952 a los 33 años debido a un cáncer.',
    details: 'Su muerte causó un duelo nacional sin precedentes. Su cuerpo fue embalsamado y expuesto en la sede de la CGT. Recibió el título de "Jefa Espiritual de la Nación" y "Mártir del Trabajo".',
    category: 'personal',
    alignment: 'right',
    imageUrl: 'https://www.history.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc4NjAzNTI5MDg3MzM5/eva-peron-funeral.jpg',
    source: 'https://en.wikipedia.org/wiki/Eva_Per%C3%B3n#Death'
  },
  {
    id: 'second-presidency',
    year: '1952',
    day: '4 de junio',
    title: 'Segunda Presidencia',
    description: 'Perón es reelegido para un segundo mandato presidencial (1952-1955).',
    details: 'Su segundo mandato estuvo marcado por la muerte de Eva, crecientes tensiones políticas con la Iglesia Católica y sectores militares, y dificultades económicas. Implementó el Segundo Plan Quinquenal.',
    category: 'political',
    alignment: 'left',
    imageUrl: 'https://static01.nyt.com/images/2016/08/28/books/review/28KAISER/28KAISER-jumbo.jpg',
    source: 'https://en.wikipedia.org/wiki/Presidency_of_Juan_Per%C3%B3n_(1952%E2%80%931955)'
  },
  {
    id: 'coup',
    year: '1955',
    day: '16 de septiembre',
    title: 'Golpe de Estado',
    description: 'La "Revolución Libertadora" derroca a Perón, quien debe exiliarse.',
    details: 'Un golpe militar liderado por Eduardo Lonardi derrocó a Perón. Tras refugiarse en la embajada de Paraguay, Perón inició un largo exilio que duraría 18 años, pasando por Paraguay, Panamá, Venezuela, República Dominicana y finalmente España.',
    category: 'political',
    alignment: 'right',
    imageUrl: 'https://commons.wikimedia.org/wiki/File:Bombardeo_de_la_Plaza_de_Mayo.jpg#/media/File:Bombardeo_de_la_Plaza_de_Mayo.jpg',
    source: 'https://en.wikipedia.org/wiki/Revoluci%C3%B3n_Libertadora'
  },
  {
    id: 'isabel-marriage',
    year: '1961',
    day: '15 de noviembre',
    title: 'Matrimonio con Isabel',
    description: 'Se casa con María Estela Martínez (Isabel) en Madrid.',
    details: 'Isabel, una bailarina argentina, se convertiría en su tercera esposa y posteriormente en la primera mujer presidenta de Argentina tras la muerte de Perón en 1974.',
    category: 'personal',
    alignment: 'left',
    imageUrl: 'https://commons.wikimedia.org/wiki/File:Peron-Isabel_1.jpg#/media/File:Peron-Isabel_1.jpg',
    source: 'https://en.wikipedia.org/wiki/Isabel_Mart%C3%ADnez_de_Per%C3%B3n'
  },
  {
    id: 'return',
    year: '1973',
    day: '20 de junio',
    title: 'Regreso a Argentina',
    description: 'Regresa a Argentina tras 18 años de exilio.',
    details: 'Su regreso el 20 de junio de 1973 fue recibido por una multitud en Ezeiza, aunque el evento estuvo marcado por enfrentamientos violentos entre facciones peronistas. Este día es conocido como la "Masacre de Ezeiza".',
    category: 'political',
    alignment: 'right',
    imageUrl: 'https://www.aljazeera.com/wp-content/uploads/2023/06/2023-06-19T151913Z_1298289241_RC24B0AWVR0M_RTRMADP_3_ARGENTINA-PERON-ANNIVERSARY.jpg',
    source: 'https://en.wikipedia.org/wiki/Ezeiza_massacre'
  },
  {
    id: 'third-presidency',
    year: '1973',
    day: '12 de octubre',
    title: 'Tercera Presidencia',
    description: 'Es elegido presidente por tercera vez con el 62% de los votos.',
    details: 'Su tercer mandato estuvo marcado por conflictos internos en el movimiento peronista, problemas económicos y su deteriorada salud. Isabel Perón, su esposa y vicepresidenta, asumía funciones cuando su salud se lo impedía.',
    category: 'political',
    alignment: 'left',
    imageUrl: 'https://www.thoughtco.com/thmb/L4rBnYWjd83QeY3Yp6Zt6BoNFRA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/124864_c64-56a97d5c3df78cf772a85cfe.jpg',
    source: 'https://en.wikipedia.org/wiki/Juan_Per%C3%B3n#Return_to_Argentina_and_third_term_(1973%E2%80%931974)'
  },
  {
    id: 'death',
    year: '1974',
    day: '1 de julio',
    title: 'Fallecimiento',
    description: 'Fallece el 1 de julio de 1974, durante su tercer mandato presidencial.',
    details: 'Su muerte a los 78 años dejó un vacío político que sería ocupado por su esposa Isabel, quien asumiría como presidenta hasta ser derrocada por un golpe militar en 1976. Su legado político continúa siendo central en la política argentina hasta la actualidad.',
    category: 'personal',
    alignment: 'right',
    imageUrl: 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/V3SVQTZRZJHQFBDQHBRMXVTKQQ.jpg',
    source: 'https://en.wikipedia.org/wiki/Juan_Per%C3%B3n#Death'
  }
];

export default biographyEvents; 