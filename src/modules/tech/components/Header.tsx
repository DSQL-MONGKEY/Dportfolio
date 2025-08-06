import { GiTechnoHeart } from "react-icons/gi"

const Header = () => {
   return (
      <div className="mb-5">
         <div className="flex gap-1 space-y-2">
            <GiTechnoHeart className="h-10 w-10"/>
            <h2 className="text-3xl font-lexend text-neutral-900 dark:text-slate-200">Techys</h2>
         </div>
         <p className="font-outfit text-md text-neutral-700 dark:text-slate-300">
            Here&apos;s a trail of technologies and devices that I&apos;ve conquered - every single one of them is a silent witness of learning, challenges and achievements. This is not just a list, but a story of how I grew and adapted.
         </p>
         
      </div>
   )
}

export default Header