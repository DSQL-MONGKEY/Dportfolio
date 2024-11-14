import React from 'react'
import Intro from './Intro'
import Breakline from '@/components/elements/Breakline'
import Services from './Services'
import Articles from './Articles'

const Home = () => {
   return (
      <>
         <Intro />
         <Breakline />
         <Articles />
         <Breakline />
         <Services />
      </>
   )
}

export default Home