"use client"

import { ThemeProvider } from 'next-themes';

import { ReactNode } from 'react'

const ThemeProviderContext = ({ children }: { children: ReactNode }) => {
   return (
      <ThemeProvider 
         attribute={'class'}
         enableSystem
         defaultTheme='light'
      >
         {children}
      </ThemeProvider>
   )
}

export default ThemeProviderContext