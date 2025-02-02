import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Keyboard, Autoplay, EffectFade, Controller } from 'swiper/modules';
import SliderItem2 from './SliderItem2';
import 'swiper/scss';
// import 'swiper/scss/navigation';
// import 'swiper/scss/pagination';
// import 'swiper/scss/scrollbar';
// import 'swiper/scss/keyboard';
// import 'swiper/scss/autoplay';
// import 'swiper/scss/effect-fade';
// import 'swiper/scss/controller';

const SliderDescription = ({ slides, thumbsSliderRef, mainSliderRef }) => {
  useEffect(() => {
    if (mainSliderRef.current && thumbsSliderRef.current) {
      mainSliderRef.current.controller.control = thumbsSliderRef.current;
      thumbsSliderRef.current.controller.control = mainSliderRef.current;
    }
  }, [mainSliderRef, thumbsSliderRef]);


  // console.log(slides);
  return (
    <div className='slider-description'>
      <Swiper
        // spaceBetween={50}
        slidesPerView={1}
        // рука курсор
        grabCursor={true}
        // настройки кнопками двигать слайды
        // loop={true}
        // keyboard={{
        //   enabled: true,
        //   onlyInViewport: true
        // }}
        // модуль кнопки навигации
        // navigation={{
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // }}
        // скроллбар
        // scrollbar={{ el: '.swiper-scrollbar', draggable: true }}
        // модель автопрокрутки
        // autoplay= {{
        //   delay: 3000,
        //   disableOnInteraction: true
        // }}
        // speed={1000}
        // эффект полупрозрачности при смене слайда
        // effect='fade'
        // fadeEffect={{
        //   crossFade: true
        // }}
        // модуль связывающий 2 свайпера
        controller={{ control: mainSliderRef.current }}
        onSwiper={(swiper) => (thumbsSliderRef.current = swiper)}
        breakpoints={{
          480: {
            slidesPerView: 1, // Для экранов шириной от 480px — один слайд
          },
          768: {
            slidesPerView: 2, // Для экранов шириной от 768px — два слайда
          },
          1024: {
            slidesPerView: 3, // Для экранов шириной от 1024px — три слайда
          },
        }}

        modules={[Autoplay, EffectFade, Controller]}


        // модуль включает точки вместо скроллбара
        // pagination={{ clickable: true, dynamicBullets: true }}        
        // modules={[Navigation, Pagination]} // Добавлен модуль Pagination
      >
        {/* стрелочки */}
        {/* <div className="swiper-button-prev"></div> */}
        {/* <div className="swiper-button-next"></div> */}
        {/* скроллбар */}
        {/* <div className="swiper-scrollbar"></div> */}
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <SliderItem2 image={slide.image} description={slide.description} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    
  );
};

export default SliderDescription;