import { images } from '../utils/assets';

export const user = {
  name: 'Juan Armando',
  username: 'unir',
  avatar: images.profile,
  progress: 30,
  watched: 35,
  spoilers: false,
};

export const characters = [
  { id: 'malcolm', name: 'Malcolm', role: 'Genio incomprendido de la familia.', category: 'Familia', image: images.malcolm, description: 'Un chico brillante que intenta sobrevivir al caos cotidiano de su casa y escuela.' },
  { id: 'reese', name: 'Reese', role: 'Hermano mayor impulsivo.', category: 'Familia', image: images.reese, description: 'Reese convierte cada problema en una prueba física, absurda y normalmente divertida.' },
  { id: 'dewey', name: 'Dewey', role: 'Hermano menor sensible y creativo.', category: 'Familia', image: images.dewey, description: 'Observador, extraño y musical, Dewey suele entender más de lo que los demás creen.' },
  { id: 'francis', name: 'Francis', role: 'Hermano mayor rebelde.', category: 'Familia', image: images.francis, description: 'Desde la academia militar hasta Alaska, Francis vive escapando de las reglas.' },
  { id: 'lois', name: 'Lois', role: 'Madre estricta y controladora.', category: 'Familia', image: images.lois, description: 'La fuerza central de la casa: dura, directa y casi siempre tiene razón.' },
  { id: 'hal', name: 'Hal', role: 'Padre cariñoso e inmaduro.', category: 'Familia', image: images.hal, description: 'Hal mezcla ternura, ansiedad y ocurrencias que hacen más grande el caos familiar.' },
];

export const episodes = [
  { id: 'graduacion', title: 'La Graduación', season: 7, episode: 22, rating: 4.8, duration: '22 min', image: images.graduation, description: 'Malcolm enfrenta una ceremonia que resume años de presión, expectativas y familia.' },
  { id: 'piloto', title: 'Piloto', season: 1, episode: 1, rating: 4.7, duration: '23 min', image: images.family, description: 'Conocemos el hogar caótico donde Malcolm descubre que fue enviado a una clase especial.' },
  { id: 'traffic-jam', title: 'Traffic Jam', season: 2, episode: 1, rating: 4.6, duration: '22 min', image: images.school, description: 'Un atasco se convierte en escenario de pequeñas crisis familiares.' },
];

export const clips = [
  { id: 'c1', title: 'Mejores momentos', image: images.clip },
  { id: 'c2', title: 'Detrás de cámaras', image: images.school },
  { id: 'c3', title: 'Memes', image: images.family },
];
