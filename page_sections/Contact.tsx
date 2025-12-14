'use client'

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

import * as React from 'react'

const ContactSection = () => {
  const sectionBg = useColorModeValue('gray.50', 'gray.900')
  const cardBg = useColorModeValue('white', 'gray.800')

  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [status, setStatus] = React.useState<'idle' | 'success' | 'error'>(
    'idle',
  )

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event,
  ) => {
    event.preventDefault()
    setIsSubmitting(true)
    setStatus('idle')

    const form = event.currentTarget
    const formData = new FormData(form)

    const payload = {
      fullName: String(formData.get('fullName') || ''),
      email: String(formData.get('email') || ''),
      subject: String(formData.get('subject') || ''),
      message: String(formData.get('message') || ''),
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error('Submission failed')

      setStatus('success')
      form.reset()
    } catch (e) {
      console.error(e)
      setStatus('error')
    } finally {
      setIsSubmitting(false)
    }
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

              <Button
                type="submit"
                colorScheme="purple"
                size="lg"
                isLoading={isSubmitting}
              >
                Send message
              </Button>

              {status === 'success' && (
                <Text color="green.500">Message sent successfully.</Text>
              )}
              {status === 'error' && (
                <Text color="red.500">
                  Error sending message. Please try again.
                </Text>
              )}
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export default ContactSection
