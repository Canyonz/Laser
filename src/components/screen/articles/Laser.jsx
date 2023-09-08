import Button from "../../ui/button/Button";
import Line from "../../ui/line/Line";
import styles from "./Laser.module.sass";

const Laser = () => {
  return (
    <>
      <div className={styles.laser} id="about">
        <div className={styles.metodLasik}>
          <h1>Лазерная коррекция зрения в Нижнем Новгороде</h1>
          <h2>
            Методом <span>Lasik</span>
          </h2>
          <p className={styles.metodLasik_txt1}>
            14 500 руб. оба глаза <br /> Для жителей города и области
          </p>
          <p className={styles.metodLasik_txt2}>
            Записаться на первичный прием-консультацию к врачу-офтальмологу
          </p>
          <Button link="record" text="Запись на прием" margin="40px 0" />
          <div className={styles.metodLasik_info}>
            <p>Безопасно</p>
            <Line height="20px" />
            <p>С анестезией</p>
            <Line height="20px" />
            <p>За 10 минут</p>
          </div>
        </div>
        <div className={styles.imgWrapper}>
          <img src="/img/articleLaser.png" alt="VR очки" />
        </div>
      </div>
      <div className={styles.additions}>
        <div className={styles.additionWrapper}>
          <img src="/icon/diamond.svg" alt="" />
          <p>Офтальмологическое оборудование последнего поколения</p>
        </div>
        <Line height="200px" />
        <div className={styles.additionWrapper}>
          <img src="/icon/medal.svg" alt="" />
          <p>Высококвалифицированные офтальмохирурги и операционная бригада</p>
        </div>
        <Line height="200px" />
        <div className={styles.additionWrapper}>
          <img src="/icon/cubs.svg" alt="" />{" "}
          <p>Одноразовые сертифицированные расходные материалы</p>
        </div>
      </div>
    </>
  );
};

export default Laser;
