module.exports = {
  content: ['./index.html', './src/**/*.vue', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dmcPrimary: '#dc0000', // Primary red color
        dmcSecondary: '#FFD700', // Gold color in hex
        dmcBackground: '#1a1a1a', // Dark Gray background
        'porsche-black': '#191919',
        'porsche-red': '#d5001c',
        'porsche-silver': '#e5e5e5',
        'porsche-darkgray': '#2a2a2a'
      },
      fontFamily: {
        audiowide: ['Audiowide', 'cursive']
      }
    }
  },
  plugins: []
}
