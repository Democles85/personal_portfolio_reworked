import { motion, Variants } from 'framer-motion'
import Head from 'next/head'
import { GridItemStyle } from '../GridItem'

type Props = {
  children: React.ReactNode
  title: string | undefined
}

const variants: Variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: 0, y: 20, transition: { duration: 0.5 } }
}

export const Layout = ({ children, title }: Props) => (
  <motion.article
    initial={'hidden'}
    animate={'enter'}
    exit={'exit'}
    variants={variants}
  >
    <>
      {title && (
        <Head>
          <title>{title} - Sixhei Tartari</title>
          <meta name="description" content={title} />
          <meta name="twitter:title" content={title} />
          <meta property="og:title" content={title} />
        </Head>
      )}

      {children}

      <GridItemStyle />
    </>
  </motion.article>
)
