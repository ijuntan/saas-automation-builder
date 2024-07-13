import React from 'react'
import ProfileForm from '@/components/forms/profile-form'

type Props = {}

const Settings = (props: Props) => {
  return (
    <div className='flex flex-col gap-4'>
        <h1 className='
            sticky top-0 z-[10] flex justify-between items-center
            border-b bg-background/50 backdrop-blur-lg p-6 text-4xl 
        '>
            <span>Settings</span>
        </h1>

        <div className='flex flex-col gap-10 p-6'>
            <div>
                <h2 className='text-2xl font-bold'>Account</h2>
                <p className='text-base text-white/50'>Manage your account settings</p>
            </div>

            <ProfileForm/>
        </div>
    </div>
  )
}

export default Settings