import { createContext, useContext, useState } from 'react'

const MovieContext = createContext()
const MovieContextProvider = ({ children }) => {
  const listMovies = async () => {
    const { data } = await axios.get('http://localhost:1337/movies')
    return data
  }
  return (
    <MovieContext.Provider
      value={{
        listMovies,
      }}
    >
      {children}
    </MovieContext.Provider>
  )
}

export const useMovieContext = () => {
  return useContext(MovieContext)
}

export default MovieContextProvider
