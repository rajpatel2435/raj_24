import '@/styles/globals.css'
import '@/styles/marquee.css'
import '@/styles/projectLi.css'

import type { AppProps } from 'next/app'
import Footer from './Footer'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />


}
