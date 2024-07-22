'use client'
import React, { useEffect } from 'react'
import { UserButton } from '@clerk/nextjs'
import { Book, Headphones, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { useBilling } from '@/providers/billing-provider'
import { onPaymentDetails } from '@/app/(main)/(pages)/billing/_actions/payment-connections'

type Props = {}

const InfoBar = (props: Props) => {
    const { credits, tier, setCredits, setTier } = useBilling()

    useEffect(() => {
        const onGetPayment = async() => {
            const response = await onPaymentDetails()
            if(response) {
                setTier(response.tier!)
                setCredits(response.credits!)
            }
        }

        onGetPayment()
    }, [])

    return (
        <div className="
            flex justify-end items-center gap-6 p-4 w-full dark:bg-black
        ">
            <span className="flex items-center gap-2 font-bold">
                <p className="text-sm font-light text-gray-300">Credits</p>
                {tier == 'Premium' ? 
                <span>Unlimited</span>
                : 
                <span>
                    {credits}/{tier == 'Free' ? '10' : tier == 'Pro' && '100'}
                </span>
                }
            </span>
            
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