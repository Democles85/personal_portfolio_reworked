import {
  Box,
  Switch,
  Text,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

const ThemeToggleSwitch = () => {
  const [text, setText] = useState(
    useEffect(() => {
      setText(localStorage.getItem('chakra-ui-color-mode')?.toString())
    }, []) as any
  )
  // Get chakra color mode value from localStorage
  const [colorMode, setColorMode] = useState(
    useEffect(() => {
      const localStorageColorMode = localStorage.getItem('chakra-ui-color-mode')
      if (localStorageColorMode) {
        setColorMode(localStorageColorMode as any)
        // Set text to match color mode with the first letter capitalized
        setText(
          localStorageColorMode.charAt(0).toUpperCase() +
            localStorageColorMode.slice(1)
        )
      }
    }, []) as any
  )

  const { toggleColorMode } = useColorMode()

  // Set chakra color mode value to a useState value
  const setColorTheme = (colorMode: string) => {
    localStorage.setItem('chakra-ui-color-mode', colorMode)
    setColorMode(colorMode as string)
  }

  return (
    // Add an animation to the switch

    <AnimatePresence exitBeforeEnter initial={false}>
      <Box
        display={'flex'}
        mr={'0.5rem'}
        paddingRight={{ base: '0', md: '0', lg: '40px' }}
        alignItems={'center'}
        justifyContent={'right'}
      >
        <Switch
          aria-label={'Toggle Dark Mode'}
          colorScheme={'lavender'}
          isChecked={colorMode === 'dark'}
          style={{
            marginRight: '0.5rem',
            cursor: 'pointer'
          }}
          onChange={() => {
            toggleColorMode()
            setColorTheme(colorMode === 'dark' ? 'light' : 'dark')
            setText(colorMode === 'dark' ? 'Light' : 'Dark')
          }}
        />

        <motion.div
          key={useColorModeValue('light', 'dark')}
          initial={{ opacity: 0, x: 5 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Text fontFamily={"'Silkscreen', cursive"} fontSize={'1rem'}>
            {text}
          </Text>
        </motion.div>
      </Box>
    </AnimatePresence>
  )
}

export default ThemeToggleSwitch
