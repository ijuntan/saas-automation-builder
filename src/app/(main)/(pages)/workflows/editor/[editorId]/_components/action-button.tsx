import React, { useCallback } from 'react'
import { ConnectionProviderProps } from '@/providers/connections-provider'
import { Option } from '@/store'
import { usePathname } from 'next/navigation'

type Props = {
  currentService: string
  nodeConnection: ConnectionProviderProps
  channels?: Option[]
  setChannels?: (value: Option[]) => void
}

const ActionButton = ({
  currentService,
  nodeConnection,
  channels,
  setChannels,
}: Props) => {
  const pathname = usePathname()

  return <></>
}

export default ActionButton