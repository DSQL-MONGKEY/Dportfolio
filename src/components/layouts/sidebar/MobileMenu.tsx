import React from 'react'
import { motion } from 'framer-motion';
import Menu from './Menu';
import { navLinks } from '@/common/constants/constants';
import Breakline from '@/components/elements/Breakline';
import AudioPlayer from '../audio-player/AudioPlayer';

interface MobileMenuProps {
   isOpen: boolean
}

const MobileMenu = ({ isOpen }: MobileMenuProps) => {
   return (
      <motion.div
         animate={{ opacity: 1, x:0}}
         transition={{ duration: 0.3 }}
         className={`${isOpen ? 'block' : 'hidden'} my-3 flex flex-col h-screen transition-all duration-300`}
      > 
         <AudioPlayer isMobile={true} />
         <Breakline className='mt-2' />
         <Menu list={navLinks} />
      </motion.div>
   )
}

export default MobileMenu