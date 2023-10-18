import type {Config} from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        "propel": {
          "0%": {
            transform: 'translateX(0)'
          },
          "20%": {
            transform: 'translateX(25%)'
          },
          "40%": {
            transform: 'translateX(-25%)'
          },
          "60%": {
            transform: 'translateX(25%)'
          },
          "100%": {
            transform: 'translateX(-25%)'
          }
        },
        "propel-smoth-right": {
          "0%": {
            transform: 'translateX(-100%)'
          },
          "100%": {
            transform: 'translateX(0)'
          }
        },
        "propel-smoth-left": {
          "0%": {
            transform: 'translateX(100%)'
          },
          "100%": {
            transform: 'translateX(0)'
          }
        },
        "propelY": {
          "0%": {
            transform: 'translateY(0)'
          },
          "20%": {
            transform: 'translateY(25%)'
          },
          "40%": {
            transform: 'translateY(-25%)',
            background: ' radial-gradient(rgb(73, 73, 246), rgb(167, 94, 239), rgb(232, 232, 169));'
          },
          "60%": {
            transform: 'translateY(25%)'
          },
          "100%": {
            transform: 'translateY(25%)'
          }

        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
