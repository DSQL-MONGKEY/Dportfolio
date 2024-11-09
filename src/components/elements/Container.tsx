"use client"

import React, { ReactNode } from 'react'

interface ContainerProps {
   children: ReactNode,
   className?: string,
   withMarginTop?: boolean,
   [propName: string]: ReactNode | string | undefined
}

const Container = ({ children, className = '', withMarginTop = true, ...others }: ContainerProps) => {
   return (
      <div
         className={`${withMarginTop && 'mt-6'} p-4 md:p-8 lg:pr-0 ${className}`}
         { ...others }
      >
         {children}
      </div>
   )
}

export default Container