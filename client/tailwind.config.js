module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'vg1': '0 1px 2px 0 rgba(60,64,67,.3),0 2px 6px 2px rgba(60,64,67,.15)',
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
