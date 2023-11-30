import Image from 'next/image'
import { Inter } from 'next/font/google'
import Home1 from './Home1'
import ProjetcLi from './components/ProjectLi'
import Meet from './components/meet'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
   <Home1 />
   <Meet />
{/* 
   <ProjetcLi /> */}

   </>
  )
}
