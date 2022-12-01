import { DefaultTheme } from 'styled-components'

const defaultTheme: any = {
    breakpoints: ['481px', '768px', '992px', '1201px', '1441px'],
    primary: [
      '#008489', // 0: Default
      '#399C9F', // 1: Chart
    ],
    color: [
      '#000000', // 0: Black
      '#ffffff', // 1: White
      '#FF4785', // 2: primary
      '#1EA7FD', // 3: secondary
      '#DDDDDD', // 4: tertiary
      '#333333', // 5: darkest
      '#DDDDDD', // 6: medium
      '#3b5998', // 7: Facebook
      '#55ADEE', // 8: Twitter
      '#FFF900', // 9: Snapchat
      '#dd4b39', // 10: Google Plus
      '#F61C0D', // 11: Youtube
      '#e4405f', // 12: Instagram
      '#E2E2E2', // 13: Range Color
      '#00ACEE', // 14: Github Color
      '#FFCB2B', // 15: Firebase Color
      '#484848', // 16: Link button
    ],
    warning: [
      '#F29100', // 0: Warning
    ],
    success: [
      '#00BB5D', // 0: Success
    ],
    error: [
      '#F9503D', // 0: Error
      'rgba(249, 80, 61, 0.08)', // 0: Error Light Bg
    ],
    text: [
      '#2C2C2C', // 0: Heading
      '#909090', // 1: Meta Text
      '#777777', // 2: Text Info
    ],
    border: [
      '#EBEBEB', // 0: Light border
      '#E8E8E8', // 1: Default Border
      'rgba(57, 151, 247, 0.35)', // 2: Active Light Border
      '#E6E6E6', // 3: Pricing Border
    ],
    boxShadow: [
      'rgba(26, 68, 116, 0.16)', // 0: Card hover
      'rgba(0, 0, 0, 0.16)', // 1: Carousel Button shadow
    ],
    fonts: {
      primary: 'Lato, sans-serif',
    },
    colors: {
      primary: '#FF4785',
      secondary: '#1EA7FD', // ocean
      tertiary: '#DDDDDD',
    
      orange: '#FC521F',
      gold: '#FFAE00',
      green: '#66BF3C',
      seafoam: '#37D5D3',
      purple: '#6F2CAC',
      ultraviolet: '#2A0481',
    
      // Monochrome
      lightest: '#FFFFFF',
      lighter: '#F8F8F8',
      light: '#F3F3F3',
      mediumlight: '#EEEEEE',
      medium: '#DDDDDD',
      mediumdark: '#999999',
      dark: '#666666',
      darker: '#444444',
      darkest: '#333333',
    
      border: 'rgba(0,0,0,.1)',
    
      // Status
      positive: '#66BF3C',
      negative: '#FF4400',
      warning: '#E69D00',
    }
  };
  
  export default defaultTheme;