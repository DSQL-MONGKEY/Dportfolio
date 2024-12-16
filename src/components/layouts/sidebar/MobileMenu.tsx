import React from 'react'
import { motion } from 'framer-motion';
import Menu from './sidebar/Menu';
import { navLinks } from '@/common/constants/constants';

const MobileMenu = () => {
   return (
      <motion.div
         className='my-3 flex flex-col h-screen'
         initial={{ x: -100 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.3 }}
      >
         <div>
            <Menu list={navLinks} />
         </div>
      </motion.div>
   )
}

export default MobileMenu