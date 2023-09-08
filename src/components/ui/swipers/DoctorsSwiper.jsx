import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./DoctorsSwiper.module.sass";

const DoctorsSwiper = (props) => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        grabCursor={true}
        centeredSlides={true}
        centeredSlidesBounds={true}
        // initialSlide={1}
        className={styles.swiperWrapper}
      >
        {props.doctors.map((doctor) => (
          <SwiperSlide  key={doctor.id}>
            <div className={styles.doctorCard}>
              <img src={doctor.img} alt="Фото доктора" />
              <h3 className={styles.doctorProf}>{doctor.prof}</h3>
              <h3 className={styles.doctorName}>{doctor.name}</h3>
              <h3 className={styles.doctorExperience}>{doctor.experience}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default DoctorsSwiper;
