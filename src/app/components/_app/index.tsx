import React from 'react'

import { Outlet, useLoaderData } from 'react-router-dom'

const App: React.FC<{}> = () => {
  const loaderData = useLoaderData()

  return <Outlet context={loaderData} />
}

export default App
