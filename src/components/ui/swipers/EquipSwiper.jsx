import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./EquipSwiper.module.sass";

const EquipSwiper = (props) => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={40}
      grabCursor={true}
      centeredSlides={true}
      centeredSlidesBounds={true}
      className={styles.swiperWrapper}
    >
      {props.equips.map((equip) => (
        <SwiperSlide className={styles.sliderWrapper} key={equip.id}>
          <img src={equip.img} alt="Фото оборудования" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default EquipSwiper;
