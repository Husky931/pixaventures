import { NextSeoProps } from 'next-seo'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'

import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'Pixaventures',
    description:
      'Pixaventures LLC builds and launches online eCommerce brands. Launch #1: Lucky Panda Treats.',
  } as NextSeoProps,
  termsUrl: '/terms',
  privacyUrl: '/privacy',
  header: {
    links: [
      // {
      //   id: 'features',
      //   label: 'Features',
      // },
      // {
      //   id: 'pricing',
      //   label: 'Pricing',
      // },
      // {
      //   id: 'faq',
      //   label: 'FAQ',
      // },
      // {
      //   label: 'Login',
      //   href: '/login',
      // },
      // {
      //   label: 'Sign Up',
      //   href: '/signup',
      //   variant: 'primary',
      // },
      {
        label: 'Vibe Check',
        href: 'https://www.vibecheck.site/',
        variant: 'outline',
      },
      {
        label: 'Lucky Panda',
        href: 'https://www.luckypandatreats.com/',
        variant: 'outline',
      },
    ],
  },
  legal: {
    companyName: 'Pixaventures LLC',
    registeredAgent:
      'Northwest Registered Agent Service Inc, 30 N Gould St Ste N, Sheridan, WY 82801, USA',
    principalOffice:
      'Vanco Prke 63/6, Stip, Macedonia, Former Yugoslav Republic Of',
    contactEmail: 'customer@pixaventures.com',
    flagship: {
      label: 'Flagship: Lucky Panda Treats',
      href: 'https://luckypandatreats.com',
    },
  },
  footer: {
    copyright: (
      <>
        © {new Date().getFullYear()} {`Pixaventures LLC`}
      </>
    ),
    contact: {
      email: 'customer@pixaventures.com',
      hours: 'Monday - Friday 9 a.m. - 5 p.m. EST',
      address: {
        street: '333 Shimen Road',
        city: 'Shanghai',
        zip: '200041',
        country: 'China',
      },
    },
    resources: [
      { href: 'mailto:customer@pixaventures.com', label: 'Contact' },
      { href: '/privacy', label: 'Privacy' },
      { href: '/terms', label: 'Terms' },
      { href: 'https://luckypandatreats.com', label: 'Flagship' },
    ],
    paymentMethods: [
      { name: 'Visa', component: 'Visa' },
      { name: 'Mastercard', component: 'MasterCard' },
      { name: 'American Express', component: 'AmericanExpress' },
      { name: 'Apple Pay', component: 'ApplePay' },
    ],
  },
  signup: {
    title: 'Start building with Pixaventures',
    features: [
      {
        icon: FiCheck,
        title: 'Headless',
        description: 'Next.js + Shopify + Stripe',
      },
      {
        icon: FiCheck,
        title: 'Subscriptions',
        description: 'Appstle + lifecycle flows',
      },
      {
        icon: FiCheck,
        title: 'Analytics',
        description: 'Events, dashboards, QA',
      },
      {
        icon: FiCheck,
        title: 'Global',
        description: 'Multi-market & compliance',
      },
    ],
  },
}

export default siteConfig
