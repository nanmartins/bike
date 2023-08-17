/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      dark: {
        colors: {
          primary: '#70C040',
          secondary: '#B829B1',
          highlight: '#50C6C5',
          nav: '#121212'
        }
      },
      light: {
        colors: {
          primary: '#70C040',
          secondary: '#B829B1',
          highlight: '#50C6C5',
          nav: '#F3F9E3'
        },
      },
    },
  },
})
