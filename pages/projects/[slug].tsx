import {
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Link,
  List,
  ListItem,
  Text
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { Layout } from '../../components/layouts/Layout'
import Paragraph from '../../components/Paragraph'
import { Meta, Title } from '../../components/ProjectsItems'
import data from '../../utils/data.json'

export default function Project() {
  const router = useRouter()
  const { slug } = router.query
  const project = data.$projects.find(project => project.$slug === slug)

  // If the project is not found, show the 404 page
  if (slug !== undefined && project === undefined) router.push('/404')

  return (
    <Layout title={project?.$title}>
      <Container maxW={'container.sm'}>
        <Box>
          <Title>
            {project?.$title}
            <Badge mx={2}>
              {project?.dateStarted} - {project?.dateFinished}
            </Badge>
          </Title>
          <Paragraph>{project?.description}</Paragraph>
          <List ml={4} my={4}>
            <ListItem py={1}>
              <Meta>Stack</Meta>
              {project?.technologies.map((item, index) => (
                <span key={index}>
                  {index !== 0 && ', '}
                  {item}
                </span>
              ))}
            </ListItem>
            <ListItem
              display={'flex'}
              flexDir={'row'}
              alignItems={'center'}
              py={1}
            >
              <Meta>Source</Meta>
              <Link href={project?.source} variant={'project-source'}>
                {project?.source}
              </Link>
            </ListItem>
          </List>
        </Box>
      </Container>
    </Layout>
  )
}
