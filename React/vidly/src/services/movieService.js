import http from "./httpService";

const apiEndpoint = "http://localhost:3900/api/movies";

export function getMovies() {
  return http.get(apiEndpoint);
}

export function getMovie(movieId) {
  return http.get(`${apiEndpoint}/${movieId}`);
}

export function saveMovie(movieId) {}

export function deleteMovie(movieId) {
  return http.delete(`${apiEndpoint}/${movieId}`);
}
