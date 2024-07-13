'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from '@/components/ui/tooltip'
import { Separator } from '@/components/ui/separator'
import { ModeToggle } from '@/components/global/mode-toggle'
import { menuOptions } from '@/lib/constant'
import clsx from 'clsx'
import { Database, GitBranch, LucideMousePointerClick } from 'lucide-react'

type Props = {}

const Sidebar = (props: Props) => {
    const pathName = usePathname()
    return (
        <nav className="
            dark:bg-black h-screen overflow-scroll
            flex flex-col justify-between items-center px-4 py-6 gap-10 
        ">
            <div className="flex flex-col items-center justify-center gap-8">
                <Link
                    className="flex font-bold flex-row"
                    href="/"
                >
                    zuto.
                </Link>

                <TooltipProvider>
                    {
                        menuOptions.map((option, index) => (
                            <ul key={option.name}>
                                <Tooltip delayDuration={0}>
                                    <TooltipTrigger>
                                        <li>
                                            <Link
                                                href={option.href}
                                                className={clsx(
                                                    `group h-8 w-8 flex items-center justify-center
                                                    rounded-lg scale-[1.5] p-[3px] cursor-pointer`,
                                                    {
                                                        'dark:bg-[#2F006B] bg-[#EEE0FF]': pathName === option.href,
                                                    }
                                                )}
                                            >
                                                <option.Component selected={pathName === option.href}/>
                                            </Link>
                                        </li>
                                    </TooltipTrigger>
                                    <TooltipContent
                                        side="right"
                                        className='bg-black/10 backdrop-blur-xl'
                                    >
                                        <p>{option.name}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </ul>
                        ))
                    }
                </TooltipProvider>

                <Separator/>

                <div className="flex items-center flex-col gap-9 dark:bg-[#353346]/30 py-4 px-2 rounded-full h-56 overflow-scroll border-[1px]">
                    <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
                        <LucideMousePointerClick
                        className="dark:text-white"
                        size={18}
                        />
                        <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]" />
                    </div>
                    <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
                        <GitBranch
                        className="text-muted-foreground"
                        size={18}
                        />
                        <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]"></div>
                    </div>
                    <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
                        <Database
                        className="text-muted-foreground"
                        size={18}
                        />
                        <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]"></div>
                    </div>
                    <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
                        <GitBranch
                        className="text-muted-foreground"
                        size={18}
                        />
                    </div>
                </div>
                <div className="flex items-center justify-center flex-col gap-8">
                    <ModeToggle />
                </div>
            </div>
        </nav>
    )
}

export default Sidebar