import NProgress from 'nprogress'
import Router from 'next/router'
import Script from 'next/script'
import 'tailwindcss/tailwind.css'

import '../styles/globals.css'
import '../styles/grid.css'
import '../styles/nprogress.css'

import MovieContextProvider from '../contexts/movieContext'

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
  return (
    <MovieContextProvider>
      <Component {...pageProps} />
      <Script
        src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9893828741280282"
      crossorigin="anonymous'
        async
      />
    </MovieContextProvider>
  )
}

export default MyApp
