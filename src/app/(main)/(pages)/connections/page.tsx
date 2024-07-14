import React from 'react'
import { CONNECTIONS } from '@/lib/constant'
import ConnectionCard from './_components/connection-card'

type Props = {
    searchParams?: { [key: string]: string | undefined } 
}

const Connections = (props: Props) => {
  return (
    <div className='relative flex flex-col gap-4'>
        <h1 className='
            text-4xl sticky top-0 z-[10] p-6 flex items-center 
            bg-background/50 backdrop-blur-lg border-b'
        >
            Connections
        </h1>
        <div className='relative flex flex-col gap-4'>
            <section className='flex flex-col gap-4 p-6 text-muted-foreground'>
                Connect all your apps directly from here. You may need to connect these apps regularly to keep your data up to date.

                {CONNECTIONS.map((connection) => (
                    <ConnectionCard
                        key={connection.title}
                        icon={connection.image}
                        title={connection.title}
                        description={connection.description}
                        type={connection.title}
                    >
                        {connection.title}
                    </ConnectionCard>
                ))}
            </section>
        </div>
    </div>
  )
}

export default Connections