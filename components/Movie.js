import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { format } from 'date-format-parse'

const Movie = ({ movie, placeHolderURL }) => {
  const releasedYear = format(movie.released_at, 'YYYY')
  return (
    <div className='col-lg-3 col-md-4 col-5'>
      <div className='mb-12 text-center md:text-left w-full h-full'>
        <Link href='/movie/[slug]' as={`/movie/${movie.slug}`}>
          <a className='inline-block'>
            <figure className='group relative overflow-hidden block'>
              <Image
                {...placeHolderURL}
                placeholder='blur'
                className='cursor-pointer h-full w-full'
                width='192'
                height='288'
                className='rounded-2xl'
              />
              <div className='absolute top-0 left-0 right-0 bottom-0 w-full h-full opacity-0 hover:opacity-100 custom-transition bg-black-opacity-5'>
                <figcaption className='hidden w-full text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:block'>
                  <div className='mb-4'>
                    {movie.movie_categories.map((category) => (
                      <h3 id={category.id} className='text-sm md:text-base lg:text-lg mb-1'>
                        {category.category}
                      </h3>
                    ))}
                  </div>
                  <Link href='/movie/[slug]' as={`/movie/${movie.slug}`}>
                    <a className='inline-block px-3.5 py-2 bg-color_primary_dark text-white text-sm font-bold'>
                      View Details
                    </a>
                  </Link>
                </figcaption>
              </div>
            </figure>
          </a>
        </Link>
        <div className='pt-2'>
          <Link href='/movie/[slug]' as={`/movie/${movie.slug}`}>
            <a>
              <h2 className='mb-1.5 text-sm md:text-medium cursor-pointer'>{movie.name}</h2>
            </a>
          </Link>
          <div className='mb-1.5 last:mb-0'>{releasedYear}</div>
        </div>
      </div>
    </div>
  )
}
export default Movie

export async function getStaticProps() {
  const movies = await getAllMovies()
  return {
    props: {
      movies,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  }
}
