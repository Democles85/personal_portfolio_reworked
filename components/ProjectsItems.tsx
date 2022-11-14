import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

type ProjectProps = {
  title?: string
  src?: string
  alt?: string
  children: React.ReactNode
}

export const Title = ({ children }: ProjectProps) => (
  <Box display={'flex'}>
    <NextLink href={'/projects'}>
      <Link variant={'project-link'}>Projects</Link>
    </NextLink>
    <span>
      <ChevronRightIcon mx={2} />
    </span>
    <Heading display={'inline-block'} as={'h3'} fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const ProjectImage = ({ src, alt }: ProjectProps) => (
  <Image borderRadius={'lg'} w={'full'} src={src} alt={alt} mb={4} />
)

export const Meta = ({ children }: ProjectProps) => (
  <Badge colorScheme={'green'} mr={2}>
    {children}
  </Badge>
)
