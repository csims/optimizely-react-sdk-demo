import React, { useContext } from 'react'
import { OptimizelyContext, useExperiment } from '@optimizely/react-sdk'
import { Link } from 'gatsby'

const IndexPage = () => {
  const { optimizely } = useContext(OptimizelyContext)
  const [ variation, clientReady, didTimeout ] = useExperiment('my_experiment', { autoUpdate: true })

  return (
    <div>
      <h2>Index page</h2>
      <div>{`optimizely defined? ${!!optimizely}`}</div>
      <div>{`optimizely user id: ${optimizely && optimizely.user && optimizely.user.id}`}</div>
      <div>{`variation: ${variation}`}</div>
      <div><Link to='/anotherPage'>navigate via gatsby link</Link></div>
      <div><a href='/optimizely-react-sdk-demo/anotherPage/'>navigate via full page load</a></div>
    </div>
  )
}

export default IndexPage
