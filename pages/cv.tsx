import { DownloadIcon } from '@chakra-ui/icons'
import { Box, Button, Heading, Tooltip, useColorMode } from '@chakra-ui/react'
import { NextPage } from 'next'

const CurriculumVitae: NextPage = () => {
  const pdfSRC = './sixhei_tartari_cv.pdf'

  return (
    <Box>
      <Heading as={'h1'} textAlign={'center'}>
        Curriculum Vitae - Sixhei Tartari
      </Heading>
      <Box pt={'2rem'} height={{ base: '564px', md: '1064px' }}>
        <Tooltip label={'Download CV'} aria-label={'Download CV'}></Tooltip>
          <Button
            as={'a'}
            href={pdfSRC}
            download={'sixhei_tartari_cv.pdf'}
            borderRadius={'full'}
            position={'absolute'}
            top={{ base: '6rem', md: '3rem' }}
            right={'-1rem'}
            zIndex={1}
            colorScheme={'lavender'}
            size={{ base: 'sm', md: 'md', lg: 'lg' }}
            padding={'0.5rem'}
            height={'40px'}
            width={'40px'}
          >
            <DownloadIcon name={'download'} />
          </Button>
        </Tooltip>
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
