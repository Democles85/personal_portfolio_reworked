import {
  Box,
  Divider,
  Heading,
  Image,
  Link,
  Text,
  Tooltip,
  useColorModeValue
} from '@chakra-ui/react'
import { Layout } from '../components/layouts/Layout'
import styles from '../styles/skills.module.css'
import Section from '../components/Section'

const Projects = () => {
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
    <Layout title={'Projects'}>
      <Section delay={0.4}>
        <Heading
          as={'h3'}
          variant={'section-title'}
          fontFamily={"'Reem Kufi Ink', sans-serif"}
        >
          Projects - 2022
        </Heading>
        <Box
          className={styles.cards}
          id={'cards'}
          onMouseMove={e => {
            mouseMoveHandler(e)
          }}
          color={useColorModeValue('gray.800', 'white')}
          display={'flex'}
          flexWrap={'wrap'}
          justifyContent={'space-around'}
        >
          <Link href={'/projects/univlora-student-forum'}>
            <Tooltip label={'July - 2022'} fontSize={'lg'} bg={'lavender.200'}>
              <Box className={styles.card}>
                <Box className={styles['card-content']}>
                  <Heading
                    as={'h1'}
                    variant={'skill-card-title'}
                    textAlign={'center'}
                  >
                    Univlora Student Forum
                    <Divider mt={2} />
                  </Heading>
                  <Image
                    src={'/images/works/univlora_student_forum.png'}
                    alt={'Maths Game Thumbnail'}
                    width={'100%'}
                  />
                  <Text textAlign={'center'} mt={2}>
                    A forum / blog website used by the students to get
                    information about subjects and undertake courses or quizzes
                    about the classes they enroll.
                  </Text>
                </Box>
              </Box>
            </Tooltip>
          </Link>
          <Link href={'/projects/maths-game'}>
            <Tooltip
              label={'September - 2022'}
              fontSize={'lg'}
              bg={'lavender.200'}
            >
              <Box className={styles.card}>
                <Box className={styles['card-content']}>
                  <Heading
                    as={'h1'}
                    variant={'skill-card-title'}
                    textAlign={'center'}
                  >
                    Sound Me Youth
                    <Divider mt={2} />
                  </Heading>
                  <Image
                    src={'/images/works/sound_me_youth_thumbnail.png'}
                    alt={'Maths Game Thumbnail'}
                    width={'100%'}
                  />
                  <Text textAlign={'center'} mt={2}>
                    A landing page for the events of Sound Me Youth in the
                    captial of Albania, Tirana, about the wellbeing and mental
                    state of the Albanian youth.
                  </Text>
                </Box>
              </Box>
            </Tooltip>
          </Link>
        </Box>
      </Section>
    </Layout>
  )
}

export default Projects
