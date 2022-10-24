import NextLink from 'next/link'
import Image from 'next/image'
import { Global } from '@emotion/react'
import { Box, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'

type Props = {
  children: React.ReactNode
  href: string
  title: string
  thumbnail: string
  id: string
}

export const GridItem = ({
  children,
  href,
  title,
  thumbnail,
  ...props
}: Props) => (
  <Box w={'100%'} textAlign={'center'} {...props}>
    <LinkBox cursor={'pointer'}>
      <Image
        src={thumbnail}
        alt={title}
        className={'grid-item-thumbnail'}
        loading={'lazy'}
        width={400}
        height={240}
      />
      <LinkOverlay href={href} target={'_blank'}>
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({
  children,
  id,
  title,
  thumbnail,
  ...props
}: Props) => (
  <Box w={'100%'} textAlign={'center'} {...props}>
    <NextLink href={`/works/${id}`}>
      <LinkBox cursor={'pointer'}>
        <Image
          src={thumbnail}
          alt={title}
          className={'grid-item-thumbnail'}
          placeholder={'blur'}
        />
        <LinkOverlay href={`/works/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
        transition: all 0.2s ease-in-out;
      }
      `}
  />
)
