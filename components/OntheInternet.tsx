import {
  Button,
  Container,
  Heading,
  Icon,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import {
  IoLogoDiscord,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter
} from 'react-icons/io5'

export const OnTheInternet = () => {
  return (
    <>
      <Heading
        as={'h3'}
        variant={'section-title'}
        fontFamily={"'Reem Kufi Ink', sans-serif"}
      >
        On the Internet
      </Heading>
      <Container maxW={'container.lg'}>
        <List
          display={'flex'}
          flexDir={{ base: 'column', md: 'row', lg: 'row' }}
          justifyContent={'space-between'}
          maxW={'100%'}
        >
          <ListItem>
            <Link href="https://github.com/Democles85" target="_blank">
              <Button
                variant="ghost"
                colorScheme="lavender"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                Democles85
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/sixhei-tartari/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="lavender"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                Sixhei Tartari
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/LeJhin1" target="_blank">
              <Button
                variant="ghost"
                colorScheme="lavender"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                LeJhin1
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.instagram.com/sixheitartari/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="lavender"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                sixhei_tartari
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.discordapp.com/users/336600578237136896"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="lavender"
                leftIcon={<Icon as={IoLogoDiscord} />}
              >
                Democles#8413
              </Button>
            </Link>
          </ListItem>
        </List>
      </Container>
    </>
  )
}
