// https://reactrouter.com/en/main/route/route
import { createBrowserRouter } from 'react-router-dom'

// Pages

import Error from './components/_error'
import Home from './pages/home'
import TestPage from './pages/test-page'

import { RouterBuilder } from '../emulator/pwaRouterEmulator'

const routers = RouterBuilder([
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/test-page',
    component: TestPage,
    exact: true
  },
  {
    path: '/test/*',
    component: Error
  }
])

const router = createBrowserRouter(routers)

export default router
