import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
  useColorModeValue,
} from '@chakra-ui/react'

const ContactSection = () => {
  const sectionBg = useColorModeValue('gray.50', 'gray.900')
  const cardBg = useColorModeValue('white', 'gray.800')
  const mutedText = useColorModeValue('muted', 'gray.300')

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const fullName = formData.get('fullName')
    const email = formData.get('email')
    const subject = formData.get('subject')
    const message = formData.get('message')
  }

  return (
    <Box bg={sectionBg} py={{ base: 16, md: 24 }} px={{ base: 4, md: 0 }}>
      <Container maxW="container.md">
        <Stack spacing={8}>
          <Stack spacing={3} textAlign="center">
            <Heading fontSize={['2xl', null, '3xl']}>Contact us</Heading>
            <Text color="muted" fontSize="lg" align="center">
              Tell us about your project and we&apos;ll get back in the same
              business day.
            </Text>
          </Stack>

          <Box
            as="form"
            onSubmit={handleSubmit}
            bg={cardBg}
            boxShadow="md"
            borderRadius="lg"
            p={{ base: 6, md: 8 }}
          >
            <Stack spacing={6}>
              <FormControl isRequired>
                <FormLabel>Full name</FormLabel>
                <Input name="fullName" />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" name="email" />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Subject</FormLabel>
                <Input name="subject" />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea name="message" rows={5} />
              </FormControl>

              <Button type="submit" colorScheme="purple" size="lg">
                Send message
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export default ContactSection
