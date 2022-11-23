import {
  Box,
  chakra,
  Container,
  Heading,
  useColorModeValue,
  Image,
  Link,
  Icon,
  Button,
  useColorMode
} from '@chakra-ui/react'
import TypewriterComponent from 'typewriter-effect'
import type { NextPage } from 'next'
import { Layout } from '../components/layouts/Layout'
import NextLink from 'next/link'
import Section from '../components/Section'
import Paragraph from '../components/Paragraph'
import { ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import useSWR from 'swr'
import styles from '../styles/skills.module.css'
import fetcher from '../utils/fetcher'
import { useEffect } from 'react'
import { Bio } from '../components/Bio'
import { Skills } from '../components/Skills'
import { OnTheInternet } from '../components/OntheInternet'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home: NextPage = () => {
  const { data, error } = useSWR('/api/github', fetcher)
  const numOfRepos = data?.repoCount

  const { colorMode } = useColorMode()
  // console.log(colorMode)

  useEffect(() => {
    for (const card of document.getElementsByClassName(
      styles['card-content']
    ) as HTMLCollectionOf<HTMLElement>) {
      if (colorMode === 'dark')
        card.style.setProperty('background', 'rgb(32, 32, 35)')
      else card.style.setProperty('background', '#fff')
    }
  })

  return (
    <Layout title={undefined}>
      <Container
        maxW={'container.lg'}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Box
          // width={{ base: '80%', md: '50%' }}
          w={'fit-content'}
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          <TypewriterComponent
            onInit={typewriter => {
              typewriter
                .typeString("Hello! I'm a full-stack website developer.")
                .pauseFor(2500)
                .deleteAll()
                .typeString('I love to code.')
                .pauseFor(700)
                .deleteChars(5)
                .typeString('learn.')
                .pauseFor(700)
                .deleteChars(6)
                .typeString('create.')
                .pauseFor(700)
                .deleteAll()
                .typeString('Welcome to my home on the web.')
                .start()
            }}
          />
        </Box>
      </Container>

      <Section delay={0.6}>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading
              as={'h2'}
              variant={'page-title'}
              fontFamily={"'Reem Kufi Ink', sans-serif"}
              // fontFamily={"'Silkscreen', cursive"}
            >
              Sixhei Tartari
            </Heading>
            <p>Digital Craftsman ( Developer / Designer )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign={'center'}
          >
            <Box
              borderColor={'whiteAlpha.800'}
              borderWidth={2}
              borderStyle={'solid'}
              w={'100px'}
              h={'100px'}
              borderRadius={'lg'}
              overflow={'hidden'}
              display={'inline-block'}
            >
              <Image
                src={'/images/sixhei_tartari_zoomed.jpeg'}
                alt={'Profile image'}
              />
            </Box>
          </Box>
        </Box>
      </Section>

      <Section delay={0.8}>
        <Heading
          as={'h3'}
          variant={'section-title'}
          // fontFamily={"'Silkscreen', cursive"}
          fontFamily={"'Reem Kufi Ink', sans-serif"}
        >
          About Me
        </Heading>
        <Container maxW={'container.sm'}>
          <Paragraph>
            I&apos;m a full-stack web developer with a passion for creating
            beautiful, functional websites and software. I&apos;m also a
            musician, or at least like to call myself that as I&apos;m not very
            good at it, but I am a good designer, and artist. I love to learn
            new things and I&apos;m always looking for new challenges.
            <br /> <br />
            I&apos;m currently working as a freelance developer and I&apos;m
            always looking for new projects. The project I am currently working
            on is student blog website for my university,{' '}
            <Link
              href={'https://univlora-student-forum.vercel.app/'}
              target={'_blank'}
              background={'linear-gradient(90deg, #ff8a00, #e52e71)'}
              backgroundClip={'text'}
              fontWeight={'bold'}
            >
              Univlora Student Forum
              <Icon
                as={ExternalLinkIcon}
                ml={1}
                mb={3}
                w={3}
                color={'#e52e71'}
              />
            </Link>
            .
          </Paragraph>
          <Box display={'flex'} justifyContent={'center'} my={4}>
            <NextLink href="/projects">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="lavender">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Container>
      </Section>

      {/* Bio Section */}
      <Section delay={1}>
        <Bio />
      </Section>

      {/* Skills Section */}
      <Section delay={1.2}>
        <Skills />
      </Section>

      {/* On the Internet Section */}
      <Section delay={1.4}>
        <OnTheInternet />
      </Section>
    </Layout>
  )
}

export default Home
