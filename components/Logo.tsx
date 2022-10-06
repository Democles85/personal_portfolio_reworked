import Link from 'next/link'
import styled from '@emotion/styled'
import { Divider, Text, useColorModeValue } from '@chakra-ui/react'
import Typewriter from 'typewriter-effect'

const LogoBox = styled.div`
  display: inline-flex;
  align-items: center;
  height: 50px;
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
  const logo = '/images/code.png'

  return (
    <Link href="/">
      <a>
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
          >
            Sixhei Tartari
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
