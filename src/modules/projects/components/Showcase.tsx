import { projects } from '@/common/constants/constants'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import React from 'react'

const Showcase = () => {
   return (
      <div className="grid grid-cols-3 gap-3">
         {projects.map((item, idx) => (
            <Card key={idx}>
               <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
               </CardHeader>
               <CardContent>{item.desc}</CardContent>
            </Card>
         ))}
      </div>
   )
}

export default Showcase