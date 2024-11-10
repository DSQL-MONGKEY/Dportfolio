import React from 'react'
import Intro from './Intro'
import Breakline from '@/components/elements/Breakline'
import NeoButton from '@/components/ui/NeoButton'
import Services from './Services'

const Home = () => {
   return (
      <>
         <Intro />
         <Breakline />
         <Services />
         <Breakline />
         <NeoButton>
            Press
         </NeoButton>
      </>
   )
}

export default Home