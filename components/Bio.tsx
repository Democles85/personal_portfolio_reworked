import {
  Box,
  Container,
  Divider,
  Heading,
  useColorModeValue
} from '@chakra-ui/react'
import { BioSection, BioYear } from './BioComponents'
import BioData from '../utils/data.json'

export const Bio = () => {
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
                mt={2.5}
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
