import React from 'react'

import { Page, pageGetProps } from './index.getProps'

const TestPage: Page = () => {
  return <>TestPage Page</>
}

TestPage.getProps = async _props => await pageGetProps(_props)

TestPage.getTemplateName = () => 'TestPage Page'

export default TestPage
