import React from 'react'
import Intro from './Intro'
import Highlights from './Highlights'
import Articles from './Articles'
import Services from './Services'

const Home = () => {
   return (
      <div className="space-y-10 text-text dark:text-darkText">
         <Intro />
         <Highlights />
         <Articles />
         <Services />
      </div>
   )
}

export default Home
