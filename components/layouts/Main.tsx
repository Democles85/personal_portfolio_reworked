import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Container, Box } from '@chakra-ui/react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Loader from '../ObjectLoader'

type Props = {
  children: React.ReactNode
  router: any
}

const ComputerModel = dynamic(() => import('../ComputerModel') as any, {
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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
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
        <Box position={'relative'} zIndex={'0'}>
          <ComputerModel />
        </Box>
        <Box mt={['0rem', '2rem', '5rem']} position={'relative'} zIndex={'1'}>
          {children}
        </Box>
      </Container>
      <Footer />
    </Box>
  )
}

export default Main
