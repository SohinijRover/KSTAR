module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        viodeep: '#2A0645',
        violight: '#7840A2',
        yellow: "#FEC416",
        vioblend: '#9051BE',
        vioblend2: '#9C3FFE',
        blue: "#2FC1FD",
        boxvio:"#6771F2",
        deepBlue:"#004E92",
        purple: "#B324FE"
      },
      letterSpacing: {
        '0.8': '0.8rem',
        '0.5': '0.3rem',
      },
      zIndex: {
        '-1': '-1',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
