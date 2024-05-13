import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Keyboard, Autoplay, EffectFade } from 'swiper/modules';
import SliderItem from './SliderItem';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/scss/scrollbar';
import 'swiper/scss/keyboard';
import 'swiper/scss/autoplay';
import 'swiper/scss/effect-fade';

const Slider = ({ slides }) => {
  console.log(slides);
  return (
    <div className='slider'>
      <Swiper
        // spaceBetween={50}
        slidesPerView={1}
        // рука курсор
        grabCursor={true}
        // настройки кнопками двигать слайды
        loop={true}
        keyboard={{
          enabled: true,
          onlyInViewport: true
        }}
        // модуль кнопки навигации
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        // скроллбар
        scrollbar={{ el: '.swiper-scrollbar', draggable: true }}
        // модель автопрокрутки
        autoplay= {{
          delay: 3000,
          disableOnInteraction: true
        }}
        speed={1000}
        // эффект полупрозрачности при смене слайда
        effect='fade'
        fadeEffect={{
          crossFade: true
        }}
        modules={[Navigation, Scrollbar, Keyboard, Autoplay, EffectFade]}
        // модуль включает точки вместо скроллбара
        // pagination={{ clickable: true, dynamicBullets: true }}        
        // modules={[Navigation, Pagination]} // Добавлен модуль Pagination
      >
        {/* стрелочки */}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        {/* скроллбар */}
        <div className="swiper-scrollbar"></div>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <SliderItem image={slide.image} description={slide.description} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    
  );
};

export default Slider;