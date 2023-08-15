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
    defaultTheme: 'dark',
    themes: {
      light: {
        colors: {
          primary: '#70C041',
          secondary: '#B829B1',
        },
      },
      dark: {
        colors: {
          primary: '#70C041',
          secondary: '#B829B1',
          highlight: '#50C6C5',
        }
      }
    },
  },
})
