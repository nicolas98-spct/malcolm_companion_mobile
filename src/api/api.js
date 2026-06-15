import localImages from '../utils/localImages';

export const API_BASE_URL = 'https://mock.apidog.com/m1/1262810-1260527-default';

export const charactersFallback = [
  { id: 'malcolm', name: 'Malcolm', role: 'Familia', description: 'Genio ansioso atrapado entre la escuela, su familia y el caos cotidiano.', imageKey: 'malcolm', moments: ['Graduación', 'Clase avanzada'], relations: ['Lois', 'Reese', 'Dewey'] },
  { id: 'reese', name: 'Reese', role: 'Familia', description: 'Brutal, impulsivo y secretamente brillante cuando se trata de cocinar.', imageKey: 'reese', moments: ['Batalla de cocina', 'Bromas extremas'], relations: ['Malcolm', 'Dewey'] },
  { id: 'dewey', name: 'Dewey', role: 'Familia', description: 'El menor sensible, extraño y musical con una mirada única del mundo.', imageKey: 'dewey', moments: ['Home Alone', 'Momentos meme'], relations: ['Malcolm', 'Reese'] },
  { id: 'francis', name: 'Francis', role: 'Otros', description: 'Hermano mayor rebelde con una vida lejos de casa.', imageKey: 'francis', moments: ['Academia militar'], relations: ['Lois'] },
  { id: 'lois', name: 'Lois', role: 'Familia', description: 'Madre implacable y corazón táctico de la familia Wilkerson.', imageKey: 'lois', moments: ['Discursos', 'Disciplina total'], relations: ['Hal', 'Malcolm'] },
  { id: 'hal', name: 'Hal', role: 'Familia', description: 'Padre dramático, amoroso y peligrosamente entusiasta.', imageKey: 'hal', moments: ['Coches', 'Bailes'], relations: ['Lois'] },
  { id: 'stevie', name: 'Stevie', role: 'Escuela', description: 'Mejor amigo de Malcolm, seco, brillante y competitivo.', imageKey: 'stevie', moments: ['Olimpiadas académicas'], relations: ['Malcolm'] },
  { id: 'herkabe', name: 'Herkabe', role: 'Profesores', description: 'Profesor competitivo que convierte cada clase en una batalla mental.', imageKey: 'herkabe', moments: ['Duelo académico'], relations: ['Malcolm'] },
];

const episodesFallback = [
  { id: 'graduacion', title: 'La Graduación', season: 7, rating: '9.5', description: 'Malcolm enfrenta el futuro mientras la familia convierte un hito en caos emocional.', imageKey: 'epGraduacion' },
  { id: 'halloween', title: 'Halloween', season: 2, rating: '8.8', description: 'La noche perfecta para sustos, travesuras y decisiones absurdas.', imageKey: 'epHalloween' },
  { id: 'home-alone', title: 'Home Alone 4', season: 4, rating: '8.7', description: 'Dewey queda en el centro de una casa demasiado tranquila para ser segura.', imageKey: 'epHomeAlone' },
  { id: 'zoo', title: 'Zoo familiar', season: 4, rating: '8.4', description: 'Una salida familiar que confirma que ninguna jaula contiene el desastre.', imageKey: 'epZoo' },
  { id: 'flechazos', title: 'Flechazos', season: 3, rating: '8.2', description: 'Romance, vergüenza y una dosis exacta de sabotaje adolescente.', imageKey: 'epFlechazos' },
];

export const clipsFallback = [
  { id: 'math', title: 'Malcolm vs matemáticas', description: 'El genio en modo problema imposible.', duration: '1:18', imageKey: 'clipMalcolmMath' },
  { id: 'hal-cars', title: 'Hal y los coches', description: 'Pasión descontrolada con motor incluido.', duration: '0:54', imageKey: 'clipHalCoches' },
  { id: 'reese-cocina', title: 'Reese cocina', description: 'La cocina como zona de guerra gourmet.', duration: '1:42', imageKey: 'clipReeseCocina' },
];

const userFallback = { name: 'Juan Armando', username: 'unir', progress: 30, avatarKey: 'avatarJuan' };

function withImages(items, fallbackItems = []) {
  return items.map((item, index) => {
    const fallback = fallbackItems[index % Math.max(fallbackItems.length, 1)] || {};
    const imageKey = item.imageKey || fallback.imageKey;
    return { ...fallback, ...item, imageKey, image: localImages[imageKey] ?? item.image ?? localImages.logo };
  });
}

async function request(path, fallback) {
  const response = await fetch(`${API_BASE_URL}${path}`);
  if (!response.ok) throw new Error('No se pudo cargar la información.');
  const data = await response.json();
  return Array.isArray(fallback) ? (Array.isArray(data) && data.length ? data : fallback) : { ...fallback, ...(data || {}) };
}

export async function getCharacters() { return withImages(await request('/personajes', charactersFallback).catch(() => charactersFallback), charactersFallback); }
export async function getCharacter(id) { return (await getCharacters()).find((item) => String(item.id) === String(id)) ?? withImages(charactersFallback, charactersFallback)[0]; }
export async function getEpisodes() { return withImages(await request('/episodios', episodesFallback).catch(() => episodesFallback), episodesFallback); }
export async function getEpisode(id) { return (await getEpisodes()).find((item) => String(item.id) === String(id)) ?? withImages(episodesFallback, episodesFallback)[0]; }
export async function getClips() { return withImages(await request('/clips', clipsFallback).catch(() => clipsFallback), clipsFallback); }
export async function getUser() { const user = await request('/usuario', userFallback).catch(() => userFallback); return { ...userFallback, ...user, avatar: localImages[user.avatarKey] ?? localImages.avatarJuan }; }
