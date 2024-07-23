import React from 'react'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { onGetRecentWorkflows } from '../workflows/_actions/workflow-connections'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

type Props = {}

const DashboarPage = async(props: Props) => {
  const workflows = await onGetRecentWorkflows()

  return (
    <div className='flex flex-col gap-4 relative h-screen'>
        <h1 className='
            text-4xl sticky top-0 z-[10] p-6 flex items-center 
            bg-background/50 backdrop-blur-lg border-b
        '>
            Dashboard
        </h1>

        <div className="flex flex-col gap-4">
          <h2 className='
              text-xl sticky top-0 z-[10] p-6 flex items-center 
              bg-background/50 backdrop-blur-lg border-b
          '>
            Recent workflows
          </h2>
          {
            workflows?.length ?

            <div className="flex p-6 gap-4">
            {
              workflows.map((workflow) => {
              return(
                <Link href={`/workflows/editor/${workflow.id}`} key={workflow.id} className='w-full'>
                  <Card className='w-full border'>
                    <CardContent className='py-4'>
                      <CardTitle className='font-light'>{workflow.name}</CardTitle>
                      <Separator className='my-2'/>
                      <h4>{workflow.description}</h4>
                      <p>Recent update: <span>{new Date(workflow.updatedAt).toDateString()}</span></p>
                    </CardContent>
                  </Card>
                </Link>
              )})
            }
            </div>
            :
            <div className="mt-14 text-center">
              No workflows found
            </div>
          }
        </div>
    </div>
  )
}

export default DashboarPage