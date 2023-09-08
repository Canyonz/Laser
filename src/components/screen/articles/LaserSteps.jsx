import { useState } from "react";
import cl from "classnames";
import styles from "./LaserSteps.module.sass";

const LaserSteps = () => {
  const [curStage, setCurStage] = useState(1);

  const stages = [
    {
      step: 1,
      desc: "Диагностика",
    },
    {
      step: 2,
      desc: "Подготовка",
    },
    {
      step: 3,
      desc: "Операция",
    },
  ];

  return (
    <>
      <h1>3 шага до идеального зрения!</h1>
      <h2 className={styles.stageLabel}>
        Этапы лазерной коррекции зрения в клинике «Демо Клиника»
      </h2>
      <div className={styles.stagesSelect}>
        {stages.map((stage) => (
          <div
            className={cl(
              styles.stage,
              stage.step === curStage && styles.stageShow
            )}
            key={stage.step}
            onClick={() => setCurStage(stage.step)}
          >
            <h3>{`Этап ${stage.step}:`}</h3>
            <h3>{stage.desc}</h3>
          </div>
        ))}
      </div>
      <div
        className={cl(
          styles.stageCurrent,
          1 !== curStage && styles.stageHidden
        )}
      >
        <div className={styles.stageCurrentInfo}>
          <h3>Высококачественная диагностика - гордость “Сферы”!</h3>
          <p>
            Определение показаний к вмешательству и возможности его проведения
            происходит на приеме у офтальмолога, который оценивает состояние
            зрительной системы. Только после комплексного осмотра, проведения
            всех диагностических тестов и постановки окончательного диагноза
            можно оценить предполагаемый результат и риски лазерной коррекции
            зрения.
          </p>
          <p>
            После исключения противопоказаний к рефракционной хирургии проводят
            ряд дополнительных обследований глаза и пациент сдает анализ крови.
          </p>
          <p>
            Обязательная процедура подписание согласия – пациент должен знать,
            как проходит лазерная коррекция зрения, все возможные риски и
            последствия.
          </p>
        </div>
        <div className={styles.imgWrapper}>
          <img src="/img/articleSteps.png" alt="Диагностика зрения" />
        </div>
      </div>
      <div
        className={cl(
          styles.stageCurrent,
          2 !== curStage && styles.stageHidden
        )}
      >
        <div className={styles.stageCurrentInfo}>
          <h3>Подготовка к предоперационному диагностическому обследованию.</h3>
          <p>
            За 5-7 дней до диагностики необходимо прекратить пользоваться
            контактными линзами для того, чтобы роговица приняла свою
            изначальную форму.
          </p>
          <p>
            В день диагностики Вам будут закапывать глазные капли, расширяющие
            зрачок. Просим Вас не приезжать в клинику на личном автомобиле, т.к.
            в течение нескольких часов Вы сможете испытывать зрительный
            дискомфорт.
          </p>
        </div>
        <div className={styles.imgWrapper}>
          <img src="/img/articleSteps.png" alt="Диагностика зрения" />
        </div>
      </div>
      <div
        className={cl(
          styles.stageCurrent,
          3 !== curStage && styles.stageHidden
        )}
      >
        <div className={styles.stageCurrentInfo}>
          <h3>Проведение операции по лазерной коррекции зрения.</h3>
          <p>
            Обычно лазерная коррекция зрения проводится в течение двух недель
            после предоперационного обследования. В день операции не следует
            пользоваться косметикой. С собой нужно иметь солнцезащитные очки.
          </p>
          <p>
            Лазерная коррекция зрения будет проходить в специальной
            операционной, расположенной на 1 этаже операционно-диагностического
            модуля клиники.
          </p>
        </div>
        <div className={styles.imgWrapper}>
          <img src="/img/articleSteps.png" alt="Диагностика зрения" />
        </div>
      </div>
    </>
  );
};

export default LaserSteps;
// stages
