import React from 'react'
import { motion } from 'framer-motion';
import Menu from './Menu';
import { navLinks } from '@/common/constants/constants';
import Breakline from '@/components/elements/Breakline';

const MobileMenu = () => {
   return (
      <motion.div
         initial={{ x: -100 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.3 }}
         className='my-3 flex flex-col h-screen'
      >
            <Breakline className='mt-2' />
            <Menu list={navLinks} />
      </motion.div>
   )
}

export default MobileMenu