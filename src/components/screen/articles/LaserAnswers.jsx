import { Link } from "react-router-dom";
import Button from "../../ui/button/Button";
import { ReactComponent as Arrow } from "../../../assets/img/arrow.svg";
import { useState } from "react";
import cl from "classnames";
import styles from "./LaserAnswers.module.sass";

const questiosList = [
  {
    id: 0,
    label: "Надо ли как то готовиться к операции?",
    texts: [
      `Лазерная коррекция помогает улучшить зрение при близорукости,
дальнозоркости и астигматизме. Она подходит людям от 18 до 40
лет со стабильным зрением. Если за последние два года ваши
диоптрии изменились, специалисты не советуют проводить операцию.`,
    ],
    link: "",
  },
  {
    id: 1,
    label: "И как её делают?",
    texts: [
      `Лазерная коррекция помогает улучшить зрение при близорукости,
дальнозоркости и астигматизме. Она подходит людям от 18 до 40
лет со стабильным зрением. Если за последние два года ваши
диоптрии изменились, специалисты не советуют проводить операцию.`,
    ],
    link: "",
  },
  {
    id: 2,
    label: "Можно ли мне делать лазерную коррекцию зрения?",
    texts: [
      `Лазерная коррекция помогает улучшить зрение при близорукости,
дальнозоркости и астигматизме. Она подходит людям от 18 до 40
лет со стабильным зрением. Если за последние два года ваши
диоптрии изменились, специалисты не советуют проводить операцию.`,
      `Кроме того, есть и другие факторы, при которых делать лазерную
коррекцию также не рекомендуют:`,
    ],
    link: "",
  },
  {
    id: 3,
    label: "Мне будет больно?",
    texts: [
      `Лазерная коррекция помогает улучшить зрение при близорукости,
дальнозоркости и астигматизме. Она подходит людям от 18 до 40
лет со стабильным зрением. Если за последние два года ваши
диоптрии изменились, специалисты не советуют проводить операцию.`,
    ],
    link: "",
  },
  {
    id: 4,
    label: "Я буду хорошо видеть сразу после операции?",
    texts: [
      `Лазерная коррекция помогает улучшить зрение при близорукости,
дальнозоркости и астигматизме. Она подходит людям от 18 до 40
лет со стабильным зрением. Если за последние два года ваши
диоптрии изменились, специалисты не советуют проводить операцию.`,
    ],
    link: "",
  },
];

const LaserAnswers = () => {
  const [currentQuestion, setCurrentQuestion] = useState("");

  const handleShowAnswer = (id) => {
    id === currentQuestion ? setCurrentQuestion("") : setCurrentQuestion(id);
  };

  return (
    <>
      <div className={styles.answersLaser}>
        <div className={styles.accordeonWrapper}>
          <h1>Вопросы и ответы:</h1>
          {questiosList.map((quest) => (
            <div className={styles.question} key={quest.id}>
              <div
                className={cl(
                  styles.questionLabel,
                  quest.id === currentQuestion && styles.questionSelect
                )}
                onClick={() => handleShowAnswer(quest.id)}
              >
                <h3>{quest.label}</h3>
                <Arrow className={styles.arrow} />
              </div>
              <div
                className={cl(
                  styles.answer,
                  quest.id === currentQuestion
                    ? styles.answerShow
                    : styles.answerHidden
                )}
              >
                {quest.texts.map((text, number) => (
                  <p className={styles.answerText} key={number}>
                    {text}
                  </p>
                ))}
                <Link className={styles.answerLink} to={quest.link}>
                  Подробнее
                </Link>
              </div>
            </div>
          ))}

          <Button
            link=""
            text="Смотреть все"
            secondaryStyle
            margin="40px 0 0"
          />
        </div>
        <div className={styles.imgWrapper}>
          <img src="./img/articleAnswers.svg" alt="Кривые круги" />
        </div>
      </div>
    </>
  );
};

export default LaserAnswers;
