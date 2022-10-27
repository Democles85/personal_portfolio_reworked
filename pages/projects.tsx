import { Box } from '@chakra-ui/react'
import { Layout } from '../components/layouts/Layout'
import { ProjectCard } from '../components/ProjectItem'

const Projects = () => {
  return (
    <Layout title={'Projects'}>
      <Box
        display={'flex'}
        flexWrap={'wrap'}
        gap={'8px'}
        maxW={'inherit'}
        _hover={{ opacity: 1 }}
        onMouseMove={e => {
          document.documentElement.style.setProperty(
            '--mouse-x',
            `${e.clientX}px`
          )
          document.documentElement.style.setProperty(
            '--mouse-y',
            `${e.clientY}px`
          )
        }}
      >
        <ProjectCard
          title={'First Project'}
          href={'/projects'}
          thumbnail={'/images/test.png'}
          id={'1'}
        >
          Coming soon ...
        </ProjectCard>
      </Box>
    </Layout>
  )
}

export default Projects
