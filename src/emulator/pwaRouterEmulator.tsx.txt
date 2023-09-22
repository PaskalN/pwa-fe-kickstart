import React from 'react'

import { RouteObject, useOutletContext } from 'react-router-dom'

import App from '../app/components/_app'

import { GetProps, SitePage } from '../app/utils/pageUtils'

const PageWrapper: React.FC<{}> = () => {
  const data = useOutletContext() as unknown as {
    Component?: React.FC<unknown>
  }
  const { Component, ...rest } = data

  if (!Component) return null

  return <Component {...rest} />
}

export default PageWrapper

type RouterObject = Array<{
  path: string
  component?: SitePage<GetProps>
  element?: React.JSX.Element
  errorElement?: React.JSX.Element
  exact?: boolean
}>

export const RouterBuilder = (routerObject: RouterObject): Array<RouteObject> => {
  const mapper: Array<RouteObject> = (() => {
    return (
      routerObject.map(route => {
        return {
          path: route.path,
          Component: App,
          element: route?.element || undefined,
          errorElement: route?.errorElement || undefined,
          exact: route.exact,
          loader: async props => {
            if (!route?.component?.getProps) return props
            const data = await route.component.getProps(props)
            return { ...data, Component: route.component }
          },
          children: [
            {
              index: true,
              Component: PageWrapper
            }
          ]
        }
      }) || []
    )
  })()

  return mapper
}
