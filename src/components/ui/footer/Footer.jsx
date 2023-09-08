import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "../../../assets/img/arrow.svg";
import styles from "./Footer.module.sass";

const Footer = () => {
  return (
    <div id="contacts" className={styles.footerWrapper}>
      <img className={styles.logo} src="./Laser.svg" alt="Логотип" />
      <div className={styles.footerMap}>
        <pre>{`г. Нижний Новгород,
ул. Коропузова
Дом 13, этаж 24`}</pre>

        <div className={styles.footerContacts}>
          <pre>{`+7 999 348 89 95
89-00-65`}</pre>
          <p>
            © 2009–2023, ООО «Демоклиника.ру». При использовании материалов
            гиперссылка на demo.ru обязательна. ИНН 7657718303, ОГРН
            1087712342774. 109544, г. Нижний Новгород, Коропузова, дом 23, 27
            этаж.
          </p>
        </div>
        <img src="/img/mapFooter.jpg" alt="Карта" />
      </div>
      <div className={styles.footerSocials}>
        <h1>Мы в соцсетях :</h1>
        <ul>
          <li className={styles.social}>
            <Link className={styles.link}>
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 12H18M15 15V9M23 39H27M25 41V37M9 30H11M10 32V29M13 39H16M14 40V37M41 26H44M43 27V25M28 9H30M29 11V8M41 9C42.1296 9 43.4558 10.154 43 12L37 38C36.6136 39.8559 35.5458 39.8634 34 39L21 29C20.9489 28.9632 21.0287 29.0561 21 29C20.9713 28.9439 21 29.063 21 29C21 28.937 20.9713 29.0561 21 29C21.0287 28.9439 20.9489 29.0368 21 29L36 15C36.6936 14.3847 35.9116 14.4442 35 15L16 27C15.942 27.0379 16.0687 26.9914 16 27C15.9313 27.0086 15.0655 27.0224 15 27L7 24C5.19662 23.474 5.79036 21.8833 8 21L40 9C40.2575 8.87626 40.7147 9.01381 41 9Z"
                  stroke="current"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>@DemoKlinik.com</p>
            </Link>
          </li>
          <li className={styles.social}>
            <Link className={styles.link}>
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.0001 13C23.0324 13 21.8047 13.4624 21.0001 14C20.1955 14.5376 19.3704 15.106 19.0001 16C18.6298 16.894 18.8113 18.0509 19.0001 19C19.1889 19.9491 19.3158 21.3158 20.0001 22C20.6843 22.6842 22.051 22.8112 23.0001 23C23.9491 23.1888 25.1061 23.3703 26.0001 23C26.8941 22.6297 27.4625 21.8046 28.0001 21C28.5377 20.1954 29.0001 18.9677 29.0001 18C29.0001 16.7024 28.9176 14.9175 28.0001 14C27.0825 13.0825 25.2977 13 24.0001 13Z"
                  stroke="current"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 22C18.1444 26.2903 22.8566 25.9223 24 26C25.4293 26.0971 29.5697 25.9603 33 22"
                  stroke="current"
                  strokeLinecap="round"
                />
                <path d="M23 26L18 34" stroke="current" strokeLinecap="round" />
                <path d="M24 26L29 34" stroke="current" strokeLinecap="round" />
                <path
                  d="M40 4.99985H7C6.48033 5.01285 6.36289 5.62763 6 5.99985C5.63711 6.37207 4.99984 6.48 5 6.99985V39.9999C5 40.5282 5.6264 40.6262 6 40.9999C6.3736 41.3735 6.47165 41.9999 7 41.9999H40C40.5283 41.9999 40.6264 41.3735 41 40.9999C41.3736 40.6262 42 40.5282 42 39.9999V6.99985C41.9935 6.7382 42.1061 6.2391 42 5.99985C41.8939 5.76061 41.1896 6.18024 41 5.99985C40.8104 5.81947 41.2442 5.0939 41 4.99985C40.7558 4.90581 40.2616 4.99323 40 4.99985Z"
                  stroke="current"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>@DemoKlinik.com</p>
            </Link>
          </li>
          <li className={styles.social}>
            <Link className={styles.link}>
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34.9999 9.99983C34.622 9.99469 34.317 9.79406 33.9999 9.99983C33.6829 10.2056 33.1493 10.6525 32.9999 10.9998C32.8505 11.3472 32.9313 11.628 32.9999 11.9998C33.0686 12.3717 33.7364 12.7288 33.9999 12.9998C34.2635 13.2708 34.6303 13.921 34.9999 13.9998C35.3695 14.0787 35.6488 14.1397 35.9999 13.9998C36.351 13.8599 36.7857 13.3113 36.9999 12.9998C37.2142 12.6884 36.9947 12.3779 36.9999 11.9998V11.9998C36.9954 11.5011 36.3524 11.3525 35.9999 10.9998C35.6475 10.6472 35.4984 10.0044 34.9999 9.99983Z"
                  stroke="current"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M41 4.99985H8C7.48033 5.01285 7.36289 5.62763 7 5.99985C6.63711 6.37207 5.99984 6.48 6 6.99985V39.9999C6 40.5282 6.6264 40.6262 7 40.9999C7.3736 41.3735 7.47165 41.9999 8 41.9999H41C41.5283 41.9999 41.6264 41.3735 42 40.9999C42.3736 40.6262 43 40.5282 43 39.9999V6.99985C42.9935 6.7382 43.1061 6.2391 43 5.99985C42.8939 5.76061 42.1896 6.18024 42 5.99985C41.8104 5.81947 42.2442 5.0939 42 4.99985C41.7558 4.90581 41.2616 4.99323 41 4.99985Z"
                  stroke="current"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25 16C23.3272 16 21.3909 16.0706 20 17C18.6091 17.9294 17.6402 19.4545 17 21C16.3599 22.5455 15.6737 24.3593 16 26C16.3264 27.6407 16.8172 29.8172 18 31C19.1829 32.1828 21.3594 32.6737 23 33C24.6407 33.3263 26.4546 32.6402 28 32C29.5455 31.3598 31.0707 30.3909 32 29C32.9294 27.6091 33 25.6728 33 24C33 21.7569 32.5862 19.5861 31 18C29.4139 16.4139 27.2432 16 25 16Z"
                  stroke="current"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>@DemoKlinik.com</p>
            </Link>
          </li>
          <li className={styles.social}>
            <Link className={styles.link}>
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M42.9998 14.0001C42.7701 13.1429 42.6245 12.6278 41.9998 12.0001C41.375 11.3724 40.8529 11.2308 39.9998 11.0001C37.6682 10.0951 14.5531 9.62638 7.99976 11.0001C7.14649 11.2309 6.6245 11.3722 5.99976 12.0001C5.37502 12.628 5.22922 13.1427 4.99976 14.0001C3.94684 18.6396 3.84104 29.2563 4.99976 34.0001C5.22937 34.8573 5.37503 35.3724 5.99976 36.0001C6.62449 36.6278 7.14661 36.7694 7.99976 37.0001C12.6175 38.0681 35.0979 38.2179 39.9998 37.0001C40.8529 36.7694 41.375 36.6278 41.9998 36.0001C42.6245 35.3724 42.7701 34.8573 42.9998 34.0001C44.1222 28.9455 44.228 18.9767 42.9998 14.0001Z"
                  stroke="current"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M30 24L20 18V30L30 24Z"
                  stroke="current"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>@DemoKlinik.com</p>
            </Link>
          </li>
          <li className={styles.social}>
            <Link className={styles.link}>
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28 36V29C32.46 29.6848 34.16 33.5326 37 36H44C42.1899 31.9303 39.3892 27.8698 36 25C38.6 21.3946 41.65 18.1462 43 13H36C33.42 16.9377 32.24 21.9586 28 25V13H19L21 16V26C17.3 25.5669 14.71 18.7102 12 13H5C7.5 20.7143 12.71 37.9538 28 36Z"
                  stroke="current"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>@DemoKlinik.com</p>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.footerContacts}>
        <pre>{`+7 999 348 89 95
89-00-65`}</pre>
        <p>
          © 2009–2023, ООО «Демоклиника.ру». При использовании материалов
          гиперссылка на demo.ru обязательна. ИНН 7657718303, ОГРН
          1087712342774. 109544, г. Нижний Новгород, Коропузова, дом 23, 27
          этаж.
        </p>
      </div>
      <img
        className={styles.eyeIcon}
        src="/icon/iconEyes.svg"
        alt="Иконка глаза"
      />

      <div
        className={styles.arrow}
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      >
        <Arrow />
      </div>
    </div>
  );
};

export default Footer;
