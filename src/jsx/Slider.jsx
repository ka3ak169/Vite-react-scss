import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      direction="horizontal" // Добавляем этот параметр
    >
      <SwiperSlide>
        <div>
          <h3>Слайд 1</h3>
          <p>Содержимое первого слайда</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <h3>Слайд 2</h3>
          <p>Содержимое второго слайда</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <h3>Слайд 3</h3>
          <p>Содержимое третьего слайда</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;