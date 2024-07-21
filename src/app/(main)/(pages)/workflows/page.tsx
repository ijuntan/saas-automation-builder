import React from 'react'
import WorkflowButton from './_components/workflow-button'
import Workflows from './_components/index'

type Props = {}

const Page = (props: Props) => {
    return (
        <div className='relative flex flex-col gap-4'>
            <h1 className='
                text-4xl sticky top-0 z-[10] p-6 flex justify-between items-center 
                bg-background/50 backdrop-blur-lg border-b'
            >
                Workflows

                <WorkflowButton />
            </h1>

            <Workflows/>
        </div>
    )
}

export default Page