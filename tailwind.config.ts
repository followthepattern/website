import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './mdx-components.tsx',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        18: '4.5rem',
        112: '28rem',
        120: '30rem',
      },
      screens: {  
        'calendly': '1100px',
      },
    },
  },
  plugins: [],
}
export default config
