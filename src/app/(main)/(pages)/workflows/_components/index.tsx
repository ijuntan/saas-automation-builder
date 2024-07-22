import React from 'react'
import Workflow from './workflow'
import { onGetWorkflows } from '../_actions/workflow-connections'
import MoreCredits from './more-credits'

type Props = {}

const Workflows = async(props: Props) => {
  const workflows = await onGetWorkflows()

  return (
    <div className='relative flex flex-col gap-4'>
        <section className='flex flex-col gap-4 px-4'>
          <MoreCredits />
          {
            workflows?.length
            ?
            workflows.map((workflow: any) => (
              <Workflow
                key={workflow.id}
                {...workflow}
              />
            ))
            :
            <div className='mt-28 text-center'>No workflows found</div>
          }
        </section>
    </div>
  )
}

export default Workflows