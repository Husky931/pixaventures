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
  Tag,
  Text,
  Textarea,
  Wrap,
  useColorModeValue,
} from '@chakra-ui/react'
import { Br } from '@saas-ui/react'
import type { NextPage } from 'next'
import Image from 'next/image'
import {
  FiBarChart2,
  FiBox,
  FiCheckCircle,
  FiCpu,
  FiFileText,
  FiGlobe,
  FiMap,
  FiTrendingUp,
  FiZap,
} from 'react-icons/fi'

import * as React from 'react'

import { ButtonLink } from '#components/button-link/button-link'
import { Faq } from '#components/faq'
import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
import { Highlights, HighlightsItem } from '#components/highlights'
import { FallInPlace } from '#components/motion/fall-in-place'
import { Pricing } from '#components/pricing/pricing'
import { Testimonial, Testimonials } from '#components/testimonials'
import faq from '#data/faq'
import pricing from '#data/pricing'
import testimonials from '#data/testimonials'

const Home: NextPage = () => {
  return (
    <Box>
      <HeroSection />
      <HighlightsSection />
      <ShanghaiImageSection />
      <FeaturesSection />
      {/* <TestimonialsSection /> */}
      <PricingSection />
      <FaqSection />
      <ProductsShowcaseSection />
      <ContactSection />
    </Box>
  )
}

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Lets Build
                <Br /> Your Startup
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Pixaventures is a Shaghai based startup that builds launches and
                operates digital based businesses. <Br />
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <Stack
                // spacing={4}
                marginTop={8}
                alignItems="flex-start"
                display="flex"
                flexDirection="column"
                gap={4}
              >
                <ButtonLink
                  size="lg"
                  href="https://www.luckypandatreats.com/"
                  variant="outline"
                >
                  Flagship project -&gt; Lucky Panda
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="https://www.luckypandatreats.com/"
                  variant="outline"
                >
                  Flagship project -&gt; VibeCheck Coding
                </ButtonLink>
              </Stack>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: 'none', lg: 'block' }}
            left={{ lg: '60%', xl: '55%' }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/screenshots/list.png"
                  width={1200}
                  height={762}
                  alt="Screenshot of a ListPage in Saas UI Pro"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

const HighlightsSection = () => {
  return (
    <Highlights>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Turn your IDEA into a BRAND that sells."
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Text color="muted" fontSize="lg" align="center">
          Tell us your vision — we’ll handle everything else. From product
          concept and design to storefront, payments, logistics, and marketing,
          Pixaventures manages the full cycle so your idea becomes a global
          eCommerce business.
        </Text>
        <Wrap mt="8" justify="center">
          {[
            'brand strategy',
            'Next.js storefronts',
            'Shopify integration',
            'Stripe payments',
            'subscriptions',
            'AI integration',
            'ERP solutions',
            'UI/UX design',
            'seo & content',
            'email automation',
            'creator marketing',
            'growth optimization',
            'A/B testing',
            'multi-market setup',
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  )
}

const ShanghaiImageSection = () => {
  return (
    <Box w="100%" my={20}>
      <Box
        position="relative"
        w="100%"
        h={{ base: '340px', md: '520px', lg: '700px' }}
      >
        <Image
          src="/shanghai.jpg"
          alt="Shanghai skyline"
          fill
          style={{ objectFit: 'cover' }}
          priority={false}
        />
      </Box>
    </Box>
  )
}

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={['2xl', null, '4xl']}
          textAlign="center"
          as="p"
          alignItems="center"
        >
          Full Service
          <Br /> Launch Partner
        </Heading>
      }
      description={
        <>
          Pixaventures provides the systems to conceive, build, and operate
          online brands.
          <Br />
          <Br />
          Our expertise goes beyond code.
          <Br />
          <Br />
          Pixaventures covers the entire eCommerce lifecycle — from technology
          and design to logistics, cross-border compliance, VAT regulations and
          brand growth. We build real, operating businesses, not just websites.
        </>
      }
      align="center"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: 'Full-stack execution.',
          icon: FiBox,
          description:
            'We handle every layer—product design, Shopify headless builds, payments, and fulfillment systems—ready for global scale.',
          variant: 'inline',
        },
        {
          title: 'Cross-border logistics.',
          icon: FiGlobe,
          description:
            'Example apps in Next.JS, Electron. Including authentication, billing, example pages, everything you need to get started FAST.',
          variant: 'inline',
        },
        {
          title: 'Legal & compliance.',
          icon: FiFileText,
          description:
            'Support for entity formation, data protection, and payment regulation—keeping operations safe and audit-ready.',
          variant: 'inline',
        },
        {
          title: 'Localization & markets.',
          icon: FiMap,
          description:
            'Multi-currency, multi-language storefronts tuned for local pricing, regional marketing, and customer retention.',
          variant: 'inline',
        },
        {
          title: 'Growth operations.',
          icon: FiTrendingUp,
          description:
            'Performance marketing, creator seeding, email/SMS funnels, and offer optimization built into the stack.',
          variant: 'inline',
        },
        {
          title: 'Data & insight.',
          icon: FiBarChart2,
          description:
            'Event tracking, attribution, and dashboards that turn marketing noise into actionable business data.',
          variant: 'inline',
        },
        {
          title: 'Automation.',
          icon: FiZap,
          description:
            'Reduce manual work with integrated logistics, billing, and customer management automations.',
          variant: 'inline',
        },
        {
          title: 'Scalable tech.',
          icon: FiCpu,
          description:
            'Next.js, Shopify Storefront API, Stripe, and Appstle—all pre-integrated and production-tested.',
          variant: 'inline',
        },
        {
          title: 'Real-world experience.',
          icon: FiCheckCircle,
          description:
            'We prove every system on our own brand, Lucky Panda Treats, before deploying it for partners.',
          variant: 'inline',
        },
      ]}
    />
  )
}

const ProductsShowcaseSection = () => {
  return (
    <Box w="100%" py={20}>
      <Container maxW="container.xl">
        <Heading
          textAlign="center"
          fontSize={{ base: '2xl', md: '3xl' }}
          mb={10}
        >
          Check out our products
        </Heading>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={8}
          align="center"
          justify="center"
        >
          {/* Lucky Panda */}
          <Box
            as="a"
            href="https://www.luckypandatreats.com/"
            target="_blank"
            rel="noopener noreferrer"
            position="relative"
            w={{ base: '100%', md: '50%' }}
            h={{ base: '200px', md: '300px' }}
            borderRadius="lg"
            overflow="hidden"
          >
            <Image
              src="/lucky-panda.png"
              alt="Lucky Panda Treats"
              fill
              style={{ objectFit: 'cover' }}
            />
          </Box>

          {/* VibeCheck */}
          <Box
            as="a"
            href="https://www.vibecheck.site/"
            target="_blank"
            rel="noopener noreferrer"
            position="relative"
            w={{ base: '100%', md: '50%' }}
            h={{ base: '200px', md: '300px' }}
            borderRadius="lg"
            overflow="hidden"
          >
            <Image
              src="/vibecheck.png"
              alt="VibeCheck Coding"
              fill
              style={{ objectFit: 'cover' }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t)

        return columns
      },
      [[], [], []],
    )
  }, [])

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  )
}

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        VAT may be applicable depending on your location.
      </Text>
    </Pricing>
  )
}

const FaqSection = () => {
  return <Faq {...faq} />
}

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

    // Placeholder submit action; integrate with backend or email service later.
    console.log({ fullName, email, subject, message })
  }

  return (
    <Box bg={sectionBg} py={{ base: 16, md: 24 }} px={{ base: 4, md: 0 }}>
      <Container maxW="container.md">
        <Stack spacing={8}>
          <Stack spacing={3} textAlign="center">
            <Heading fontSize={['2xl', null, '3xl']}>Contact us</Heading>
            <Text color={mutedText}>
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
                <Input name="fullName" placeholder="Jane Doe" />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Subject</FormLabel>
                <Input name="subject" placeholder="How can we help?" />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea
                  name="message"
                  placeholder="Share a few details about your goals and timeline."
                  rows={5}
                />
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

export default Home
