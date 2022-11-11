import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Text
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { Layout } from '../../components/layouts/Layout'
import data from '../../utils/data.json'

export default function Project() {
  const router = useRouter()
  const { slug } = router.query
  const project = data.$projects.find(project => project.$slug === slug)

  // If the project is not found, show the 404 page
  if (slug !== undefined && project === undefined) {
    router.push('/404')
    return null
  }

  return (
    <Layout title={project?.$title}>
      <Box>
        <Heading
          as={'h1'}
          textAlign={'center'}
          fontFamily={"'Reem Kufi Ink', sans-serif"}
        >
          {project?.$title}
        </Heading>
        Coming Soon ...
      </Box>
    </Layout>
  )
}
