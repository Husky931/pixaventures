import { HTMLChakraProps, chakra, useColorModeValue } from '@chakra-ui/react'

export const Logo: React.FC<HTMLChakraProps<'span'>> = (props) => {
  const color = useColorModeValue('gray.900', 'gray.50')

  return (
    <chakra.span
      fontWeight="extrabold"
      letterSpacing="wide"
      display="inline-flex"
      alignItems="center"
      lineHeight="1"
      color={color}
      {...props}
    >
      PixaVentures
    </chakra.span>
  )
}
