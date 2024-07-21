import React from 'react'
import Workflow from './workflow'

type Props = {}

const Workflows = (props: Props) => {
  return (
    <div className='relative flex flex-col gap-4'>
        <section className='flex flex-col gap-4 px-4'>
            <Workflow
                id='1'
                description='Creating a test workflow'
                name="Automation"
                publish={false}
            />
            <Workflow
                id='1'
                description='Creating a test workflow'
                name="Automation"
                publish={false}
            />
        </section>
    </div>
  )
}

export default Workflows