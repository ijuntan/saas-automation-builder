import { Book, Headphones, Search } from 'lucide-react'
import React from 'react'
import { Input } from '@/components/ui/input'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { UserButton } from '@clerk/nextjs'

type Props = {}

const InfoBar = (props: Props) => {
  return (
    <div className="
        flex justify-end items-center gap-6 p-4 w-full dark:bg-black
    ">
        <span className='flex items-center bg-muted px-4 rounded-full'>
            <Search/>
            <Input
                placeholder='Quick Search'
                className='border-none bg-transparent'
            />
        </span>

        <TooltipProvider>
            <Tooltip delayDuration={0}>
                <TooltipTrigger>
                    <Headphones/>
                </TooltipTrigger>

                <TooltipContent>
                    <p>Quick Support</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
            <Tooltip delayDuration={0}>
                <TooltipTrigger>
                    <Book/>
                </TooltipTrigger>

                <TooltipContent>
                    <p>Guide</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>

        <UserButton/>
    </div>
  )
}

export default InfoBar