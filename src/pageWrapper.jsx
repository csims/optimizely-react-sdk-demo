import { createInstance, OptimizelyProvider } from '@optimizely/react-sdk'
import React from 'react'
import datafile from './mockDatafile'

const fetchUser = Promise.resolve({ id: '123' })

const PageWrapper = ({ element }) => {
  const optimizely = createInstance({ datafile })

  return (
    <OptimizelyProvider
      optimizely={optimizely}
      user={fetchUser}>
        {element}
    </OptimizelyProvider>
  )
}

export default PageWrapper
