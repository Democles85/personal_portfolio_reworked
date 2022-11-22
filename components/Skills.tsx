import {
  Box,
  Code,
  Container,
  Divider,
  Heading,
  Progress,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  StyledStepper,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import data from '../utils/data.json'
import styles from '../styles/skills.module.css'

export const Skills = () => {
  // Function to get the mouse position and change the position of the circle property
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

  const skills = data.$skills
  const skillsDividerColor = useColorModeValue(
    'rgba(37, 37, 255, 1)',
    'rgba(255,255,255, 0.5)'
  )

  return (
    <>
      <Heading
        as={'h3'}
        variant={'section-title'}
        // fontFamily={"'Silkscreen', cursive"}
        fontFamily={"'Reem Kufi Ink', sans-serif"}
      >
        My Skills
      </Heading>
      <Box mb={'1rem'} opacity={0.8}>
        <Code borderRadius={'lg'} fontStyle={'italic'} fontSize={'12px'}>
          <Text p={'0.3rem'}>
            Note: The calculations are done while keeping in mind my experience
            with the particular language or skill and the time I have used them
            for. All of them are based on other people feedbacks.
          </Text>
        </Code>
      </Box>
      <Container maxW={'container.lg'}>
        <Box
          className={styles.cards}
          id="cards"
          onMouseMove={e => {
            mouseMoveHandler(e)
          }}
          color={useColorModeValue('gray.800', 'white')}
        >
          {skills.map((skill, index) => (
            <Box className={styles.card} key={index}>
              <Box className={styles['card-content']}>
                <Heading
                  as={'h1'}
                  variant={'skill-card-title'}
                  textAlign={'center'}
                >
                  {skill.$title}
                </Heading>
                <Divider
                  style={{
                    borderColor: `${skillsDividerColor}`,
                    borderWidth: '0.07rem'
                  }}
                />
                <Box>
                  {skill.$content.map((content, index) => (
                    <Stat key={index} p={2}>
                      <StatLabel>{content.$title}</StatLabel>
                      <StatNumber>{content.percentage}%</StatNumber>
                      <StatHelpText>
                        <Progress
                          value={content.percentage}
                          colorScheme={'lavender'}
                          size={'sm'}
                        />
                      </StatHelpText>
                    </Stat>
                  ))}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </>
  )
}
