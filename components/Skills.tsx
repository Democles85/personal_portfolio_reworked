import {
  Box,
  Container,
  Divider,
  Heading,
  Progress,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  StyledStepper,
  useColorModeValue
} from '@chakra-ui/react'
import styles from '../styles/skills.module.css'

export const Skills = () => {
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
    <>
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
                textAlign={'center'}
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
                    <Progress value={90} colorScheme={'lavender'} size={'sm'} />
                  </StatHelpText>
                </Stat>
                <Stat p={2}>
                  <StatLabel>CSS</StatLabel>
                  <StatNumber>70%</StatNumber>
                  <StatHelpText>
                    <Progress value={70} colorScheme={'lavender'} size={'sm'} />
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
                textAlign={'center'}
              >
                Programming Languages
              </Heading>
              <Divider />
              <Box>
                <Stat p={2}>
                  <StatLabel>C</StatLabel>
                  <StatNumber>56%</StatNumber>
                  <StatHelpText>
                    <Progress value={56} colorScheme={'lavender'} size={'sm'} />
                  </StatHelpText>
                </Stat>
                <Stat p={2}>
                  <StatLabel>C++</StatLabel>
                  <StatNumber>50%</StatNumber>
                  <StatHelpText>
                    <Progress value={50} colorScheme={'lavender'} size={'sm'} />
                  </StatHelpText>
                </Stat>
                <Stat p={2}>
                  <StatLabel>C#</StatLabel>
                  <StatNumber>35%</StatNumber>
                  <StatHelpText>
                    <Progress value={35} colorScheme={'lavender'} size={'sm'} />
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
                textAlign={'center'}
              >
                Databases
              </Heading>
              <Divider />
              <Box>
                <Stat p={2}>
                  <StatLabel>MONGODB</StatLabel>
                  <StatNumber>75%</StatNumber>
                  <StatHelpText>
                    <Progress value={75} colorScheme={'lavender'} size={'sm'} />
                  </StatHelpText>
                </Stat>
                <Stat p={2}>
                  <StatLabel>SANITY</StatLabel>
                  <StatNumber>60%</StatNumber>
                  <StatHelpText>
                    <Progress value={60} colorScheme={'lavender'} size={'sm'} />
                  </StatHelpText>
                </Stat>
                <Stat p={2}>
                  <StatLabel>GRAPHQL</StatLabel>
                  <StatNumber>45%</StatNumber>
                  <StatHelpText>
                    <Progress value={45} colorScheme={'lavender'} size={'sm'} />
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
                textAlign={'center'}
              >
                Extras
              </Heading>
              <Divider />
              <Box>
                <Stat p={2}>
                  <StatLabel>JAVA</StatLabel>
                  <StatNumber>50%</StatNumber>
                  <StatHelpText>
                    <Progress value={50} colorScheme={'lavender'} size={'sm'} />
                  </StatHelpText>
                </Stat>
                <Stat p={2}>
                  <StatLabel>PYTHON</StatLabel>
                  <StatNumber>40%</StatNumber>
                  <StatHelpText>
                    <Progress value={40} colorScheme={'lavender'} size={'sm'} />
                  </StatHelpText>
                </Stat>
                <Stat p={2}>
                  <StatLabel>GOLANG</StatLabel>
                  <StatNumber>15%</StatNumber>
                  <StatHelpText>
                    <Progress value={15} colorScheme={'lavender'} size={'sm'} />
                  </StatHelpText>
                </Stat>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  )
}
