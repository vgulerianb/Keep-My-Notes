module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'vg1': '0 1px 2px 0 rgba(60,64,67,.3),0 2px 6px 2px rgba(60,64,67,.15)',
      },
      gridTemplateColumns: {
        vg1: 'repeat(auto-fill,minmax(270px,1fr))'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
