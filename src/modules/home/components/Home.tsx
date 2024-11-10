import React from 'react'
import Intro from './Intro'
import Breakline from '@/components/elements/Breakline'
import NeoButton from '@/components/ui/NeoButton'

const Home = () => {
   return (
      <>
         <Intro />
         <Breakline />
         <NeoButton>
            Press
         </NeoButton>
      </>
   )
}

export default Home