'use client'
import React from 'react'
import { EditorCanvasTypes, EditorNodeType } from '@/lib/types'
import { useNodeConnections } from '@/providers/connections-provider'
import { useEditor } from '@/providers/editor-provider'
import { Tabs } from '@radix-ui/react-tabs'
import { TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { EditorCanvasDefaultCardTypes } from '@/lib/constant'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import EditorCanvasIconHelper from './editor-canvas-icon-helper'
import { onDragStart } from '@/lib/editor-utils'

type Props = {
    nodes: EditorNodeType[]
}

const EditorCanvasSidebar = ({nodes}: Props) => {
    const { state } = useEditor()
    const { nodeConnection } = useNodeConnections()
    
    return (
        <aside>
            <Tabs
                defaultValue="actions"
                className="h-screen overflow-scroll pb-24"
            >
                <TabsList className='bg-transparent'>
                    <TabsTrigger value="actions">Actions</TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>

                <Separator />

                <TabsContent
                    value="actions"
                    className="flex flex-col gap-4 p-4"
                    >
                    {Object.entries(EditorCanvasDefaultCardTypes)
                        .filter(
                        ([_, cardType]) =>
                            (!nodes.length && cardType.type === 'Trigger') ||
                            (nodes.length && cardType.type === 'Action')
                        )
                        .map(([cardKey, cardValue]) => (
                        <Card
                            key={cardKey}
                            draggable
                            className="w-full cursor-grab border-black bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900"
                            onDragStart={(event) =>
                                onDragStart(event, cardKey as EditorCanvasTypes)
                            }
                        >
                            <CardHeader className="flex flex-row items-center gap-4 p-4">
                            <EditorCanvasIconHelper type={cardKey as EditorCanvasTypes} />
                            <CardTitle className="text-md">
                                {cardKey}
                                <CardDescription>{cardValue.description}</CardDescription>
                            </CardTitle>
                            </CardHeader>
                        </Card>
                        ))}
                    </TabsContent>
            </Tabs>
        </aside>
    )
}

export default EditorCanvasSidebar