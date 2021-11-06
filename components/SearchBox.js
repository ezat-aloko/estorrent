import { useState } from 'react'
import { useRouter } from 'next/router'

const SearchBox = () => {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    router.push(`/search?q=${searchQuery}`)
  }
  return (
    <div className='mt-4 lg:mt-0'>
      <form onSubmit={handleSubmit} className='relative'>
        <input
          className='bg-transparent text-accents_0 pl-4 pr-10 mb-0 px-2 py-3 text-sm border-accents_6 focus:outline-none rounded-lg'
          type='text'
          name='search'
          id=''
          placeholder='Search...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          type='submit'
          className='bg-accents_9 mr-2 border-2 border-accents_9 absolute rounded-r-lg w-20 h-full -right-2 transform scale-95 top-0 flex items-center justify-center'
        >
          <svg
            className='text-accents_0'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
          >
            <path
              fill='currentColor'
              d='M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z'
            />
          </svg>
        </button>
      </form>
    </div>
  )
}
export default SearchBox
