import { create } from 'zustand'

export interface Option {
    value: string
    label: string
    disable?: boolean
    fixed?: boolean
    [key: string]: string | boolean | undefined
}

type ZutoStore = {
    googleFile: any
    setGoogleFile: (googleFile: any) => void
    slackChannels: Option[]
    setSlackChannels: (channels: Option[]) => void
    selectedSlackChannels: Option[]
    setSelectedSlackChannels: (channels: Option[]) => void
}

export const useZutoStore = create<ZutoStore>()((set) => ({
    googleFile: {},
    setGoogleFile: (googleFile) => set({ googleFile }),
    slackChannels: [],
    setSlackChannels: (channels) => set({ slackChannels: channels }),
    selectedSlackChannels: [],
    setSelectedSlackChannels: (channels) => set({ selectedSlackChannels: channels }),
}))