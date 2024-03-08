import Image from 'next/image'
import { Inter } from 'next/font/google'
import Home1 from './Home1'
import ProjetcLi from './components/ProjectLi'
import Meet from './components/meet'
import Hscroll from './components/Hscroll'
import Services from './components/Services'
import TextBig from './components/TextBig'
import MethodSlider from './components/MethodSlider'
import Unique_services from './components/Unique_services'
import Footer from './Footer'
import Head from 'next/head'
import GetPosts from './components/GetPosts'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
<Head>
<meta name="google-site-verification" content="_TBssEI6mk7AV3CxgBQykOJ_eYaW5YvQOh4IUyBoXqo" />
  
</Head>
   <Home1 />
   {/* <TextBig /> */}
   {/* Avoid this part */}
   <MethodSlider/>
   <GetPosts/>
   <Meet />
   {/* <Hscroll /> */}
  <Unique_services />
{/* 
   <ProjetcLi /> */}
  
   </>
  )
}
