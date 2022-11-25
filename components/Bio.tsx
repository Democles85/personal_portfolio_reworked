import {
  Box,
  Container,
  Divider,
  Heading,
  useColorModeValue
} from '@chakra-ui/react'
import { useEffect } from 'react'
import styles from '../styles/bio.module.css'
import { BioSection, BioYear } from './BioComponents'
import BioData from '../utils/data.json'
import { BioAnimated } from './Section'

export const Bio = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        console.log(entry)
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.show)
        } else {
          entry.target.classList.remove(styles.show)
        }
      })
    })

    const hiddenElements = document.querySelectorAll(`.${styles.hidden}`)
    hiddenElements.forEach(element => {
      observer.observe(element)
    })
  })

  const bioData = BioData.$bio
  const circleColor = useColorModeValue('#1a202c', 'lavender.200')

  return (
    <>
      <Heading
        as={'h3'}
        variant={'section-title'}
        // fontFamily={"'Silkscreen', cursive"}
        fontFamily={"'Reem Kufi Ink', sans-serif"}
      >
        My Journey
      </Heading>
      <Container maxW={'container.sm'}>
        {bioData.map((bio, index) => (
          <Box
            key={index}
            className={styles.hidden}
            display={'flex'}
            position={'relative'}
            borderLeft={'2px gray solid'}
          >
            <Box mb={10} ml={4}>
              <Box
                position={'absolute'}
                w={2}
                h={2}
                bg={circleColor}
                borderRadius={'full'}
                mt={'0.55rem'}
                left={'-0.3rem'}
              />
            </Box>

            <BioSection>
              <BioYear>{bio.$year}</BioYear>
              {bio.description}
            </BioSection>
          </Box>
        ))}
      </Container>
    </>
  )
}
