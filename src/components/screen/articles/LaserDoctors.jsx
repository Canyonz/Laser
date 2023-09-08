import DoctorsSwiper from "../../ui/swipers/DoctorsSwiper";
import styles from "./LaserDoctors.module.sass";

const doctorsList = [
  {
    id: 0,
    img: "./img/doctors/Gladko.jpg",
    prof: "Хирург",
    name: "Эльмира Лоринов",
    experience: "Стаж работы 23 года",
  },
  {
    id: 1,
    img: "./img/doctors/Radikalova.jpg",
    prof: "Хирург",
    name: "Эльмира Лоринов",
    experience: "Стаж работы 23 года",
  },
  {
    id: 2,
    img: "./img/doctors/Gladko.jpg",
    prof: "Офтальмолог",
    name: "Иван Гладько",
    experience: "Стаж работы 10 лет",
  },
  {
    id: 3,
    img: "./img/doctors/Stragova.jpg",
    prof: "Офтальмолог",
    name: "Мария Стражова",
    experience: "Стаж работы 8 лет",
  },
  {
    id: 4,
    img: "./img/doctors/Gladko.jpg",
    prof: "Хирург",
    name: "Алексей Лебедев",
    experience: "Стаж работы 18 лет",
  },
  {
    id: 5,
    img: "./img/doctors/Stragova.jpg",
    prof: "Офтальмолог",
    name: "Мария Стражова",
    experience: "Стаж работы 8 лет",
  },
];

const LaserDoctors = () => {
  return (
    <>
      <h1 id="doctors" className={styles.doctorsLabel}>Врачи клиники “Демо клиника”</h1>
      <DoctorsSwiper doctors={doctorsList} />
    </>
  );
};

export default LaserDoctors;
