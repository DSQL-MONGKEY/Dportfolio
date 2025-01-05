import React from 'react'


interface CardProps {
   title: string,
   id: number,
   label: string,
   icon: JSX.Element,
   level: string,
}



const Card = ({ title, id, label, icon, level }: CardProps) => {
   return (
      <div className="flex justify-center items-center flex-col gap-2 p-4 border-2 border-black dark:border-neutral-200  rounded-lg">
         <span className="text-2xl">
            {icon}
         </span>
         <p className="font-poppins text-md">{title}</p>
      </div>
   )
}

export default Card