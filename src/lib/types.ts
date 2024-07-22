import { z } from "zod";
import { ConnectionProviderProps } from '@/providers/connections-provider'

export const EditUserProfileSchema = z.object({
    name: z.string().email('Required'),
    email: z.string().min(1, 'Required'),
})

export const WorkflowFormSchema = z.object({
    name: z.string().min(1, 'Required'),
    description: z.string().min(1, 'Required'),
})

export type ConnectionTypes = 'Google Drive' | 'Notion' | 'Slack' | 'Discord'

export type Connection = {
    title: ConnectionTypes
    description: string
    image: string
    connectionKey: keyof ConnectionProviderProps
    accessTokenKey?: string
    alwaysTrue?: boolean
    slackSpecial?: boolean
}

export type EditorCanvasTypes = 
| 'Email'
| 'Condition'
| 'AI'
| 'Slack'
| 'Google Drive'
| 'Notion'
| 'Custom Webhook'
| 'Google Calendar'
| 'Trigger'
| 'Action'
| 'Wait'

export type EditorCanvasCardType = {
    type: EditorCanvasTypes
    title: string
    description: string
    completed: boolean
    current: boolean
    metadata: any
}

export type EditorNodeType = {
    id: string
    type: EditorCanvasCardType['type']
    position: {
        x: number
        y: number
    }
    data: EditorCanvasCardType
}

export type EditorEdgeType = { 
    id: string,
    source: string,
    target: string 
}
