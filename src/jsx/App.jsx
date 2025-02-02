import { Routes, Route } from 'react-router-dom';
import React, { useRef, useState, useEffect } from 'react';
import '../css/App.css'
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
import Footer from './Footer'
import DescripOfComp from './DescripOfComp'
import { slides, youtubeLink } from '../../public/data/products'

function App() {
  const mainSliderRef = useRef(null);
  const thumbsSliderRef = useRef(null);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    if (isNavOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll"); // Очистка при размонтировании
    };
  }, [isNavOpen]);
  
  return (
    <>
      <div className='main'>
      <Header isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        <Routes>
          <Route path="/"
            element={
            <>
              <Banner />
              {/* <Contacts /> */}
              {/* <SocialIcons /> */}
              {/* <Achievements /> */}
              {/* <UsProducts /> */}
              <DescripOfComp/>
              <SliderImage slides={slides} mainSliderRef={mainSliderRef} thumbsSliderRef={thumbsSliderRef}/>
              <SliderDescription slides={slides} thumbsSliderRef={thumbsSliderRef} mainSliderRef={mainSliderRef}/>
              <VideoPlayer links={youtubeLink}/>
              <Footer />
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
