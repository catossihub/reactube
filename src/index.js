import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import { router } from './Routes'
import registerServiceWorker from './registerServiceWorker'

router
  .resolve({ pathname: '/' })
  .then(Component => {
    ReactDOM.render(
    <App>{() => <Component />}</App>,
    document.getElementById('root'))

    registerServiceWorker()
  })
  
