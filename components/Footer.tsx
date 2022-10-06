import { Box, Text } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box
      display={'flex'}
      flexDir={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      opacity={0.4}
      fontSize={'small'}
      my={6}
    >
      <Text>&copy; {new Date().getFullYear()} Sixhei Tartari.</Text>
      <Text>All Rights Reserved.</Text>
    </Box>
  )
}
