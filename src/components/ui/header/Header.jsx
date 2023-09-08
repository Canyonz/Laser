import Nav from "../../screen/nav/Nav";
import Button from "../button/Button";
import styles from "./Header.module.sass";

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.headerWrapper}>
        <div className={styles.header_infoWrapper}>
          <img className={styles.logo} src="./Laser.svg" alt="Логотип" />
          <pre>{`г. Нижний Новгород,
ул. Коропузова
Дом 13, этаж 24`}</pre>
          <pre>{`+7 999 348 89 95
89-00-65`}</pre>
        </div>
        <div className={styles.header_btnWrapper}>
          <div className={styles.header_btn}>
            <Button link="record" text="Позвоните мне" />
          </div>
          <img src="/icon/iconEyes.svg" alt="" />
        </div>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
