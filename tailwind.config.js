/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    gridTemplateColumns: {
      'layout': 'min-content 1fr 150px',
    },
    colors: {
      'light-redesigned': 'var(--light-bg-redesigned)'
    },
    width: {
      'sidebar-width': '220px'
    }
  },
  plugins: [

  ]
}

