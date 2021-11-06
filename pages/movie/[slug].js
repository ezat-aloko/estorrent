import { format } from 'date-format-parse'
import Image from 'next/image'
import Layout from '../../components/layout/Layout'

import { getAllMovies } from '../../lib/api'

export default function Movie({ movie }) {
  const releasedYear = format(movie.released_at, 'YYYY')
  return (
    <Layout>
      <div
        className='pt-24 pb-16'
        style={{
          background: 'rgb(0,0,10)',
          background: `linear-gradient(55deg, rgba(0,0,9,0.9444152661064426) 27%, rgba(0,0,9,0.4318102240896359) 100%, rgba(0,0,10,0.2637429971988795) 100%), url(${movie.image.url})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left 20%',
        }}
      >
        <main>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8 order-2 order-lg-1 order-md-2 border-md-2'>
                <div>
                  <div className=''>
                    <div className='flex flex-col items-start mb-6'>
                      <h1 className='text-xl md:text-2xl lg:text-3xl'>{movie.name}</h1>
                    </div>
                    <div className='flex items-center mb-6'>
                      <div className='mr-8 last:mr-0'>{releasedYear}</div>
                      <div className='mr-8 last:mr-0'>{movie.duration}</div>
                      <div className='flex mr-8 last:mr-0'>
                        {movie.movie_categories.map((category, index) => (
                          <div id={index}>
                            {`${category.category}${
                              index < movie.movie_categories.length - 1 ? ' /' : ''
                            }`}
                            &nbsp;
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className='mb-8'>
                      <p className='text-justify'>{movie.about_movie}</p>
                    </div>
                    <div className='py-4'>
                      <table className=''>
                        <tr className='border-none'>
                          <td className='py-1'>
                            <img src='/svg/google.svg' alt='' width='20' />
                          </td>
                          <td className='py-1'>
                            <span className='ml-4'>{movie.google_user_rating}</span>
                          </td>
                        </tr>
                        <tr className='border-none'>
                          <td className='py-1'>
                            <img src='/svg/facebook.svg' alt='' width='20' />
                          </td>
                          <td className='py-1'>
                            <span className='ml-4'>{movie.facebook_rating}</span>
                          </td>
                        </tr>
                        <tr className='border-none'>
                          <td className='py-1'>
                            <img src='/svg/imdb.svg' alt='' width='40' />
                          </td>
                          <td className='py-1'>
                            <span className='ml-4'>{movie.imdb_rating}</span>
                          </td>
                        </tr>
                      </table>
                    </div>
                    <div className='flex items-center mb-16'>
                      <span>Available in:</span>&nbsp;
                      <div>
                        {movie.movie_files.map((file) => (
                          <a
                            className='border border-accents_4 text-white px-2 py-1 mx-0.5 text-sm rounded-md cursor-pointer hover:text-color_primary'
                            href={file.url}
                            download='name'
                            id={file.id}
                          >
                            {file.alternativeText}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 order-1 order-lg-2 order-md-1'>
                <figure className='flex justify-center mb-8'>
                  <img
                    className='border-4 border-white shadow-custom'
                    src={movie.image.url}
                    alt={movie.name}
                    width='230'
                    height='345'
                  />
                </figure>
              </div>
            </div>
            <div className='row'>
              <div className='col-12'>
                <div className=''>
                  <h3>Tech Spec</h3>
                  <div>
                    <table className='w-full'>
                      <tr>
                        <th className='text-left'>Size</th>
                        <th className='text-left'>Language</th>
                        <th className='text-left'>Subtitle</th>
                        <th className='text-left'>Duration</th>
                      </tr>
                      <tr>
                        <td>{movie.size}</td>
                        <td>{movie.movie_language}</td>
                        <td>{movie.subtitle_language}</td>
                        <td>{movie.duration}</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  )
}
export const getStaticPaths = async () => {
  const movies = await getAllMovies()
  const paths = movies.map((movie) => ({
    params: { slug: movie.slug },
  }))
  return {
    paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }) {
  const movies = await getAllMovies()
  return {
    props: {
      movie: movies.find((movie) => movie.slug === params.slug) || {},
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  }
}
