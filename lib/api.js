import axios from 'axios'

export async function getAllMovies() {
  const movies = await axios
    .get('https://estorrent-backend.herokuapp.com/movies')
    .then((res) => res.data)
    .catch((err) => {
      console.log(err)
    })

  return movies
}
export async function getSearchedMovie(query) {
  const { data } = await axios.get(
    `https://estorrent-backend.herokuapp.com/movies?name_contains=${query}`
  )
  return data
}
