import { Link } from "react-router-dom";
import Button from "../../ui/button/Button";
import styles from "./LaserMetods.module.sass";

const LaserMetods = () => {
  return (
    <>
      <div className={styles.metodsLaser}>
        <div className={styles.metod}>
          <h1>Современные методы лазерной коррекции</h1>
          <div className={styles.metodLabel}>
            <h2>
              Методом <span>Lasik</span>
            </h2>
            <Link className={styles.metodCompare}>Сравнение методик</Link>
          </div>
          <p className={styles.explanation}>
            Коррекция зрения с помощью лазерного луча имеет множество
            преимуществ в сравнении с оперативными методиками, что делает именно
            эту процедуру весьма привлекательной для широкого круга больных:
          </p>
          <div className={styles.Corrects}>
            <h3>Исправляет: </h3>
            <div>
              <p>Близорукость </p>
              <p>от -1 до -8 диоприй </p>
            </div>
            <div>
              <p>Астигматизм </p>
              <p>до 5 диоприй </p>
            </div>
          </div>
          <div className={styles.Corrects}>
            <Button link="record" text="Записаться на прием" />
            <p>От 14 500 Р (за оба глаза) </p>
          </div>
        </div>
        <div className={styles.imgWrapper}>
          <img src="./img/articleMetodsLaser.png" alt="Операционная" />
        </div>
      </div>

      <div className={styles.corrects}>
        <h3>Другие методы:</h3>
        <Button
          link=""
          text="Super Lasik"
          secondaryStyle
          secondaryText="От 67 000 Р"
        />
        <Button
          link=""
          text="Femto Lasik"
          secondaryStyle
          secondaryText="От 77 000 Р"
        />
        <Button link="" text="PRK" secondaryStyle secondaryText="От 45 000 Р" />
      </div>
    </>
  );
};

export default LaserMetods;
