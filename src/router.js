import React from 'react'
import { Router as ReachRouter } from '@reach/router'

import App from './App'

const Router = () => (
    <ReachRouter>
      <App path="/" />
    </ReachRouter>
  )
  
  export default Router