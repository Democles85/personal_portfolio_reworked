import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Container, Box } from '@chakra-ui/react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Loader from '../DogLoader'

type Props = {
  children: React.ReactNode
  router: any
}

const DogFigurine = dynamic(() => import('../DogFigurine') as any, {
  ssr: false,
  loading: () => <Loader />
})

const Main = ({ children, router }: Props) => {
  return (
    <Box>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Sixhei's homepage" />
        <meta name="author" content="Sixhei Tartari" />
        <meta name="author" content="sixheitartari" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link
          rel="shortcut icon"
          href="images/favicon.ico"
          type="image/x-icon"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@LeJhin1" />
        <meta name="twitter:creator" content="@LeJhin1" />
        <meta name="twitter:image" content="/card.png" />
        <meta property="og:site_name" content="Sixhei Tartari's Homepage" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <title>Sixhei Tartari - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={20} minH={'100vh'}>
        {/* Check if the router path is the 404 page and do not display the dog figurine */}
        <DogFigurine />
        <Box mt={['0rem', '2rem', '5rem']}>{children}</Box>
      </Container>
      <Footer />
    </Box>
  )
}

export default Main
