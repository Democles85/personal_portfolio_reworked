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
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Progress,
  SimpleGrid,
  Divider,
  List,
  ListItem,
  useColorMode
} from '@chakra-ui/react'
import TypewriterComponent from 'typewriter-effect'
import type { NextPage } from 'next'
import { Layout } from '../components/layouts/Layout'
import NextLink from 'next/link'
import Section from '../components/Section'
import Paragraph from '../components/Paragraph'
import { ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/Bio'
import useSWR from 'swr'
import styles from '../styles/skills.module.css'
import fetcher from '../utils/fetcher'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoDiscord,
  IoLogoLinkedin
  // IoLogoDiscord
} from 'react-icons/io5'
import { useEffect, useState } from 'react'

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

  const mouseMoveHandler = (e: { clientX: number; clientY: number }) => {
    for (const card of document.getElementsByClassName(
      styles.card
    ) as HTMLCollectionOf<HTMLElement>) {
      const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top

      card.style.setProperty('--mouse-x', `${x}px`)
      card.style.setProperty('--mouse-y', `${y}px`)
    }
  }

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
                src={'/images/sixhei_tartari.jpeg'}
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
            >
              Univlora Student Forum
              <Icon as={ExternalLinkIcon} ml={1} mb={3} />
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

      <Section delay={1}>
        <Heading
          as={'h3'}
          variant={'section-title'}
          // fontFamily={"'Silkscreen', cursive"}
          fontFamily={"'Reem Kufi Ink', sans-serif"}
        >
          My Journey
        </Heading>
        <Container maxW={'container.sm'}>
          <BioSection>
            <BioYear>2001</BioYear>
            Born in Vlora, Albania on 12th of March.
          </BioSection>
          <BioSection>
            <BioYear>2004</BioYear>
            Just at the age of 3 I was interacting with my first computer,
            playing games like Tetris and watching cartoons.
          </BioSection>
          <BioSection>
            <BioYear>2008</BioYear>I started to learn how to use computers and
            made my first website on note pad.
          </BioSection>
          <BioSection>
            <BioYear>2010</BioYear>A cousin of mine introduced me to the world
            of Minecraft, a sandbox game that had just came out and it gave you
            the freedom to do anything and create things only limited by my
            imagination.
          </BioSection>
          <BioSection>
            <BioYear>2011</BioYear>
            After playing Minecraft for a year, I was growing curious about how
            people created such games and I started to check out tutorials on
            how to make games. I started to look around in the Minecraft modding
            community and I found a mod creation tool called &quot;Minecraft
            Coder Pack&quot; which used Java as a programming language.
          </BioSection>
          <BioSection>
            <BioYear>2016</BioYear>
            Started working as a local freelancer in web development and UI/UX
            design.
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Joined the University of Vlora, Albania to study Computer Science.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Graduated from the University of Vlora, with a Bachelor of Science
            in Computer Science. I&apos;m currently working as a freelance
            developer and I&apos;m always looking for new projects.
          </BioSection>
        </Container>
      </Section>

      <Section delay={1.2}>
        <Heading
          as={'h3'}
          variant={'section-title'}
          // fontFamily={"'Silkscreen', cursive"}
          fontFamily={"'Reem Kufi Ink', sans-serif"}
        >
          My Skills
        </Heading>
        <Container maxW={'container.lg'}>
          <Box
            className={styles.cards}
            id="cards"
            onMouseMove={e => {
              mouseMoveHandler(e)
            }}
            color={useColorModeValue('gray.800', 'white')}
          >
            <Box className={styles.card}>
              <Box className={styles['card-content']}>
                <Heading
                  as={'h1'}
                  variant={'skill-card-title'}
                  textAlign={'right'}
                >
                  Web Development
                </Heading>
                <Divider />
                <Box>
                  <Stat p={2}>
                    <StatLabel>HTML</StatLabel>
                    <StatNumber>100%</StatNumber>
                    <StatHelpText>
                      <Progress
                        value={100}
                        colorScheme={'lavender'}
                        size={'sm'}
                      />
                    </StatHelpText>
                  </Stat>
                  <Stat p={2}>
                    <StatLabel>JAVASCRIPT & TYPESCRIPT</StatLabel>
                    <StatNumber>90%</StatNumber>
                    <StatHelpText>
                      <Progress
                        value={90}
                        colorScheme={'lavender'}
                        size={'sm'}
                      />
                    </StatHelpText>
                  </Stat>
                  <Stat p={2}>
                    <StatLabel>CSS</StatLabel>
                    <StatNumber>70%</StatNumber>
                    <StatHelpText>
                      <Progress
                        value={70}
                        colorScheme={'lavender'}
                        size={'sm'}
                      />
                    </StatHelpText>
                  </Stat>
                </Box>
              </Box>
            </Box>
            <Box className={styles.card}>
              <Box className={styles['card-content']}>
                <Heading
                  as={'h1'}
                  variant={'skill-card-title'}
                  textAlign={'right'}
                >
                  Programming Languages
                </Heading>
                <Divider />
                <Box>
                  <Stat p={2}>
                    <StatLabel>C</StatLabel>
                    <StatNumber>56%</StatNumber>
                    <StatHelpText>
                      <Progress
                        value={56}
                        colorScheme={'lavender'}
                        size={'sm'}
                      />
                    </StatHelpText>
                  </Stat>
                  <Stat p={2}>
                    <StatLabel>C++</StatLabel>
                    <StatNumber>50%</StatNumber>
                    <StatHelpText>
                      <Progress
                        value={50}
                        colorScheme={'lavender'}
                        size={'sm'}
                      />
                    </StatHelpText>
                  </Stat>
                  <Stat p={2}>
                    <StatLabel>C#</StatLabel>
                    <StatNumber>35%</StatNumber>
                    <StatHelpText>
                      <Progress
                        value={35}
                        colorScheme={'lavender'}
                        size={'sm'}
                      />
                    </StatHelpText>
                  </Stat>
                </Box>
              </Box>
            </Box>
            <Box className={styles.card}>
              <Box className={styles['card-content']}>
                <Heading
                  as={'h1'}
                  variant={'skill-card-title'}
                  textAlign={'right'}
                >
                  Databases
                </Heading>
                <Divider />
                <Box>
                  <Stat p={2}>
                    <StatLabel>MONGODB</StatLabel>
                    <StatNumber>75%</StatNumber>
                    <StatHelpText>
                      <Progress
                        value={75}
                        colorScheme={'lavender'}
                        size={'sm'}
                      />
                    </StatHelpText>
                  </Stat>
                  <Stat p={2}>
                    <StatLabel>SANITY</StatLabel>
                    <StatNumber>60%</StatNumber>
                    <StatHelpText>
                      <Progress
                        value={60}
                        colorScheme={'lavender'}
                        size={'sm'}
                      />
                    </StatHelpText>
                  </Stat>
                  <Stat p={2}>
                    <StatLabel>GRAPHQL</StatLabel>
                    <StatNumber>45%</StatNumber>
                    <StatHelpText>
                      <Progress
                        value={45}
                        colorScheme={'lavender'}
                        size={'sm'}
                      />
                    </StatHelpText>
                  </Stat>
                </Box>
              </Box>
            </Box>
            <Box className={styles.card}>
              <Box className={styles['card-content']}>
                <Heading
                  as={'h1'}
                  variant={'skill-card-title'}
                  textAlign={'right'}
                >
                  Extras
                </Heading>
                <Divider />
                <Box>
                  <Stat p={2}>
                    <StatLabel>JAVA</StatLabel>
                    <StatNumber>50%</StatNumber>
                    <StatHelpText>
                      <Progress
                        value={50}
                        colorScheme={'lavender'}
                        size={'sm'}
                      />
                    </StatHelpText>
                  </Stat>
                  <Stat p={2}>
                    <StatLabel>PYTHON</StatLabel>
                    <StatNumber>40%</StatNumber>
                    <StatHelpText>
                      <Progress
                        value={40}
                        colorScheme={'lavender'}
                        size={'sm'}
                      />
                    </StatHelpText>
                  </Stat>
                  <Stat p={2}>
                    <StatLabel>GOLANG</StatLabel>
                    <StatNumber>15%</StatNumber>
                    <StatHelpText>
                      <Progress
                        value={15}
                        colorScheme={'lavender'}
                        size={'sm'}
                      />
                    </StatHelpText>
                  </Stat>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Section>

      {/* <Section delay={1.4}>
        <Heading
          as={'h3'}
          variant={'section-title'}
          // fontFamily={"'Silkscreen', cursive"}
          fontFamily={"'Reem Kufi Ink', sans-serif"}
        >
          My Projects
        </Heading>
        <Container maxW={'container.sm'}>
          <SimpleGrid columns={[1, 1, 2]} spacing={10}>
            <GridItem
              id={'project-1'}
              href={'https://univlora-student-forum.vercel.app/'}
              title={'Univlora Student Forum'}
              thumbnail={'/images/works/univlora_student_forum.png'}
            >
              A student forum for the University of Vlora, Albania. It&apos;s
              built with Next.js, GraphQL, and Tailwind CSS.
            </GridItem>
          </SimpleGrid>
        </Container>
      </Section> */}

      <Section delay={1.4}>
        <Heading
          as={'h3'}
          variant={'section-title'}
          fontFamily={"'Reem Kufi Ink', sans-serif"}
        >
          On the Internet
        </Heading>
        <Container
          maxW={{
            base: 'container.sm',
            md: 'container.sm',
            lg: 'container.md'
          }}
        >
          <List
            display={'flex'}
            flexDir={{ base: 'column', md: 'row', lg: 'row' }}
            justifyContent={'space-between'}
            maxW={'inherit'}
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
      </Section>
    </Layout>
  )
}

export default Home
