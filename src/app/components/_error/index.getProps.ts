// import { HTTPNotFound } from 'pwa-kit-react-sdk/ssr/universal/errors'

import { BaseProps, GetProps, SitePage } from '../../utils/pageUtils'
/********************************************/
/**************** Page Type ****************/
/********************************************/
// Simply use the type in the page component
// No changes are requiered
export type Page = SitePage<PageProps>

// Use this type if you want to pass the props in a function
export type DefaultPageProps = BaseProps<PageProps>

/********************************************/
/**************** Props Type ****************/
/********************************************/
// Page Props must contain the returned result from getProps
export type PageProps = GetProps

/********************************************/
/***************** Get Props ****************/
/********************************************/
export const pageGetProps = async (_props: GetProps): Promise<PageProps> => {
  const res = {
    ..._props
  }

  return Promise.resolve(res)
}
