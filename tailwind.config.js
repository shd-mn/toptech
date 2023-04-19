module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '0.5rem',
      },
      colors: {
        primary: '#18181b',
        hover: '#FAD02C',
      },

      backgroundImage: {
        'hero-pattern': "url('/images/kv-bg.jpg')",
      }
    },
  },
  plugins: [],
};
