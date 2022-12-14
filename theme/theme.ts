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
  },
  Link: {
    variants: {
      'project-link': (props: StyleFunctionProps | Record<string, any>) => ({
        textDecoration: 'none',
        color: mode('#8080ff', '#b1b2ff')(props)
      }),
      'project-source': {
        background: 'linear-gradient(90deg, #FF63C3, #3D7AED)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text'
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
    500: '#4d4dff'
  }
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ config, colors, styles, components })

export default theme
