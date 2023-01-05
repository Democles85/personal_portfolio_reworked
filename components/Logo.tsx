import styled from '@emotion/styled'
import { Divider, Link, Text, useColorModeValue } from '@chakra-ui/react'
import Typewriter from 'typewriter-effect'

import styles from '../styles/TextGradient.module.css'

const LogoBox = styled.div`
  display: inline-flex;
  align-items: center;
  height: 40px;
  font-size: 26px;
  padding: 0 0 0 40px;
  letter-spacing: 0.3px;

  @media (max-width: 768px) {
    font-size: 22px;
    padding: 0 0 0 10px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
    padding: 0 0 0 5px;
  }
`

const Logo = () => {
  return (
    <Link
      href="/"
      position={'relative'}
      _hover={{
        textDecoration: 'none'
      }}
    >
      <LogoBox>
        <svg
          width="30"
          height="30"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <g>
            <title>Layer 1</title>
            <path
              id="svg_2"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              stroke="#b1b2ff"
              d="m7.48718,8.08974l6.66793,4.79575c1.53952,1.10714 1.53952,3.14751 0,4.25465l-6.66793,4.79575"
            />
            <path
              id="svg_3"
              strokeLinecap="round"
              strokeWidth="2"
              stroke="#b1b2ff"
              d="m19.16667,23.98718l7.60256,0"
            />
          </g>
        </svg>
        <Divider
          orientation={'vertical'}
          ml={2}
          height={'35px'}
          color={useColorModeValue('#202023', '#ffffff')}
        />
        <Text
          ml={2}
          fontFamily={"'Silkscreen', cursive"}
          fontSize={{ base: '1rem', md: '1.75rem', lg: '1.75rem' }}
          position={'relative'}
          _hover={{
            cursor: 'pointer',
            _before: {
              content: '""',
              position: 'absolute',
              top: '90%',
              width: '100%',
              left: '0%',
              height: '2px',
              borderRadius: '2px',
              background:
                'linear-gradient(90deg, rgba(255,99,195,1) 0%, rgba(61,122,237,1) 50%, rgba(255,99,195,1) 100%) 0 0 / 400% 100%',
              animation: 'gradient 4s linear infinite',

              '@keyframes gradient': {
                to: {
                  backgroundPosition: '400% 0'
                }
              }
            }
          }}
        >
          Sixhei Tartari
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo
