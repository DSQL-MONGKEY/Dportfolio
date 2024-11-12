import React from 'react'
import Intro from './Intro'
import Breakline from '@/components/elements/Breakline'
import NeoButton from '@/components/ui/NeoButton'
import Services from './Services'
import { Card, CardContent } from '@/components/ui/Card'

const Home = () => {
   return (
      <>
         <Intro />
         <Breakline />
         <Services />
         <Breakline />
        
         <Card>
            <CardContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium incidunt odio corrupti facilis, molestias sed, nisi dolore perferendis sequi, est veritatis accusantium expedita repellat. Minus neque repudiandae id ut molestias.
            </CardContent>
         </Card>
      </>
   )
}

export default Home