"use client"

import { motion } from "framer-motion";

import React, { useState } from 'react'

interface StaggeredPullUpTextProps {
	text: string
}

const StaggeredPullUpText = ({ text }: StaggeredPullUpTextProps) => {
	const [isHover, setIsHover] = useState(false)

	const letters = text.split("");

	const pullUpVariants = {
		intial:{ y: 100, opactiy: 0 },
		animate: (i: number) => ({
			y: 0,
			opacity: 1,
			transition: {
				delay: i * 0.05 // delay untuk setiap huruf nya dikali index huruf
			}
		})
	}

	return (
	<div className="flex justify-center">
		{letters.map((letter, i) => (
			<motion.h1
				key={i}
				variants={pullUpVariants}
				initial="initial"
				animate="Infinity"
				custom={i}
				className="text-center font-display text-xl font-poppins tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
			>
				{letter === "" ? <span>&nbsp;</span> : letter}
			</motion.h1>
		))}
	</div>
	)
}

export default StaggeredPullUpText