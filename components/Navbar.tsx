import { ExternalLinkIcon, HamburgerIcon } from '@chakra-ui/icons'
import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import Logo from './Logo'
import NextLink from 'next/link'
import ThemeToggleSwitch from './themeToggleSwitch'

import styles from '../styles/TextGradient.module.css'

interface LinkItemProps {
  href: string
  path: string
  _target?: string
  children: React.ReactNode
}

const LinkItem = ({
  href,
  path,
  _target,
  children,
  ...props
}: LinkItemProps) => {
  const active = path === href || path.startsWith(href + '/')
  const inactiveColor = useColorModeValue('#202023a0', 'whiteAlpha.900')
  return (
    <NextLink href={href} passHref>
      <Link
        fontWeight={active ? 'bold' : 'normal'}
        p={2}
        color={inactiveColor}
        _hover={{
          textDecoration: 'none',
          cursor: 'default'
        }}
        target={_target}
        {...props}
      >
        <Text
          position={'relative'}
          className={active ? styles['text-gradient'] : undefined}
          _hover={{
            cursor: 'pointer',
            _before: {
              content: '""',
              position: 'absolute',
              top: '110%',
              width: '120%',
              left: '-10%',
              height: '3px',
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
          {children}
        </Text>
      </Link>
    </NextLink>
  )
}

const Navbar = (props: { path: any }) => {
  const { path } = props

  return (
    <Box
      as={'nav'}
      position={'fixed'}
      w={'100%'}
      zIndex={10000}
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      {...props}
    >
      <Container
        display={'flex'}
        p={2}
        maxW={'100%'}
        flexWrap={'wrap'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Flex align={'center'} mr={5}>
          <Heading as={'h1'} fontSize={'lg'} fontWeight={'normal'}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'none', lg: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          mt={{ base: 4, md: 0 }}
          ml={'2rem'}
          alignItems={'center'}
          justifyContent={'left'}
          flexGrow={1}
          // fontFamily={"'Silkscreen', cursive"}
        >
          <LinkItem href="/" path={path} _target={''}>
            Home
          </LinkItem>
          <LinkItem href="/projects" path={path} _target={''}>
            Projects
          </LinkItem>
          <LinkItem href="/cv" path={path} _target={''}>
            CV
          </LinkItem>
          <LinkItem
            href="https://github.com/Democles85/personal_portfolio_reworked/"
            path={path}
            _target={'_blank'}
          >
            Source{' '}
            <Icon as={ExternalLinkIcon} w={3} ml={1} position={'absolute'} />
          </LinkItem>
        </Stack>

        <Box
          flex={1}
          display={'flex'}
          justifyContent={'right'}
          alignItems={'center'}
        >
          <ThemeToggleSwitch />

          <Box
            ml={2}
            display={{ base: 'inline-block', md: 'inline-block', lg: 'none' }}
          >
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant={'outline'}
                aria-label={'Menu'}
              />
              <MenuList
                style={{ background: useColorModeValue('#ffffff', '#202023') }}
              >
                <NextLink href={'/'} passHref>
                  <MenuItem as={Link}>Home</MenuItem>
                </NextLink>
                <NextLink href={'/projects'} passHref>
                  <MenuItem as={Link}>Projects</MenuItem>
                </NextLink>
                <NextLink href={'/cv'} passHref>
                  <MenuItem as={Link}>CV</MenuItem>
                </NextLink>
                <NextLink
                  href={
                    'https://github.com/Democles85/personal_portfolio_reworked/'
                  }
                  passHref
                >
                  <MenuItem as={Link} target={'_blank'}>
                    Source <Icon as={ExternalLinkIcon} ml={1} mb={2} w={3} />
                  </MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
