const customScheme: { [schemeName: string]: string } = {
  green: 'success',
  red: 'error',
  orange: 'warning',
  blue: 'info'
}

export default {
  sizes: {
    small: {
      container: {
        alignItems: 'flexStart',
        maxW: '28rem',
        minW: '3xs',
        maxH: '5.38rem',
        minH: '3.75rem'
      }
    },
    large: {
      container: {
        justifyContent: 'center',
        maxW: '46.31rem',
        minW: '3xs',
        height: '3.5rem'
      }
    }
  },
  variants: {
    subtle: (props: { colorScheme?: string }): {} => ({
      container: {
        borderColor: `${customScheme[props.colorScheme || 'green']}.${props.colorScheme === 'blue' ? '40' : 600}`,
        borderWidth: '1.2px',
        borderStyle: 'solid',
        background: `${customScheme[props.colorScheme || 'green']}.${props.colorScheme === 'orange' ? 45 : 40}`
      }
    }),
    solid: (props: { colorScheme?: string }): {} => ({
      container: {
        background: `${customScheme[props.colorScheme || 'orange']}.40`
      }
    })
  }
}
