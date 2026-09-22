import React from 'react'
import Board from './Board'
import Header from './Header'
import Quest from './Quest'

const Tech = () => {
   return (
      <div className="space-y-10 text-text dark:text-darkText">
         <Header />
         <Board />
         <Quest />
      </div>
   )
}

export default Tech
