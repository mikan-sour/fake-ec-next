import React, { Suspense } from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../layouts'
import SearchProvider from '../providers/search'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    
      <SearchProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SearchProvider>
    
  )
}

export default MyApp
