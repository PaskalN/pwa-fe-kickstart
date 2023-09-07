import React from 'react'

import { ComponentWithAs, IconProps } from '@chakra-ui/react'

import {
  MCMEmailIcon,
  MCMFormIcon,
  MCMHelpIcon,
  MCMLeaveIcon,
  MCMLiveChatIcon,
  MCMPhoneIcon,
  MCMRecycleIcon,
  MCMTagIcon
} from '.'

// MAPPING
// Add new Icons agains the propery
const iconMap: Project.Utils.ObjectKeyType<ComponentWithAs<'svg', IconProps>> = {
  email: MCMEmailIcon,
  form: MCMFormIcon,
  livechat: MCMLiveChatIcon,
  phone: MCMPhoneIcon,
  leave: MCMLeaveIcon,
  tag: MCMTagIcon,
  recycle: MCMRecycleIcon,
  faq: MCMHelpIcon
}

// CALLER
const IconMapper: React.FC<
  {
    iconName?: string
  } & IconProps
> = props => {
  const { iconName = 'tag', ...rest } = props
  const Icon = iconMap?.[iconName]
  if (!Icon) return null

  return (
    <>
      <Icon {...rest} />
    </>
  )
}

export default IconMapper
