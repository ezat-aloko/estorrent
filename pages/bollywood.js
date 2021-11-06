import { format } from 'date-format-parse'
import Link from 'next/link'
import Layout from '../components/layout/Layout'
import { getPlaiceholder } from 'plaiceholder'

import Movie from '../components/Movie'
import SearchBox from '../components/SearchBox'
import { getAllMovies } from '../lib/api'

export default function Home({ movies, images }) {
  return (
    <Layout>
      <section
        className='pt-14 pb-14'
        style={{
          background: 'rgb(0,0,10)',
          background:
            'linear-gradient(180deg, rgba(0,0,10,0.22172619047619047) 0%, rgba(0,0,9,0.2497373949579832) 3%, rgba(0,0,8,0.896796218487395) 94%), url("/images/splash-3.jpg")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left bottom',
        }}
      >
        <div className='container'>
          <div className='row justify-center mb-6'>
            <div className='col-lg-7'>
              <div className='text-center'>
                <h1 className='text-xl md:text-3xl lg:text-4xl mb-6'>Search movies...</h1>
                <div>
                  <SearchBox />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=''>
        <div className='container'>
          <div className='row justify-center'>
            <div className='col-12 order-1 order-lg-2 py-8 bg-black'>
              <div className='container'>
                <div className='row'>
                  <section className=''>
                    <div className='container'>
                      <div className='row justify-center'>
                        <div className='col-12 pb-8 bg-black'>
                          <div className='px-0 md:px-6 lg:px-12'>
                            <div className='row justify-center lg:justify-start'>
                              {movies.map((movie, index) => {
                                if (
                                  movie.movie_industry &&
                                  movie.movie_industry.movie_industry === 'Bollywood'
                                ) {
                                  return (
                                    <Movie
                                      movie={movie}
                                      placeHolderURL={images[index]}
                                      id={movie.id}
                                    />
                                  )
                                }
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const movies = await getAllMovies()
  const images = await Promise.all(
    movies.map(async (movie) => {
      const { base64, img } = await getPlaiceholder(movie.image.url)
      return {
        ...img,
        blurDataURL: base64,
        alt: movie.image.alternativeText,
      }
    })
  ).then((values) => values)

  return {
    props: {
      movies,
      images,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  }
}
