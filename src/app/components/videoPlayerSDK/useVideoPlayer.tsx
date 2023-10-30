import { useState } from 'react'

import { getEvents } from './sdk/events'
import { getHandlers } from './sdk/handlers'
import { getIntialSettings } from './sdk/initialProps'
import { getReferences } from './sdk/references'
import { createState } from './sdk/states'

export default (settings?: VideoPlayer.SDK.Settings): VideoPlayer.SDK.Definition => {
  const initializedState = useState<boolean>(false)
  const initialSettings = getIntialSettings(settings)

  const [finalSettings, setSettings] = useState<VideoPlayer.SDK.Settings>(initialSettings)
  const [, setInitialized] = initializedState

  const reinit = (settings?: VideoPlayer.SDK.Settings): void => {
    const incomingSettings = settings || {}
    const nextSettings = {
      ...finalSettings,
      ...incomingSettings
    }

    setSettings(nextSettings)
    setInitialized(false)
  }

  const refs = getReferences()
  const states = createState(refs.defaultScreen)
  const events = getEvents(refs, states, initializedState, finalSettings)
  const handlers = getHandlers(refs, states, finalSettings)

  return {
    refs,
    states,
    events,
    handlers,
    reinit
  }
}
