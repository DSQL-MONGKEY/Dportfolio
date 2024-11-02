import { useState } from "react"
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs"
import { BiMenuAltLeft } from "react-icons/bi"
import { IoMdClose } from "react-icons/io"
import { AnimatePresence, motion } from "framer-motion"
import { cn } from "../lib/utils"

import { navLinks } from "@constants/constants"
import { NavProps } from "src/types/Nav"
import { useScrollTop } from "../hooks/use-scroll-top"

const Navbar = ({ darkTheme, setDarkTheme }: NavProps) => {
   const [isOpen, setIsOpen] = useState(false)
   const scrolled = useScrollTop()
   const handleLinkClicked = () => setIsOpen(false)
   console.log(darkTheme)

   const handleTheme  = () => {
      setDarkTheme(!darkTheme)
      window.localStorage.setItem("theme", !darkTheme ? 'dark' : 'light')
   }

   return (
      <>
         <nav className={cn("sticky z-50 top-0 p-3 w-full bg-white dark:bg-[#252A34] text-center", scrolled && "boder-b shadow transition duration-300")}>

            {/* Name */}
            <div className="flex justify-between items-center">
               <p className="lg:flex hidden font-poppins font-bold text-md p-2 text-[#373f4f] dark:text-[#e1e2f4] grow">DIMAS PRASETYO&nbsp;
                  <span className="dark:text-white hidden lg:inline">
                     |
                  </span> &nbsp;
                  <span className="text-[#FF2E63] hidden lg:inline">Overview</span>
               </p>

               {/* List Navbar */}
               <ul className="lg:flex hidden justify-end flex-grow justify- items-center gap-4 mr-5 font-poppins text-slate-900 dark:text-[#EAEAEA] font-bold tracking-wider">
                  {navLinks.map(nav => (
                     <li key={nav.title} className="p-1">
                        <a href={`#${nav.id}`} className="flex gap-2">
                           <span className="md:text-2xl">
                              {nav.icon}
                           </span> 
                           {nav.title}
                        </a>
                     </li>
                  ))}
               </ul>
               
               <div className="flex lg:hidden justify-end flex-col">
                  <button onClick={() => setIsOpen(!isOpen)} className="text-4xl dark:text-white">
                     {isOpen ? <IoMdClose/> : <BiMenuAltLeft/>}
                  </button>
                  
                  <AnimatePresence>
                     {isOpen && (
                     <motion.div
                        initial={{  x: -900 }}
                        animate={{  x: 0 }}
                        transition={{
                           duration: 1,
                           delay: 0.3,
                           ease: [0, 0.71, 0.2, 1.01],
                        }}
                        exit={{ x: -900 }}
                        className={`flex justify-center absolute top-14 left-0 bg-white dark:bg-[#252A34] h-screen w-full`}>
                        <ul className={`flex flex-col  gap-4 font-poppins text-slate-900 dark:text-[#EAEAEA] font-bold tracking-wider`}>
                           {navLinks.map(nav => (
                              <li key={nav.title} className="flex justify-start p-1" onClick={handleLinkClicked}>
                                 <a href={`#${nav.id}`} className="flex gap-3 items-center justify-center">
                                    <span>
                                       {nav.icon}
                                    </span> 
                                    {nav.title}
                                 </a>
                              </li>
                           ))}
                        </ul>
                     </motion.div>
                     )}
                  </AnimatePresence>
               </div>

               {/* Theme Toggle */}
               <div className="flex items-center box-border border-2 border-zinc-900 dark:border-white dark:text-white rounded pr-1 pb-1 active:scale-95">
                  <button onClick={handleTheme} className="box-border border-2 border-zinc-900 dark:border-white rounded p-1">
                     {darkTheme ? 
                     <BsFillSunFill className="text-[20px] border-none"/> : 
                     <BsFillMoonStarsFill className="text-[20px] border-none"/> }
                  </button>
               </div>

               
            </div>
         </nav>
      </>
   )
}

export default Navbar