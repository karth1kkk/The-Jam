import Head from 'next/head'
import { Navbar } from '@/components'
import { Footer } from '@/components'
import '@/styles/globals.css'
import { StateContext } from '@/context/StateContext'
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }) {
  return (
    <StateContext>
    <div className='layout'>
    <Head>
      <title>The Jams</title>
    </Head>
    <header>
      <Navbar/>
    </header>
    <Toaster/>
  <Component {...pageProps} />
    <footer>
      <Footer/>
    </footer>
    </div>
    </StateContext>
  )
}
