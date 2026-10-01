import React from 'react'
import { Thing, WithContext } from 'schema-dts'

interface StructuredDataProps<T extends Thing> {
   data: WithContext<T>
   id?: string
}

function StructuredData<T extends Thing>({ data, id = 'structured-data' }: StructuredDataProps<T>) {
   return (
      <script
         type="application/ld+json"
         id={id}
         dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
   )
}

export default StructuredData
