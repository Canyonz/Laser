import { Link } from "react-router-dom";
import styles from "./LaserReviews.module.sass";
import Button from "../../ui/button/Button";

const reviewsList = [
  {
    id: "0",
    name: "Никита Т.",
    img: "./img/reviews/people1.jpg",
    texts: [
      `Лазерная коррекция зрения – это невероятная процедура, которая полностью изменила мою жизнь. Я больше не зависим от очков или контактных линз, и теперь могу наслаждаться ясным зрением на протяжении всего дня. `,
      `Процедура была быстрой и безопасной, а врачи и персонал были профессиональными и заботливыми. Я только жалею, что не сделала это раньше. Рекомендую лазерную коррекцию зрения всем, кто хочет обрести свободу от очков и получить прекрасное зрение.`,
    ],
    link: "",
  },
  {
    id: "1",
    name: "Людмила Б.",
    img: "./img/reviews/people2.jpg",
    texts: [
      `Я очень довольна результатами лазерной коррекции зрения. Теперь у меня отличное зрение без необходимости использовать очки или контактные линзы.`,
      `Процедура была быстрая и безболезненная, а врачи и персонал были очень профессиональными и дружелюбными. Я уже несколько месяцев наслаждаюсь ясным и четким зрением, и я очень благодарна за это. Рекомендую лазерную коррекцию зрения всем, кто хочет избавиться от проблем с зрением и сделать свою жизнь намного удобнее.`,
    ],
    link: "",
  },
  {
    id: "2",
    name: "Ирина Л.",
    img: "./img/reviews/people3.jpg",
    texts: [
      `Лазерная коррекция зрения – это невероятная процедура, которая полностью изменила мою жизнь. Я больше не зависим от очков или контактных линз, и теперь могу наслаждаться ясным зрением на протяжении всего дня.`,
      `Процедура была быстрой и безопасной, а врачи и персонал были профессиональными и заботливыми. Я только жалею, что не сделала это раньше. Рекомендую лазерную коррекцию зрения всем, кто хочет обрести свободу от очков и получить прекрасное зрение.`,
    ],
    link: "",
  },
  {
    id: "3",
    name: "Маша",
    img: "./img/reviews/people3.jpg",
    texts: [`Что то от Маши..`],
    link: "",
  },
  {
    id: "4",
    name: "Вика",
    img: "./img/reviews/people2.jpg",
    texts: [`Что то от Вики..`],
    link: "",
  },
  {
    id: "5",
    name: "Даня",
    img: "./img/reviews/people1.jpg",
    texts: [`Что то от Дани..`],
    link: "",
  },
  {
    id: "6",
    name: "Антон",
    img: "./img/reviews/people1.jpg",
    texts: [`Что то от Антона..`],
    link: "",
  },
];

const LaserReviews = () => {
  const randomReview = (array) => {
    // return [...array]
    //   .sort(() => Math.random() - 0.5)
    //   .filter((review, index) => index < 3);

    // for (let i = array.length - 1; i > 0; i--) {
    //   let j = Math.floor(Math.random() * (i + 1));
    //   [array[i], array[j]] = [array[j], array[i]];
    // }

    let newArray = [];

    for (let index = 0; index < 3; index++) {
      const random = Math.floor(Math.random() * array.length);
      newArray.push(array[random]);
      array.splice(random, 1);
    }

    return newArray;
  };

  return (
    <>
      <h1 id="reviews" className={styles.reviewsLabel}>
        Отзывы наших пациентов
      </h1>
      <div className={styles.reviewWrapper}>
        {randomReview([...reviewsList]).map((review) => (
          <div className={styles.review} key={review.id}>
            <div className={styles.reviewName}>
              <h2>{review.name}</h2>
              <img src={review.img} alt="Фото пациента" />
            </div>
            <div className={styles.reviewText}>
              {review.texts.map((text, number) => (
                <p key={number}>{text}</p>
              ))}
            </div>
            <Link className={styles.reviewMore} link={review.link}>
              Подробнее
            </Link>
          </div>
        ))}
      </div>
      <div className={styles.buttonAll}>
        <Button link="" text="Смотреть все" secondaryStyle />
      </div>
    </>
  );
};

export default LaserReviews;
