'use client'

import {
  Box,
  Button,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from '@chakra-ui/react'
import { Auth } from '@saas-ui/auth'
import { Link } from '@saas-ui/react'
import { NextPage } from 'next'
import NextLink from 'next/link'
import { FaGithub, FaGoogle } from 'react-icons/fa'

import { useRef, useState } from 'react'

import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { PageTransition } from '#components/motion/page-transition'
import { Section } from '#components/section'
import siteConfig from '#data/config'

const providers = {
  google: {
    name: 'Google',
    icon: FaGoogle,
  },
  github: {
    name: 'Github',
    icon: FaGithub,
    variant: 'solid',
  },
}

const Login: NextPage = () => {
  const [showInviteMessage, setShowInviteMessage] = useState(false)
  const authRef = useRef<any>(null)

  const handleSignupSuccess = () => {
    setShowInviteMessage(true)
    // Try to hide any default success messages
    if (authRef.current) {
      // Look for success messages in the Auth component and hide them
      const successElements = authRef.current.querySelectorAll(
        '[data-testid*="success"], .chakra-alert, [role="alert"]',
      )
      successElements.forEach((element: any) => {
        element.style.display = 'none'
      })
    }
  }

  const closeModal = () => {
    setShowInviteMessage(false)
  }

  return (
    <Section height="100vh" innerWidth="container.xl">
      <BackgroundGradient
        zIndex="-1"
        width={{ base: 'full', lg: '50%' }}
        left="auto"
        right="0"
        borderLeftWidth="1px"
        borderColor="gray.200"
        _dark={{
          borderColor: 'gray.700',
        }}
      />
      <PageTransition height="100%" display="flex" alignItems="center">
        <Stack
          width="100%"
          alignItems={{ base: 'center', lg: 'flex-start' }}
          spacing="20"
          flexDirection={{ base: 'column', lg: 'row' }}
        >
          <Box pe="20">
            <NextLink href="/">
              <Box
                as={siteConfig.logo}
                width="160px"
                ms="4"
                mb={{ base: 0, lg: 16 }}
              />
            </NextLink>
            <Features
              display={{ base: 'none', lg: 'flex' }}
              columns={1}
              iconSize={4}
              flex="1"
              py="0"
              ps="0"
              maxW={{ base: '100%', xl: '80%' }}
              features={siteConfig.signup.features.map((feature) => ({
                iconPosition: 'left',
                variant: 'left-icon',

                ...feature,
              }))}
            />
          </Box>
          <Center height="100%" flex="1">
            <Box width="container.sm" pt="8" px="8">
              <Box ref={authRef}>
                <Auth
                  view="signup"
                  title={siteConfig.signup.title}
                  // providers={providers}
                  loginLink={<Link href="/login">Log in</Link>}
                  onSuccess={handleSignupSuccess}
                  // Try to disable default success behavior
                  // successMessage=""
                  // showSuccessMessage={false}
                >
                  <Text color="muted" fontSize="sm">
                    By signing up you agree to our{' '}
                    <Link href={siteConfig.termsUrl} color="white">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link href={siteConfig.privacyUrl} color="white">
                      Privacy Policy
                    </Link>
                  </Text>
                </Auth>
              </Box>
            </Box>
          </Center>
        </Stack>
      </PageTransition>

      {/* Popup Modal */}
      <Modal isOpen={showInviteMessage} onClose={closeModal} isCentered>
        <ModalOverlay />
        <ModalContent mx="4" maxW="md">
          <ModalHeader textAlign="center">
            <Text fontSize="lg" fontWeight="semibold">
              Currently signups are invite only
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb="6" textAlign="center">
            <Text color="gray.600" _dark={{ color: 'gray.300' }}>
              Thank you for your interest. We'll be in touch when we're ready to
              open signups to the public.
            </Text>
            <Button mt="4" colorScheme="blue" onClick={closeModal} width="full">
              Got it
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Section>
  )
}

export default Login
