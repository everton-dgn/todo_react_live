import { keyframes } from 'styled-components'

const T = {
  colors: {
    primary: '#CE1A35',
    secondary: '#FD5A41',
    dark: '#1a2d5a'
  },
  backgrounds: {
    bgDefault: 'background-image: linear-gradient(to right,#F7F8F9,#d6d9e1)',
    primary: 'background-image: linear-gradient(to right,#CE1A35,#FD5A41)',
    bgCards: 'background-image: linear-gradient( 182deg ,#eceff2,#fff)'
  },
  fonts: {
    sizes: {
      small: '1.6rem',
      medium: '2rem',
      large: '3rem'
    },
    weights: {
      fine: '400',
      normal: '500',
      bold: '600'
    }
  },
  animations: {
    zoom: keyframes`
      to {
        transform: scale(1);
      }
    `
  },
  breakPoints: (width: number) => `@media screen and (min-width: ${width}px)`
}

export default T
