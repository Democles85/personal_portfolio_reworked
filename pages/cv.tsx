import { Box, Heading, useColorMode } from '@chakra-ui/react'
import { NextPage } from 'next'

const CurriculumVitae: NextPage = () => {
  const pdfSRC = './sixhei_tartari_cv.pdf'

  return (
    <Box>
      <Heading as={'h1'} textAlign={'center'}>
        Curriculum Vitae - Sixhei Tartari
      </Heading>
      <Box pt={'2rem'} height={{ base: '564px', md: '1064px' }}>
        <iframe
          src={`${pdfSRC}#toolbar=0`}
          width={'100%'}
          height={'100%'}
          style={{
            borderRadius: '10px',
            border: '2px solid rgba(255, 255, 255, 0.5)',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'
          }}
        />
      </Box>
    </Box>
  )
}

export default CurriculumVitae
