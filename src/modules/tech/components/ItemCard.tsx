import React from 'react'


interface CardProps {
   title: string,
   id: number,
   label: string,
   icon: JSX.Element,
   level: string,
   onLearn: boolean
}



const ItemCard = ({ title, id, label, icon, level, onLearn }: CardProps) => {
   return (
      <div key={id+level} id={label} className="flex justify-center items-center flex-col gap-2 p-4 dark:border-neutral-200  rounded-lg">
         <span className="text-2xl">
            {icon}
         </span>
      </div>
   )
}

export default ItemCard