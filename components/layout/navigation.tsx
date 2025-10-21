'use client'

import { HStack, useDisclosure, useUpdateEffect } from '@chakra-ui/react'
import { useScrollSpy } from 'hooks/use-scrollspy'
import { usePathname } from 'next/navigation'

import * as React from 'react'

import { MobileNavButton } from '#components/mobile-nav'
import { MobileNavContent } from '#components/mobile-nav'
import { NavLink } from '#components/nav-link'
import siteConfig from '#data/config'

import ThemeToggle from './theme-toggle'

const Navigation: React.FC = () => {
  const mobileNav = useDisclosure()
  const path = usePathname()

  // 1) Defensive read of header links
  const headerLinks = siteConfig.header?.links ?? []

  // 2) Scroll spy only for links that have an id
  const activeId = useScrollSpy(
    headerLinks.filter((l: any) => l.id).map((l: any) => `[id="${l.id}"]`),
    { threshold: 0.75 },
  )

  // 3) Properly typed ref
  const mobileNavBtnRef = React.useRef<HTMLButtonElement | null>(null)

  useUpdateEffect(() => {
    mobileNavBtnRef.current?.focus()
  }, [mobileNav.isOpen])

  return (
    <HStack spacing="2" flexShrink={0}>
      {headerLinks.map(({ href, id, ...props }: any, i: number) => {
        const to = href || `/#${id}`
        const isActive =
          (id && activeId === id) ||
          (href && path ? path.startsWith(href) : false) // avoid RegExp pitfalls

        return (
          <NavLink
            display={['none', null, 'block']}
            href={to}
            key={i}
            isActive={!!isActive}
            {...props}
          >
            {props.label}
          </NavLink>
        )
      })}

      <ThemeToggle />

      <MobileNavButton
        ref={mobileNavBtnRef}
        aria-label="Open Menu"
        onClick={mobileNav.onOpen}
      />
      <MobileNavContent isOpen={mobileNav.isOpen} onClose={mobileNav.onClose} />
    </HStack>
  )
}

export default Navigation
