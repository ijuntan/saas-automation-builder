import React from 'react'
import Image from 'next/image'

type Props = {}

const Navbar = async (props: Props) => {
  return (
    <header className="
        fixed left-0 right-0 top-0 p-4 bg-black/40 backdrop-blur-lg z-[100]
        flex items-center justify-between 
        border-b-[1px] border-neutral-900"
    >
        <aside className='flex items-center gap-[2px]'>
            <p className='text-3xl font-bold'>Zu</p>
            <Image 
                src='/zutoLogo.png'
                width={15}
                height={15}
                alt='Ju Logo' 
                className='shadow-sm'
            />
            <p className='text-3xl font-bold'>to</p>
        </aside>
    </header>
  )
}

export default Navbar