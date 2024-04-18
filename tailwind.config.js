/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms'

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    forms ('@tailwindcss/aspect-ratio')
  ]
}
content: [
  "./src/**/*.{js,jsx,ts,tsx}"
]
theme: {};



