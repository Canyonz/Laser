import Button from "../../ui/button/Button";
import styles from "./LaserServices.module.sass";

const servicesList = [
  {
    id: "0",
    serv: "Консультация",
    price: "2000",
  },
  {
    id: "1",
    serv: "Диагностика зрения",
    price: "3200",
  },
  {
    id: "2",
    serv: "Лечение катаркты",
    price: "13 200",
  },
  {
    id: "3",
    serv: "Лечение глаукомы",
    price: "12 400",
  },
  {
    id: "4",
    serv: "Лазерное лечение сетчатки ",
    price: "23 000",
  },
];

const LaserServices = () => {
  return (
    <>
      <h1 id="services">Стоимость услуг:</h1>
      <ul>
        {servicesList.map((service) => (
          <li className={styles.service} key={service.id}>
            <div className={styles.serviceWrapper}>
              <h3>{service.serv}</h3>
              <div className={styles.serviceLine}></div>
              <h3>{`От ${service.price} Р`}</h3>
            </div>
          </li>
        ))}
      </ul>
      <Button link="" text="Все цены" margin="50px 0 0" />
    </>
  );
};

export default LaserServices;
