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
  useColorModeValue
} from '@chakra-ui/react'
import Logo from './Logo'
import NextLink from 'next/link'
import ThemeToggleSwitch from './themeToggleSwitch'

type Props = {
  children: React.ReactNode
  href: string
  path: string
  _target?: string
}

const LinkItem = ({ href, path, _target, children, ...props }: Props) => {
  const active = path === href || path.startsWith(href + '/')
  const inactiveColor = useColorModeValue('#202023a0', 'whiteAlpha.900')
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        bg={active ? 'lavender.200' : undefined}
        color={active ? '#202023' : inactiveColor}
        target={_target}
        borderRadius={'lg'}
        {...props}
      >
        {children}
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
          <LinkItem href="/contact" path={path} _target={''}>
            Contact
          </LinkItem>
          <LinkItem
            href="https://github.com/Democles85/personal_portfolio_reworked/"
            path={path}
            _target={'_blank'}
          >
            Source <Icon as={ExternalLinkIcon} mb={3} w={3} />
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
                <NextLink href={'/contact'} passHref>
                  <MenuItem as={Link}>Contact</MenuItem>
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
