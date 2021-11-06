import React, { useState } from 'react'
import Link from 'next/link'

const Header = ({ activeMenu }) => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <header className='text-sm shadow-md bg-accents_9 sticky top-0 z-50'>
      <div className='px-6'>
        <div className='py-1 md:py-2'>
          <div className='flex justify-between items-center mb-2 md:mb-0'>
            <div>
              <Link href='/'>
                <a>
                  <img className='mr-12' src='/images/logo.png' alt='' width='125' height='50' />
                </a>
              </Link>
            </div>
            <div>
              <button className='border-none text-2xl' onClick={() => setShowMenu(!showMenu)}>
                <i className='flaticon-menu'></i>
              </button>
              <div
                className={
                  showMenu
                    ? 'fixed top-0 right-0/4 bg-black w-80 md:w-96 h-screen z-50 transition-all duration-75'
                    : 'fixed top-0 -right-full transition-all duration-75'
                }
              >
                <div className='w-full'>
                  <div className='px-8 py-6'>
                    <div className='flex items-center justify-end'>
                      <label
                        htmlFor='menu-toggle'
                        className='cursor-pointer transition-all'
                        onClick={() => setShowMenu(false)}
                      >
                        <svg className='fill-current' width='30' height='30' viewBox='0 0 20 20'>
                          <title>cancel-menu</title>
                          <path d='M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z'></path>
                        </svg>
                      </label>
                    </div>
                    <nav className='text-center'>
                      <ul className='py-6 text-base md:text-lg lg:text-xl'>
                        <li
                          className={
                            activeMenu === 'home'
                              ? 'pb-4 last:pb-0 hover:text-accents_4 relative menu-arr'
                              : 'pb-4 last:pb-0 hover:text-accents_4 relative'
                          }
                        >
                          <Link href='/'>
                            <a>Home</a>
                          </Link>
                        </li>
                        <li
                          className={
                            activeMenu === 'series'
                              ? 'pb-4 last:pb-0 hover:text-accents_4 relative menu-arr'
                              : 'pb-4 last:pb-0 hover:text-accents_4 relative'
                          }
                        >
                          <Link href='/series'>
                            <a>Series</a>
                          </Link>
                        </li>
                        <li
                          className={
                            activeMenu === 'hollywood'
                              ? 'pb-4 last:pb-0 hover:text-accents_4 relative menu-arr'
                              : 'pb-4 last:pb-0 hover:text-accents_4 relative'
                          }
                        >
                          <Link href='/hollywood'>
                            <a>Hollywood</a>
                          </Link>
                        </li>

                        <li
                          className={
                            activeMenu === 'bollywood'
                              ? 'pb-4 last:pb-0 hover:text-accents_4 relative menu-arr'
                              : 'pb-4 last:pb-0 hover:text-accents_4 relative'
                          }
                        >
                          <Link href='/bollywood'>
                            <a>Bollywood</a>
                          </Link>
                        </li>
                        <li
                          className={
                            activeMenu === 'animation'
                              ? 'pb-4 last:pb-0 hover:text-accents_4 relative menu-arr'
                              : 'pb-4 last:pb-0 hover:text-accents_4 relative'
                          }
                        >
                          <Link href='/animation'>
                            <a>Animation</a>
                          </Link>
                        </li>
                        <li
                          className={
                            activeMenu === 'tv-show'
                              ? 'pb-4 last:pb-0 hover:text-accents_4 relative menu-arr'
                              : 'pb-4 last:pb-0 hover:text-accents_4 relative'
                          }
                        >
                          <Link href='/tv-show'>
                            <a>TV Show</a>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className={showMenu ? 'body-overlay' : 'hidden'}></span>
    </header>
  )
}

export default Header
