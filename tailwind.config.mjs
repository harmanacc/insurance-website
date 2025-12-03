import tailwindcssAnimate from 'tailwindcss-animate'
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  plugins: [tailwindcssAnimate, typography],
  prefix: '',
  safelist: [
    'lg:col-span-4',
    'lg:col-span-6',
    'lg:col-span-8',
    'lg:col-span-12',
    'border-border',
    'bg-card',
    'border-error',
    'bg-error/30',
    'border-success',
    'bg-success/30',
    'border-warning',
    'bg-warning/30',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '1rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'caret-blink': 'caret-blink 1.25s ease-out infinite',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        background: 'hsl(var(--background))',
        basic: {
          bg: 'hsl(var(--basic-bg))',
          backfield: 'hsl(var(--basic-backfield))',
          'backfield-2': 'hsl(var(--basic-backfield-2))',
          'ashen-blue': 'hsl(var(--basic-ashen-blue))',
          'soft-gray': 'hsl(var(--basic-soft-gray))',
          'light-gray': 'hsl(var(--basic-light-gray))',
          'powder-gray': 'hsl(var(--basic-powder-gray))',
          'off-white': 'hsl(var(--basic-off-white))',
        },
        border: 'hsl(var(--border))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
        danger: {
          DEFAULT: 'hsl(var(--danger))',
          foreground: 'hsl(var(--danger-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        error: 'hsl(var(--error))',
        foreground: 'hsl(var(--foreground))',
        icon: {
          dark: 'hsl(var(--icon-dark))',
          light: 'hsl(var(--icon-light))',
        },
        info: {
          DEFAULT: 'hsl(var(--info))',
          50: 'hsl(var(--info-50))',
          10: 'hsl(var(--info-10))',
          5: 'hsl(var(--info-5))',
        },
        input: 'hsl(var(--input))',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          light: 'hsl(var(--primary-light))',
          5: 'hsl(var(--primary-5))',
          10: 'hsl(var(--primary-10))',
          foreground: 'hsl(var(--basic-bg))',
        },
        ring: 'hsl(var(--ring))',
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--basic-bg))',
          light: 'hsl(var(--secondary-light))',
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          foreground: 'hsl(var(--success-foreground))',
        },
        text: {
          highlight: 'hsl(var(--text-highlight))',
          lowlight: 'hsl(var(--text-lowlight))',
          normal: 'hsl(var(--text-normal))',
        },
        warning: 'hsl(var(--warning))',
      },
      fontFamily: {
        sans: ['var(--font-primary)', { fontFeatureSettings: '"ss02", "ss03"' }],
      },
      fontSize: {
        '2xs': ['0.625rem', '0.625rem'],
        xs: ['0.75rem', '0.75rem'],
        sm: ['0.875rem', '0.875rem'],
        base: ['1rem', '1rem'],
        lg: ['1.125rem', '1.125rem'],
        xl: ['1.25rem', '1.25rem'],
        '2xl': ['1.5rem', '1.5rem'],
        '3xl': [' 1.875rem', '1.875rem'],
      },
      boxShadow: {
        card: 'var(--card-box-shadow)',
        chips: 'var(--chips-box-shadow)',
        header: 'var(--header-box-shadow)',
        nav: 'var(--nav-box-shadow)',
        bubble: 'var(--bubble-box-shadow)',
        'landing-button': 'var(--landing-button-box-shadow)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'caret-blink': {
          '0%,70%,100%': { opacity: '1' },
          '20%,50%': { opacity: '0' },
        },
      },
      backgroundImage: {
        chat: 'url("/images/chat-bg.png")',
        wavy: 'url("/images/vendor/wavy-pattern.svg")',
      },
      typography: () => ({
        DEFAULT: {
          css: [
            {
              '--tw-prose-body': 'var(--text)',
              '--tw-prose-headings': 'var(--text)',
              h1: {
                fontWeight: 'normal',
                marginBottom: '0.25em',
              },
            },
          ],
        },
        base: {
          css: [
            {
              h1: {
                fontSize: '2.5rem',
              },
              h2: {
                fontSize: '1.25rem',
                fontWeight: 600,
              },
            },
          ],
        },
        md: {
          css: [
            {
              h1: {
                fontSize: '3.5rem',
              },
              h2: {
                fontSize: '1.5rem',
              },
            },
          ],
        },
      }),
    },
  },
}

export default config
