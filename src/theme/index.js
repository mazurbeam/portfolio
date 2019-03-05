import { lighten } from 'polished'

export const primary = '#260d08'
export const secondary = '#c2cdcf'
export const secondaryGrey = '#746d6b'
const background = '#dceef1'
const primaryLight = lighten(0.05, primary)

export const colors = {
  primary, // Color for buttons or links
  primaryLight: "#c2cdcf",
  bg: background, // Background color
  primaryColor: primary,
  grey: {
    dark: 'rgba(0, 0, 0, 0.9)',
    default: 'rgba(0, 0, 0, 0.7)',
    light: 'rgba(0, 0, 0, 0.5)',
    ultraLight: 'rgba(0, 0, 0, 0.25)',
  },
  white: 'white',
}

const transitions = {
  normal: '0.5s',
}

const fontSize = {
  small: '0.9rem',
}

const fontFamily = {
  serif: `'Bitter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', serif`,
  sansSerif: `'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
}

const breakpoints = {
  tablet: '1200px',
  phone: '600px',
}

const theme = {
  colors,
  transitions,
  fontSize,
  breakpoints,
  fontFamily,
  maxWidth: '1000px',
  baseFontSize: '18px',
}

export default theme
