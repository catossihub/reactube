import React from 'react'
import ReactDOM from 'react-dom'
import UniversalRouter from 'universal-router'

import VideoList from './views/VideoList.jsx'
import VideoDetails from './views/VideoDetails.jsx'

const routes = [
  { path: '/', action: () => VideoList },
  { path: '/:id', action: () => VideoDetails }
]

export const router = new UniversalRouter(routes)