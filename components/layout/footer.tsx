import {
  Box,
  BoxProps,
  Container,
  Divider,
  Flex,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import NextLink from 'next/link'

import AmericanExpress from '#components/icons/AmericanExpress'
import ApplePay from '#components/icons/ApplePay'
import MasterCard from '#components/icons/MasterCard'
import Visa from '#components/icons/Visa'
import siteConfig from '#data/config'

const PaymentIcon = ({ name }: { name: string }) => {
  switch (name) {
    case 'Visa':
      return <Visa />
    case 'Mastercard':
      return <MasterCard />
    case 'American Express':
      return <AmericanExpress />
    case 'Apple Pay':
      return <ApplePay />
    default:
      return null
  }
}

export interface FooterProps extends BoxProps {
  columns?: number
}

export const Footer: React.FC<FooterProps> = (props) => {
  const { columns = 3, ...rest } = props
  const { footer } = siteConfig

  return (
    <Box bg="white" _dark={{ bg: 'gray.900' }} {...rest}>
      <Container maxW="container.2xl" px={['8', '20', '40']} py="8">
        <SimpleGrid
          columns={[1, null, columns]}
          spacing={8}
          templateColumns={['1fr', null, '1fr 1fr 1fr']} // This forces equal width columns
          gap={[4, null, 12]} // Increased gap for better spacing
        >
          {/* Contact Section */}
          <VStack spacing="4" align="flex-start" justify="flex-start">
            <Text fontWeight="semibold" fontSize="lg" color="fg">
              Contact
            </Text>
            <VStack spacing="2" align="flex-start">
              <Link
                href={`mailto:${footer.contact.email}`}
                fontSize="sm"
                color="muted"
                _hover={{ color: 'inherit' }}
              >
                {footer.contact.email}
              </Link>
              <Text fontSize="sm" color="muted">
                {footer.contact.hours}
              </Text>
              <VStack spacing="1" align="flex-start">
                <Text fontSize="sm" color="muted">
                  {footer.contact.address.street}
                </Text>
                <Text fontSize="sm" color="muted">
                  {footer.contact.address.city}
                </Text>
                <Text fontSize="sm" color="muted">
                  {footer.contact.address.state} {footer.contact.address.zip}
                </Text>
                <Text fontSize="sm" color="muted">
                  {footer.contact.address.country}
                </Text>
              </VStack>
            </VStack>
          </VStack>

          {/* Resources Section */}
          <VStack spacing="4" align="flex-start" justify="flex-start">
            <Text fontWeight="semibold" fontSize="lg" color="fg">
              Resources
            </Text>
            <VStack spacing="2" align="flex-start">
              {footer.resources.map(({ href, label }) => (
                <Text key={href} fontSize="sm" color="muted">
                  {label}
                </Text>
              ))}
            </VStack>
          </VStack>

          <VStack spacing="4" align="flex-start" justify="flex-start">
            <Box as={siteConfig.logo} width="180px" />

            <VStack spacing="3" align="flex-start">
              <Text fontWeight="semibold" fontSize="sm" color="fg">
                Accepted Payments
              </Text>
              <HStack spacing="3">
                {footer.paymentMethods.map((payment) => (
                  <Box key={payment.name} opacity={0.7}>
                    <PaymentIcon name={payment.name} />
                  </Box>
                ))}
              </HStack>
            </VStack>
          </VStack>
        </SimpleGrid>

        <Divider my="6" opacity={0.2} />

        <Flex
          justify="space-between"
          align="center"
          direction={['column', 'row']}
          gap={2}
        >
          <Box>{siteConfig.footer.copyright}</Box>
          {/* <Text fontSize="xs" color="muted">
            Operating globally • U.S. entity jurisdiction
          </Text> */}
        </Flex>
      </Container>
    </Box>
  )
}
