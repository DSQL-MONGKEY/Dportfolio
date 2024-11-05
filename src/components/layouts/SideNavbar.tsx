"use client"

import { useState } from "react"
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs"
import { BiMenuAltLeft } from "react-icons/bi"
import { IoMdClose } from "react-icons/io"
import { AnimatePresence, motion } from "framer-motion"
import { cn } from "../../common/lib/utils"

import { navLinks } from "@/common/constants/constants"
import { NavProps } from "@/common/types/Nav"
import { useScrollTop } from "../../hooks/use-scroll-top"

import Link from "next/link"

const SideNavbar = ({ darkTheme, setDarkTheme }: NavProps) => {
   const [isOpen, setIsOpen] = useState(false)
   const scrolled = useScrollTop()
   const handleLinkClicked = () => setIsOpen(false)
   console.log(darkTheme)

   const handleTheme  = () => {
      window.localStorage.setItem("theme", !darkTheme ? 'dark' : 'light')
   }

   return (
      <div>
         
      </div>
   )
}

export default SideNavbar