import { BoxProps, chakra, shouldForwardProp } from '@chakra-ui/react'
import { motion } from 'framer-motion'

type Props = {
  children: React.ReactNode
  delay?: number
  props?: BoxProps & { [key: string]: any }
}

const StyledDiv = motion<Omit<BoxProps, 'transition'>>(
  chakra(motion.div, {
    shouldForwardProp: prop => {
      return shouldForwardProp(prop) || prop === 'transition'
    }
  })
)

const Section: React.FC<Props> = ({ children, delay = 0, ...props }: Props) => (
  <StyledDiv
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    mb={6}
    {...props}
  >
    {children}
  </StyledDiv>
)

export default Section
