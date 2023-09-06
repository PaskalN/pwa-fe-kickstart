import React from 'react'

// import { Request, Response } from 'express'

import * as H from 'history'
import { LoaderFunctionArgs } from 'react-router-dom'

// type Location = H.History<H.LocationState>
type History = H.History

export type PageUtilsHistory = History
export type Location = H.Location
// -------------------------------------------------
// This props are global props. They are coming from react-router-dom and _app-config
export type BaseProps<Props> = Props & {
  // isLoading: boolean
  // history: History
  // location: Location
  // children?: React.ReactNode
}
// -------------------------------------------------
export type LocaleProps = {
  id: string
  preferredCurrency: string
}

// This is the type of config/sites.js object
export type SiteProp = {
  // id: string
  // l10n: {
  //   supportedCurrencies: Array<string>
  //   defaultCurrency: string
  //   defaultLocale: string
  //   supportedLocales: Array<LocaleProps>
  // }
}

// If you extend _app-config / extraGetPropsArgs -> you have to update the GetProps type as well

// AppConfig.extraGetPropsArgs = (locals = {}) => {
//   return {
//       api: locals.api,
//       buildUrl: locals.buildUrl,
//       site: locals.site,
//       locale: locals.locale
//   }
// }

// req, res, params, location - thees parameters are coming
// from expressJS and react dom route

// export type GetProps = {
//   req: Request
//   res: Response
//   params: { [propName: string]: string | number }
//   location: Location
//   site: SiteProp
//   locale: LocaleProps
//   buildUrl: (_path: string, _site: string, _locale: string) => string
// }

export type GetProps = LoaderFunctionArgs

export type ShouldGetProps = {
  location: Location
  previousLocation: Location
}

export type BaseMethods<T> = {
  // Simple function that returns hardcoded string, representing the template name
  getTemplateName: () => string

  // A function that returns Promise.
  getProps?: (_props: GetProps) => Promise<T> | never

  // A function that triggers getProps
  shouldGetProps?: (_props: ShouldGetProps) => boolean
}

// -------------------------------------------------
// React.FunctionComponent<PageProps> & BaseMethods
export type SitePage<T> = React.FunctionComponent<BaseProps<T>> & BaseMethods<T>
