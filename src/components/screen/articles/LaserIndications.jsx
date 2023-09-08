import Button from "../../ui/button/Button";
import styles from "./LaserIndications.module.sass";

const LaserIndications = () => {
  return (
    <div id="stock" className={styles.indicationsLaser}>
      <div className={styles.indicationsInfo}>
        <h1>Показания для проведения операции лазерной коррекции</h1>
        <div className={styles.disease}>
          <h3>Близорукость до -12 диоптрий</h3>
          <p>
            Нарушение рефракции, при котором пациент хуже видит вдаль. Также
            называется миопией.
          </p>
        </div>
        <div className={styles.disease}>
          <h3>Дальнозоркость до +6 диоптрий</h3>
          <p>
            Нарушение рефракции, при котором пациент видит плохо вблизи и вдаль.
            Также называется гиперметропией. При дальнозоркости глаза быстро
            устают.
          </p>
        </div>
        <div className={styles.disease}>
          <h3>Астигматизм до ±6 диоптрий</h3>
          <p>
            Астигматизм часто сопутствует миопии и гиперметропии и обусловлен
            разной преломляющей силой оптических меридианов. Глаз хуже видит и
            устает, может болеть голова.
          </p>
        </div>
        <div className={styles.more}>
          <h3>Узнать о всех противопоказаниях </h3>
          <Button link="" text="Подробнее..." secondaryStyle />
        </div>
      </div>
      <div className={styles.imgWrapper}>
        <img src="./img/articleIndicationsLaser.svg" alt="Кривые круги" />
      </div>
    </div>
  );
};

export default LaserIndications;
