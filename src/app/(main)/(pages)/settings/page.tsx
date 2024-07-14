import React from 'react'
import ProfileForm from '@/components/forms/profile-form'
import ProfilePicture from './_components/profile-picture'
import { db } from '@/lib/db'
import { currentUser } from '@clerk/nextjs/server'

type Props = {}

const Settings = async(props: Props) => {
    const authUser = await currentUser()
    if(!authUser) return null

    const user = await db.user.findUnique({
        where: {
            clerkId: authUser.id
        }
    })

    const removeProfilePicture = async() => {
        'use server'
        const res = await db.user.update({
            where: {
                clerkId: authUser.id
            },
            data: {
                profileImage: ''
            }
        })

        return res
    }

    const uploadProfilePicture = async(imageUrl: string) => {
        'use server'
        
        const res = await db.user.update({
            where: {
                clerkId: authUser.id
            },
            data: {
                profileImage: imageUrl
            }
        })

        return res
    }

    const updateUserInfo = async(name: string) => {
        'use server'
        const res = await db.user.update({
            where: {
                clerkId: authUser.id
            },
            data: {
                name
            }
        })

        return res
    }
    
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
                <ProfilePicture
                    userImage = {user?.profileImage || ''}
                    onDelete = {removeProfilePicture}
                    onUpload = {uploadProfilePicture}
                />
                <ProfileForm
                    user={user}
                    onUpdate={updateUserInfo}
                />
            </div>
        </div>
    )
}

export default Settings