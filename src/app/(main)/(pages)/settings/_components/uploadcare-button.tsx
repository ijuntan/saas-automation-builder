'use client'
import React, { useEffect } from 'react'
import { FileUploaderRegular } from '@uploadcare/react-uploader';
import { useRouter } from 'next/navigation';
import '@uploadcare/react-uploader/core.css';

type Props = {
    onUpload?: any
}

const UploadCareButton = ({ onUpload }: Props) => {
    const router = useRouter()

    const onUploadComplete = async(e: any) => {
        const file = await onUpload(e.allEntries[0].cdnUrl)
        if(file) router.refresh()
    }

    return (
        <FileUploaderRegular 
            onChange={e => onUploadComplete(e)}
            pubkey={process.env.NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY}
            multiple={false}
        />
    )
}

export default UploadCareButton