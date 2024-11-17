import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import React from 'react'

interface ServicesCardProps {
   id: string,
   title: string,
   description: string
}

const ServicesCard = ({ id, title, description }: ServicesCardProps) => {
   return (
      <Card key={id}>
         <CardContent className="flex justify-center mt-5">
            {id == '72d7892ede' && <></>}
            {id == 'cd5fc36877' && <></>}
            {id == 'a9292e0942' && <></>}
            {id == '32e5582f4d' && <></>}
         </CardContent>
         <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
         </CardHeader>
      </Card>
   )
}

export default ServicesCard