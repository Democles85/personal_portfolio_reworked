import {
  Box,
  Divider,
  Heading,
  Image,
  Link,
  Text,
  Tooltip,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { Layout } from '../components/layouts/Layout'
import styles from '../styles/projects.module.css'
import { Section } from '../components/Section'
import data from '../utils/data.json'

const Projects = () => {
  const { colorMode } = useColorMode()

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

  const textColor = useColorModeValue('gray.800', 'white')
  const textColorOpacity = useColorModeValue(
    'rgba(0, 0, 0, 0.6)',
    'rgba(255, 255, 255, 0.5)'
  )

  return (
    <Layout title={'Projects'}>
      <Section delay={0.4}>
        {/* Map and filter the project years to show only once */}

        {data.$projects
          .map(project => project.year)
          .filter((value, index, self) => self.indexOf(value) === index)
          .map(year => (
            <Box key={year} mb={'2.5rem'}>
              <Heading
                as={'h3'}
                width={'fit-content'}
                variant={'section-title'}
                fontFamily={"'Reem Kufi Ink', sans-serif"}
                background={'linear-gradient(90deg, #8080ff, #e52e6b)'}
                backgroundClip={'text'}
              >
                Projects - {year}
              </Heading>
              <Box
                display={'flex'}
                flexDir={'column'}
                alignItems={{
                  base: 'center',
                  md: 'flex-start',
                  lg: 'flex-start'
                }}
              >
                <Box
                  mt={'2rem'}
                  className={styles.cards}
                  id={'cards'}
                  onMouseMove={e => {
                    mouseMoveHandler(e)
                  }}
                  color={textColor}
                >
                  {data.$projects.map(project => {
                    if (project.year === year) {
                      return (
                        <Link
                          key={project.$id}
                          href={`/projects/${project.$slug}`}
                        >
                          <Box className={styles.card}>
                            <Box className={styles['card-content']}>
                              <Text color={textColorOpacity}>
                                {project.dateFinished}
                              </Text>
                              <Heading as={'h2'} textAlign={'center'}>
                                {project.$title}
                              </Heading>
                              <Image
                                src={project.thumbnail}
                                alt={project.$title}
                                width={'100%'}
                              />
                              <Text
                                mt={2}
                                textAlign={'justify'}
                                className={styles['card-description']}
                                noOfLines={3}
                              >
                                {project.description}
                              </Text>
                            </Box>
                          </Box>
                        </Link>
                      )
                    }
                  })}
                </Box>
              </Box>
            </Box>
          ))}
      </Section>
    </Layout>
  )
}

export default Projects
