'use client'
import React from 'react'
import UploadCareButton from './uploadcare-button'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

type Props = {
    userImage: string | null;
    onDelete?: any;
    onUpload?: any;
}

const ProfilePicture = ({ userImage, onDelete, onUpload }: Props) => {
    const router = useRouter()

    const onRemoveProfilePicture = async() => {
        const res = await onDelete()
        if(res) router.refresh()
    }

    return (
        <div className='flex flex-col'>
            <p className="text-white terxt-lg">Profile Picture</p>
            <div className="flex flex-col h-[30vh] justify-center items-center">
                {
                    userImage
                    ?
                    <>
                        <div className='relative h-full w-2/12'>
                            <Image
                                src={userImage}
                                alt='profile picture'
                                fill
                            />
                        </div>

                        <Button
                            onClick={onRemoveProfilePicture}
                            className='bg-transparent text-white/70 hover:bg-transparent hover:text-white'
                        >
                            <X/> Remove Profile Picture
                        </Button>
                    </>
                    :
                    <UploadCareButton onUpload={onUpload}/>
                }
            </div>
        </div>
    )
}

export default ProfilePicture