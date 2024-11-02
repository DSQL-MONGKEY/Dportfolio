import About from "@container/About"
import Navbar from "./components/Navbar"
import { useState } from "react"
import Hero from "@container/Hero"
import Skills from "@container/Skills"
import Educations from "@container/Educations"
import Experiences from "@container/Experiences"
import Projects from "@container/Projects"
import Footer from "@components/Footer"
import Feeds from "@container/Feeds"
import { cn } from "./lib/utils"

function App() {
  const localTheme = window.localStorage.getItem('theme')
  const savedTheme = localTheme !== 'light' ? true : false;
  const [darkTheme, setDarkTheme] = useState(savedTheme) 

  

  return (
    <section className={cn(darkTheme ? 'dark' : 'light')}>
      <div className="dark:bg-[#252A34] transition-colors duration-300 w-full h-full">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Hero/>
        <About/>
        <Skills/>
        <Educations/>
        <Experiences/>
        <Projects/>
        <Feeds/>
        <Footer/>
      </div>
    </section>
  )
}

export default App
