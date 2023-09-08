import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../ui/button/Button";
import styles from "./LaserRecord.module.sass";

const LaserRecord = () => {
  const [formattedPhoneNumber, setFormattedPhoneNumber] = useState("");
  const [isPolicy, setIsPolicy] = useState(false);

  const formatAsPhoneNumber = (event) => {
    let value = event.target.value;
    value = value.replace(/\D/g, "");
    if (value.length > 10) value = value.slice(0, 10);

    value =
      "(" +
      value.slice(0, 3) +
      ") " +
      value.slice(3, 6) +
      "-" +
      value.slice(6, 8) +
      "-" +
      value.slice(8);
    return setFormattedPhoneNumber(value);
  };

  return (
    <>
      <h1 id="record" className={styles.recordLabel}>
        Оставьте заявку на бесплатную консультацию, мы перезвоним в течении 10
        минут, и ответим на все интересующие вас вопросы
      </h1>
      <div className={styles.recordFormWrapper}>
        <h2 className={styles.recordFormLabel}>Запись на прием</h2>
        <p className={styles.recordFormUnderLabel}>
          Введите данные и мы свяжемся с Вами в ближайшее время
        </p>
        <form className={styles.recordForm}>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              placeholder="Введите имя"
              required="Введите имя"
            />
            <img
              src="/icon/people.svg"
              alt="Иконка человека"
              required="Введите телефон"
            />
          </div>
          <div className={styles.inputWrapper}>
            <input
              type="tel"
              placeholder="Введите телефон"
              value={formattedPhoneNumber}
              onChange={formatAsPhoneNumber}
            />
            <img src="/icon/phone.svg" alt="Иконка телефона" />
          </div>
          <div className={styles.recordFormAgreement}>
            <div
              className={styles.policy}
              onClick={() => setIsPolicy(!isPolicy)}
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isPolicy && (
                  <path
                    d="M29.9999 4.00003C30.501 4.4965 30.501 5.50357 29.9999 6.00003L15.9999 20C15.4987 20.4965 14.501 20.4965 13.9999 20L9.99987 16C9.49874 15.5036 9.49874 14.4965 9.99987 14C10.501 13.5036 11.4987 13.5036 11.9999 14L14.9999 17L27.9999 4.00003C28.501 3.50357 29.4987 3.50357 29.9999 4.00003Z"
                    fill="#41B0FF"
                  />
                )}
                <path
                  d="M7 6C6.66848 6 6.23442 5.76558 6 6C5.76558 6.23442 6 6.66848 6 7V24C6 24.3315 5.76558 24.7656 6 25C6.23442 25.2344 6.66848 26 7 26H24C24.3315 26 24.7656 25.2344 25 25C25.2344 24.7656 26 24.3315 26 24V16C26 15.3096 26.3096 14 27 14C27.6904 14 28 15.3096 28 16V24C28 24.9946 27.7033 26.2967 27 27C26.2967 27.7033 24.9946 28 24 28H7C6.00544 28 4.70326 27.7033 4 27C3.29674 26.2967 3 24.9946 3 24V7C3 6.00544 3.29674 4.70326 4 4C4.70326 3.29674 6.00544 3 7 3H21C21.6904 3 22 3.30964 22 4C22 4.69036 21.6904 6 21 6H7Z"
                  fill="#41B0FF"
                />
              </svg>
              <p>Соглашаюсь с&nbsp;</p>
            </div>
            <Link to="" className={styles.policyLink}>
              политикой конфидециальности
            </Link>
          </div>

          <Button
            link=""
            text="Перезвоните мне"
            width="100%"
            margin="20px 0 0"
            isDisabled={!isPolicy && true}
          />
        </form>
      </div>
    </>
  );
};

export default LaserRecord;
