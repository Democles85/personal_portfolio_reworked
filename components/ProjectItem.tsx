import { Box, useColorModeValue } from '@chakra-ui/react'

type Props = {
  children: React.ReactNode
  href: string
  title: string
  thumbnail: string
  id: string
}

export const ProjectCard = ({
  children,
  href,
  title,
  thumbnail,
  ...props
}: Props) => {
  return (
    <Box
      backgroundColor={useColorModeValue(
        'rgba(255, 255, 255, 0.1)',
        'rgba(255, 255, 255, 0.1)'
      )}
      borderRadius={'10px'}
      cursor={'pointer'}
      display={'flex'}
      flexDirection={'column'}
      position={'relative'}
      width={'348px'}
      _hover={{ opacity: 1 }}
      _before={{
        borderRadius: 'inherit',
        content: '""',
        opacity: 0,
        left: 0,
        position: 'absolute',
        top: 0,
        transition: 'opacity 500ms',
        width: '100%',
        height: '100%',
        background: `radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), ${useColorModeValue(
          'rgba(255, 255, 255, 0.06)',
          'rgba(0, 0, 0, 0.06)'
        )}, transparent 40%)`,
        zIndex: 3
      }}
      _after={{
        borderRadius: 'inherit',
        content: '""',
        opacity: 0,
        left: 0,
        position: 'absolute',
        top: 0,
        transition: 'opacity 500ms',
        width: '100%',
        height: '100%',
        background: `radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), ${useColorModeValue(
          'rgba(255, 255, 255, 0.4)',
          'rgba(0, 0, 0, 0.4)'
        )}, transparent 40%)`,
        zIndex: 1
      }}
    >
      {children}
    </Box>
  )
}
