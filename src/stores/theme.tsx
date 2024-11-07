"use client"

import { ThemeProvider } from 'next-themes';

import { ReactNode } from 'react'

const ThemeProviderContext = ({ children }: { children: ReactNode }) => {
   return (
      <ThemeProvider>
         {children}
      </ThemeProvider>
   )
}

export default ThemeProviderContext