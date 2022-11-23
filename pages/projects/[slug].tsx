import { ExternalLinkIcon } from '@chakra-ui/icons'
import {
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Icon,
  Image,
  Link,
  List,
  ListItem,
  Text
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { HiExternalLink } from 'react-icons/hi'
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
      {/* SVG Painter */}
      <svg key={'svg__painter'} width={'0'} height={'0'}>
        <linearGradient
          id={'svg__painter'}
          x1={'100%'}
          y1={'0%'}
          x2={'0%'}
          y2={'0%'}
          gradientUnits={'userSpaceOnUse'}
        >
          <stop offset={'0%'} stopColor={'#FF63C3'} />
          <stop offset={'100%'} stopColor={'#3D7AED'} />
        </linearGradient>
      </svg>
      {/* SVG Painter */}
      <Box paddingY={'1rem'}>
        <Image
          src={project?.thumbnail}
          alt={project?.$title}
          loading={'lazy'}
          borderRadius={'lg'}
          border={'2px solid rgba(255, 255, 255, 0.5)'}
          boxShadow={'0 0 10px rgba(0, 0, 0, 0.5)'}
        />
      </Box>
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
            <ListItem py={'0.25rem'}>
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
              py={'0.25rem'}
            >
              <Meta>Source</Meta>
              <Link
                href={project?.source}
                variant={'project-source'}
                target={'_blank'}
              >
                Github
              </Link>
              <HiExternalLink
                style={{
                  width: '14px',
                  marginBottom: '0.25rem',
                  marginLeft: '0.2rem',
                  fill: 'url(#svg__painter)'
                }}
              />
            </ListItem>
          </List>
        </Box>
      </Container>
    </Layout>
  )
}
