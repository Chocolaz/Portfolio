module.exports = {
  content: ['./index.html', './src/**/*.vue', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'porsche-red': '#D5001C',
        dmcPrimary: '#dc0000', // Primary red color
        dmcSecondary: '#FFD700', // Gold color in hex
        dmcBackground: '#1a1a1a' // Dark Gray background
      }
    }
  },
  plugins: []
}
