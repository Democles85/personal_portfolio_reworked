import { extendTheme } from '@chakra-ui/react'
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'

const styles = {
  global: (props: StyleFunctionProps | Record<string, any>) => ({
    body: {
      bg: mode('#d9d9ff', '#202023')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'with-shadow': (props: StyleFunctionProps | Record<string, any>) => ({
        textShadow: '0 0 3px #000',
        color: mode('#000', '#fff')(props)
      }),
      'section-title': {
        fontSize: '1.75rem',
        textDecoration: 'underline',
        textUnderlineOffset: '0.5rem',
        textDecorationColor: '#525252',
        textDecorationThickness: '0.2rem',
        marginTop: '1rem',
        marginBottom: '1rem'
      },
      'skill-card-title': {
        fontSize: '1.25rem',
        textDecoration: 'none',
        marginTop: '1rem',
        marginBottom: '1rem',
        fontFamily: "'Reem Kufi Ink', sans-serif"
      }
    }
  }
}

const colors = {
  lavender: {
    50: '#f9f9ff',
    100: '#f3f3ff',
    200: '#b1b2ff',
    300: '#8080ff',
    400: '#4d4dff',
    500: '#8080ff',
    600: '#4d4dff'
  }
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ config, colors, styles, components })

export default theme
