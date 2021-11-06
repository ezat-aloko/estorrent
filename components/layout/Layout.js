import React from 'react'
import Head from 'next/head'

import Header from '../Header'
import Footer from '../Footer'

const Layout = ({ children, title, canonical, descriptionContent, jsonLD, activeMenu }) => {
  return (
    <React.Fragment>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='UTF-8' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <link rel='canonical' href={canonical} />
        <meta name='description' content={descriptionContent} />
        <meta name='keywords' content='' />

        <meta property='og:title' content='Rahrawan Travels' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://rahrawan.af/' />
        <meta property='og:image' content='https://rahrawan.af/images/logo.png' />
        <meta property='og:site_name' content='Rahrawan Travels' />
        <meta
          property='og:description'
          content='Rahrawan Travels is a company in Afghanistan that helps people to Study, Invest and Travel abroad in the best way possible. We also help foreigners to have the best travel experience in Afghanistan.'
        />
        <meta property='og:image:secure_url' content='https://rahrawan.af/images/logo.png' />

        <meta name='twitter:card' content='summary' />
        <meta name='twitter:title' content='Rahrawan Travels' />
        <meta
          name='twitter:description'
          content='Rahrawan Travels is a company in Afghanistan that helps people to Study, Invest and Travel abroad in the best way possible. We also help foreigners to have the best travel experience in Afghanistan.'
        />
        <meta name='twitter:image' content='https://rahrawan.af/images/logo.png' />

        <link rel='icon' href='/images/abr-logo.png' sizes='16/16' type='image.png' />
        <title>{title}</title>
        <script type='application/ld+json'>{jsonLD}</script>
      </Head>
      <Header activeMenu={activeMenu} />
      {children}
      <Footer />
    </React.Fragment>
  )
}

export default Layout
