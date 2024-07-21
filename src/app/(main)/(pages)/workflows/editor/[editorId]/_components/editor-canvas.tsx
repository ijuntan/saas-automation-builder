'use client'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { EditorCanvasCardType, EditorNodeType } from '@/lib/types'
import { useEditor } from '@/providers/editor-provider'
import ReactFlow, {
  Background,
  Connection,
  Controls,
  Edge,
  EdgeChange,
  MiniMap,
  NodeChange,
  ReactFlowInstance,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  BackgroundVariant,
} from 'reactflow'
import 'reactflow/dist/style.css'
import EditorCanvasCardSingle from './editor-canvas-card-single'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'
import { toast } from 'sonner'
import { usePathname } from 'next/navigation'
import { v4 } from 'uuid'
import { EditorCanvasDefaultCardTypes } from '@/lib/constant'

type Props = {}

const initialNodes: EditorNodeType[] = []

const initialEdges: { id: string, source: string, target: string }[] = []

const EditorCanvas = (props: Props) => {
    const { state, dispatch } = useEditor()
    const [nodes, setNodes] = useState(initialNodes)
    const [edges, setEdges] = useState(initialEdges)
    const [isWorkFlowLoading, setIsWorkFlowLoading] = useState<boolean>(false)
    const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance>()
    const pathname = usePathname()

    const nodeTypes = useMemo(
        () => ({
          Action: EditorCanvasCardSingle,
          Trigger: EditorCanvasCardSingle,
          Email: EditorCanvasCardSingle,
          Condition: EditorCanvasCardSingle,
          AI: EditorCanvasCardSingle,
          Slack: EditorCanvasCardSingle,
          'Google Drive': EditorCanvasCardSingle,
          Notion: EditorCanvasCardSingle,
          Discord: EditorCanvasCardSingle,
          'Custom Webhook': EditorCanvasCardSingle,
          'Google Calendar': EditorCanvasCardSingle,
          Wait: EditorCanvasCardSingle,
        }),
        []
    )

    const onDrop = useCallback(
        (e:any) => {
            e.preventDefault()

            const type: EditorCanvasCardType['type'] = e.dataTransfer.getData('application/json')

            if(typeof type === 'undefined' || !type) return

            const triggerAlreadyExists = state.editor.elements.find(
                (node) => node.type === 'Trigger'
            )

            if(triggerAlreadyExists && type === 'Trigger') {
                toast('Only one trigger is allowed')
                return
            }

            if (!reactFlowInstance) return
            const position = reactFlowInstance.screenToFlowPosition({
                x: e.clientX,
                y: e.clientY,
            })

            const newNode = {
                id: v4(),
                type,
                position,
                data: {
                  title: type,
                  description: EditorCanvasDefaultCardTypes[type].description,
                  completed: false,
                  current: false,
                  metadata: {},
                  type: type,
                },
            }
            
            setNodes((nds) => nds.concat(newNode))
        }, [reactFlowInstance, state]
    )

    const onDragOver = useCallback((event: any) => {
        event.preventDefault()
        event.dataTransfer.dropEffect = 'move'
      }, [])
      
    const onNodesChange = useCallback(
    (changes: NodeChange[]) => 
        //@ts-ignore
        setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
    )

    const onEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
        setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
    )

    const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    []
    )
      
    const handleClickCanvas = () => {
    dispatch({
        type: 'SELECTED_ELEMENT',
        payload: {
        elements: {
            data: {
            completed: false,
            current: false,
            description: '',
            metadata: {},
            title: '',
            type: 'Trigger',
            },
            id: '',
            position: { x: 0, y: 0 },
            type: 'Trigger',
        },
        },
    })
    }
    
    useEffect(() => {
    dispatch({ type: 'LOAD_DATA', payload: { edges, elements: nodes } })
    }, [nodes, edges])

    return (
        <ResizablePanelGroup
            direction='horizontal'
            className=""
        >
            <ResizablePanel defaultSize={70}>
            <div className="flex h-full items-center justify-center">
            <div
                style={{ width: '100%', height: '100%', paddingBottom: '70px' }}
                className="relative"
            >
                <ReactFlow
                    className='w-[300px]'
                    onDrop={onDrop}
                    onDragOver={onDragOver}

                    nodes={state.editor.elements}
                    onNodesChange={onNodesChange}

                    edges={edges}
                    onEdgesChange={onEdgesChange}

                    onConnect={onConnect}
                    onInit={setReactFlowInstance}

                    fitView

                    onClick={handleClickCanvas}
                    nodeTypes={nodeTypes}
                >
                    <Controls position="top-left" />
                    <MiniMap
                        position="bottom-left"
                        className="!bg-background"
                        zoomable
                        pannable
                    />
                    <Background
                        variant={BackgroundVariant.Dots}
                        gap={12}
                        size={1}
                    />
                </ReactFlow>

            </div>
            </div> 
            </ResizablePanel>
            <ResizableHandle />
        </ResizablePanelGroup>
    )
}

export default EditorCanvas