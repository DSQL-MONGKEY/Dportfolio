"use client"

import React from 'react'
import { useSearchParams } from 'next/navigation'
import LeftCollapseNav from './LeftCollapseNav'

const SidebarGate = () => {
   const searchParams = useSearchParams()
   const readMode = searchParams.get('read-mode')

   if (readMode === 'true') return null

   return <LeftCollapseNav />
}

export default SidebarGate
