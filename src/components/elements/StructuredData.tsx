import Script from 'next/script'
import React from 'react'
import { Thing, WithContext } from 'schema-dts'

interface StructuredDataProps<T extends Thing> {
   data: WithContext<T>
}

function StructuredData<T extends Thing>({ data }: StructuredDataProps<T>) {
   return (
      <Script
         key="structured-data"
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
         id="structured-data"
      />
   )
}

export default StructuredData