import React from 'react'

type Props = {}

const DashboarPage = (props: Props) => {
  return (
    <div className='flex flex-col gap-4 relative'>
        <h1 className='
            text-4xl sticky top-0 z-[10] p-6 flex items-center 
            bg-background/50 backdrop-blur-lg border-b
        '>
            Dashboard
        </h1>
    </div>
  )
}

export default DashboarPage