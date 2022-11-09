import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import styles from '../styles/404.module.css'
import { NextPage } from 'next'

const NotFound: NextPage = () => {
  return (
    <Container maxW={'container.lg'}>
      <Text
        as="h1"
        // textShadow={'-1px -1px 0 #8080ff,1px 1px 0 #b1b2ff'}
        fontWeight={{ base: 'semibold', md: 'extrabold' }}
        fontSize={{ base: '1.6em', md: '6xl' }}
        color={useColorModeValue('gray.600', 'white')}
        filter={useColorModeValue(
          'drop-shadow(0 1px 3px rgba(0,0,0,0))',
          'drop-shadow(0 1px 3px rgba(255,255,255,0.8))'
        )}
        className={styles.hero + ' ' + styles.glitch + ' ' + styles.layers}
        data-text={'Error 404'}
      >
        <span>Error 404</span>
      </Text>
      <Text mt={5}>The page you&apos;re looking for was not found.</Text>
      <Divider
        my={6}
        style={{
          borderBottomWidth: '2px',
          borderColor: `${useColorModeValue('#202023', '#ffffff')}`
        }}
      />

      <Box
        my={6}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        {/* Go back on browser history */}
        <Button colorScheme="lavender" onClick={() => history.back()}>
          Return Back
        </Button>
      </Box>
    </Container>
  )
}

export default NotFound
