import { Routes, Route } from 'react-router-dom';
import React, { useRef } from 'react';
import '../css/App.css'
import './Header'
import Header from './Header'
import Banner from './Banner'
import Achievements from './Achievements'
import Calc from './Calc'
import SocialIcons from './SocialIcons'
import Contacts from './Contacts'
import UsProducts from './UsProducts'
import Product from './Product'
import SliderImage from './SliderImage'
import SliderDescription from './SliderDescription'
import VideoPlayer from './VideoPlayer'
import { slides, youtubeLink } from '../../public/data/products'

// console.log(slides);



function App() {
  const mainSliderRef = useRef(null);
  const thumbsSliderRef = useRef(null);
  
  return (
    <>
      <div className='main'>
        {/* <Header /> */}
        <Routes>
          <Route path="/"
            element={
            <>
              <Banner />
              {/* <Contacts /> */}
              <SocialIcons />
              {/* <Achievements /> */}
              <UsProducts />
              <SliderImage slides={slides} mainSliderRef={mainSliderRef} thumbsSliderRef={thumbsSliderRef}/>
              <SliderDescription slides={slides} thumbsSliderRef={thumbsSliderRef} mainSliderRef={mainSliderRef}/>
              <VideoPlayer links={youtubeLink}/>
              {/* <Calc /> */}
            </>  
            }
          />
          {/* <Route
            path="contacts"
            element={
              <>
                <Banner />
                <Achievements />
                <Calc />
              </>  
              }
          /> */}
        </Routes>
      </div>
    </>
  )
}

export default App
