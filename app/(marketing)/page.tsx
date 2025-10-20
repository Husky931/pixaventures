'use client'

import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Tag,
  Text,
  Wrap,
  useClipboard,
} from '@chakra-ui/react'
import { Br } from '@saas-ui/react'
import type { NextPage } from 'next'
import Image from 'next/image'
import {
  FiArrowRight,
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
import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from '#components/highlights'
import { FallInPlace } from '#components/motion/fall-in-place'
import { Pricing } from '#components/pricing/pricing'
import { Testimonial, Testimonials } from '#components/testimonials'
import { Em } from '#components/typography'
import faq from '#data/faq'
import pricing from '#data/pricing'
import testimonials from '#data/testimonials'

const Home: NextPage = () => {
  return (
    <Box>
      <HeroSection />

      <FeaturesSection />

      <HighlightsSection />

      {/* <TestimonialsSection /> */}

      <PricingSection />

      <FaqSection />
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
                Launching online
                <Br /> brands that work
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Pixaventures builds, launches and operates
                <Br /> digital eCommerce brands starting with <Br />
                <Flex align="center" flexWrap="wrap" gap="2">
                  our flagship brand{' '}
                  <a
                    href="https://www.luckypandatreats.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <Em>Lucky Panda Treats</Em>
                    <Image
                      src="/flagship_logo.png"
                      alt="Flagship logo"
                      width={200}
                      height={32}
                      style={{ height: '32px', width: 'auto' }}
                      priority
                    />
                  </a>
                </Flex>
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <ButtonGroup spacing={4} marginTop={8} alignItems="center">
                {/* <ButtonLink colorScheme="primary" size="lg" href="/signup">
                  Sign Up
                </ButtonLink> */}
                <ButtonLink
                  size="lg"
                  href="https://www.luckypandatreats.com/"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: 'common',
                        transitionDuration: 'normal',
                        '.chakra-button:hover &': {
                          transform: 'translate(5px)',
                        },
                      }}
                    />
                  }
                >
                  View flagship project
                </ButtonLink>
              </ButtonGroup>
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
                  src="/bg_1_pair.webp"
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

      {/* <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        mt={40}
        features={[
          {
            title: 'Accessible',
            icon: FiSmile,
            description: 'All components strictly follow WAI-ARIA standards.',
            iconPosition: 'left',
            delay: 0.6,
          },
          {
            title: 'Themable',
            icon: FiSliders,
            description:
              'Fully customize all components to your brand with theme support and style props.',
            iconPosition: 'left',
            delay: 0.8,
          },
          {
            title: 'Composable',
            icon: FiGrid,
            description:
              'Compose components to fit your needs and mix them together to create new ones.',
            iconPosition: 'left',
            delay: 1,
          },
          {
            title: 'Productive',
            icon: FiThumbsUp,
            description:
              'Designed to reduce boilerplate and fully typed, build your product at speed.',
            iconPosition: 'left',
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      /> */}
    </Box>
  )
}

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard('yarn add @saas-ui/react')

  return (
    <Highlights>
      {/* <HighlightsItem colSpan={[1, null, 2]} title="Core components">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            Get started for free with <Em>30+ open source components</Em>.
            Including authentication screens with Clerk, Supabase and Magic.
            Fully functional forms with React Hook Form. Data tables with React
            Table.
          </Text>

          <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="8"
            pe="2"
            bg="primary.900"
            _dark={{ bg: 'gray.900' }}
          >
            <Box>
              <Text color="yellow.400" display="inline">
                yarn add
              </Text>{' '}
              <Text color="cyan.300" display="inline">
                @saas-ui/react
              </Text>
            </Box>
            <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copy install command"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white"
            />
          </Flex>
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Solid foundations">
        <Text color="muted" fontSize="lg">
          We don&apos;t like to re-invent the wheel, neither should you. We
          selected the most productive and established tools in the scene and
          build Saas UI on top of it.
        </Text>
      </HighlightsItem> */}
      <HighlightsTestimonialItem
        name="Pecev Gligor"
        description="Founder"
        avatar="/founder_2.webp"
        gradient={['pink.200', 'purple.500']}
      >
        Serial entrepreneur with a background in IT, 3D design, and cross-border
        business.
        <Br />
        I’ve lived and built projects across the U.S., Europe, and China —
        learning firsthand how to bridge technology, culture, and commerce.
        <Br />
        Pixaventures is where that experience becomes a system for launching
        real online brands.
      </HighlightsTestimonialItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Let’s turn your idea into a brand that sells."
      >
        <Text color="muted" fontSize="lg">
          Tell us your vision — we’ll handle everything else. From product
          concept and design to storefront, payments, logistics, and marketing,
          Pixaventures manages the full cycle so your idea becomes a global
          eCommerce business.
        </Text>
        <Wrap mt="8">
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

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={['2xl', null, '4xl']}
          textAlign="left"
          as="p"
        >
          Not your standard
          <Br /> launch partner.
        </Heading>
      }
      description={
        <>
          Pixaventures provides the systems to conceive, build, and operate
          online brands.
          <Br />
          Our expertise goes beyond code. Pixaventures covers the entire
          eCommerce lifecycle—from technology and design to logistics,
          cross-border compliance, VAT regulations and brand growth. We build
          real, operating businesses, not just websites.
        </>
      }
      align="left"
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

export default Home
