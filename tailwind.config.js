module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: '#194185',
        link: '#038AE4',
        'light-red': '#FFF5F5',
        'light-gray': '#667085',
        'light-gray-50': '#FAFAFA',
        'black-800': '#2A2A32',
        'black-900': '#141416',
      },
      boxShadow: {
        card: '0px 16px 32px rgba(25, 65, 133, 0.1);',
      },
    },
  },
  plugins: [],
};
