import { characters, clips, episodes, user } from './mockData';

export const API_BASE_URL = 'https://mock.apidog.com/m1/1262810-1260527-default';

async function getFallback(resource) {
  await new Promise((resolve) => setTimeout(resolve, 180));
  return resource;
}

export async function getCharacters() {
  return getFallback(characters);
}

export async function getCharacter(id) {
  return getFallback(characters.find((character) => character.id === id) || characters[0]);
}

export async function getEpisodes() {
  return getFallback(episodes);
}

export async function getEpisode(id) {
  return getFallback(episodes.find((episode) => episode.id === id) || episodes[0]);
}

export async function getClips() {
  return getFallback(clips);
}

export async function getUser() {
  return getFallback(user);
}
