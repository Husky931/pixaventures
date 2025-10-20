import { HTMLChakraProps, chakra, useColorModeValue } from '@chakra-ui/react'

export const Logo: React.FC<HTMLChakraProps<'svg'>> = (props) => {
  const bg = useColorModeValue('#1aa3b8', '#1aa3b8')
  const fg = useColorModeValue('#8952e0', '#8952e0')

  return (
    <chakra.svg
      viewBox="0 0 840 300"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Pixaventures logo"
      {...props}
    >
      <defs>
        <linearGradient id="pvGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={bg} />
          <stop offset="100%" stopColor={fg} />
        </linearGradient>
      </defs>

      {/* left-aligned, vertically centered */}
      <g transform="translate(0,40)">
        {/* P */}
        <path
          fill="url(#pvGrad)"
          fillRule="evenodd"
          d="
            M112 28
            H238
            C283 28 312 52 312 88
            C312 124 283 148 238 148
            H160
            V188
            H112
            Z

            M160 68
            H234
            C255 68 264 77 264 88
            C264 99 255 108 234 108
            H160
            Z
          "
        />

        {/* V */}
        <path
          fill="url(#pvGrad)"
          d="
            M352 28
            H400
            L460 140
            L520 28
            H560
            L476 188
            H444
            Z
          "
        />

        {/* Subtle inner highlight on the V */}
        <path
          fill={useColorModeValue('#ffffff', '#0b0b0b')}
          fillOpacity="0.08"
          d="
            M400 28
            L460 136
            L520 28
            H540
            L460 172
            L380 28
            Z
          "
        />
      </g>
    </chakra.svg>
  )
}
