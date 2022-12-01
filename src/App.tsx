import { useState } from 'react'
import GlobalStyles from './assets/style/Global.style';
import Heading from './components/atoms/Heading/Heading';

import './App.css'

function App() {
  return (
    <>
      <GlobalStyles />
      <Heading as="h6" content="Traveler Ratings" fontSize={2}/>
    </>
  )
}

export default App
