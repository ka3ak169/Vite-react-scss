import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";
import "../css/App.css";
import Header from "./Header";
import Banner from "./Banner";
import Achievements from "./Achievements";
import Calc from "./Calc";
import SocialIcons from "./SocialIcons";
import Contacts from "./Contacts";
import UsProducts from "./UsProducts";
import Product from "./Product";
import SliderImage from "./SliderImage";
import SliderDescription from "./SliderDescription";
import VideoPlayer from "./VideoPlayer";
import Footer from "./Footer";
import DescripOfComp from "./DescripOfComp";
import { slides, youtubeLink } from "../../public/data/products";
import productPages from "../../public/data/productPages";
import Popup from "./Popup";

function App() {
  const mainSliderRef = useRef(null);
  const thumbsSliderRef = useRef(null);

  // === Состояние для Navbar ===
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  // === Состояние для Popup ===
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Функции управления Navbar
  const toggleNavbar = () => setIsNavbarOpen((prev) => !prev);
  const closeNavbar = () => setIsNavbarOpen(false);

  // Функции управления Popup
  const togglePopup = () => setIsPopupOpen((prev) => !prev);
  const closePopup = () => setIsPopupOpen(false);

  // Отключение скролла при открытии Navbar или Popup
  useEffect(() => {
    if (isNavbarOpen || isPopupOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isNavbarOpen, isPopupOpen]);

  return (
    <>
      <div className="main">
        <Header isNavOpen={isNavbarOpen} setIsNavOpen={setIsNavbarOpen} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner togglePopup={togglePopup} />
                <DescripOfComp />
                <SliderImage
                  slides={slides}
                  mainSliderRef={mainSliderRef}
                  thumbsSliderRef={thumbsSliderRef}
                />
                <SliderDescription
                  slides={slides}
                  thumbsSliderRef={thumbsSliderRef}
                  mainSliderRef={mainSliderRef}
                />
                <VideoPlayer links={youtubeLink} />
                <Popup isPopupOpen={isPopupOpen} closePopup={closePopup} />
                <Footer />
              </>
            }
          />
          <Route
            path="/:productId"
            element={<Product product={productPages} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
