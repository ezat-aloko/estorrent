import Movie from '../components/Movie'
import { getSearchedMovie } from '../lib/api'
import Layout from '../components/layout/Layout'

export default function Search({ movies, query }) {
  return (
    <Layout>
      <div className='container'>
        <section className='py-28'>
          <div className='border-b border-accents_4 pb-7'>
            <h1 className='text-lg md:text-xl lg:text-2xl'>{`You Searched for "${query}"`}</h1>
          </div>
          <div className='row py-6 mb-52'>
            {movies.length === 0 ? (
              <div className='col-sm-12'>
                <span className='text-base md:text-lg lg:text-xl'>No search result found</span>
              </div>
            ) : (
              movies.map((movie) => <Movie movie={movie} key={movie.id} />)
            )}
          </div>
        </section>
      </div>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const movies = await getSearchedMovie(context.query.q)
  return {
    props: {
      movies,
      query: context.query.q,
    },
  }
}
