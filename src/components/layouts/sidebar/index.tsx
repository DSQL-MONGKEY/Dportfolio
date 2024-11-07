"use client"

import { navLinks } from '@/common/constants/constants'
import React from 'react'
import Menu from './Menu'

const Sidebar = () => {
  	return (
		<div className="sticky top-0 z-10 flex flex-col transition-all duration-300 lg:py-8">
			<nav className="hidden md:block">
				<div className="hidden lg:block">
					<Menu list={navLinks} />
				</div>
			</nav>
		</div>
	)
}

export default Sidebar