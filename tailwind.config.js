/** @type {import('tailwindcss').Config} */
module.exports = {
  important: '#_next',
  // important: true,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'railway_blue': '#0162B1',
        'primary': '#4096ff',
        'railway_gray': "#8697A8",
        'railway_error': '#d32f2f',
        'railway_303': '#303133',
        'railway_deep_red': '#7e0000'
      },
      backgroundImage: {
        'login': 'url(/WaveLine.svg)',
      },
      spacing: {
        "25": '6.25rem',
        "49": '12.25rem',
        "85": '21.25rem',
        '87': '21.875rem',
        "95": '23.75rem',
        '120': '30rem'
      },
      screens: {
        'Xfull': '1921px',
        "Xlfull": '2560px'
      }
    },
  },
  plugins: [],
}
