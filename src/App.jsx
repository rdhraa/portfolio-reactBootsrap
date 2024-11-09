import React from 'react'
import Navigation from './Components/Navigation'
import Body from './Components/Body'
import Contactform from './Components/Contactform';
import More from './Components/More'
const App = () => {
  return (
    <div>
      <Navigation/>
      <Body/>
      <Contactform/>
      <More/>
    </div>
  )
}

export default App
