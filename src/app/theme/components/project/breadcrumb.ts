import type { GlobalStyleProps, SystemStyleObject } from '@chakra-ui/theme-tools'

export default {
  baseStyle: {
    container: {
      minHeight: 4,
      color: 'neutral.100'
    },
    icon: {
      display: 'flex',
      boxSize: 4
    },
    link: {
      fontSize: 'xs',
      fontFamily: 'fonts.mcm.regular',
      lineHeight: 4,
      textDecoration: 'underline',
      _hover: {
        color: 'gold.100'
      },
      _focus: (props: GlobalStyleProps): SystemStyleObject => ({
        color: 'gold.100',
        boxShadow: 'none',
        outline: `2px solid ${props.colors.MCM['100']}`,
        outlineOffset: '2px'
      }),
      _active: {
        color: 'gold.130'
      },
      _disabled: {
        color: 'neutral.100',
        cursor: 'not-allowed',
        pointerEvents: 'none',
        opacity: 0.5
      }
    }
  },
  parts: ['container', 'icon', 'link']
}
