import { z } from "zod";
import { ConnectionProviderProps } from '@/providers/connections-provider'


export const EditUserProfileSchema = z.object({
    name: z.string().email('Required'),
    email: z.string().min(1, 'Required'),
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