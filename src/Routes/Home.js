import React from 'react'
import Logos from '../components/logo'
import './Home.css'

import New from '../components/new'
import Slider from '../components/Silder'
import Leaders from '../components/leaders'
import Publication from '../components/publication'
import PhotoSpeaks from '../components/PhotoSpeaks'
function Home() {
  return (
    
    <div  className='home'>
      <Logos/>
      <New/>
      <Slider/>
      <Leaders/>
      <Publication/>
      <PhotoSpeaks/>
  </div>
   
  )
}

export default Home
