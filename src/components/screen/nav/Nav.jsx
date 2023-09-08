import { Link as LinkScroll } from "react-scroll";
import Button from "../../ui/button/Button";
import cl from "classnames"
import styles from "./Nav.module.sass";

const Nav = () => {
  return (
    <section className={styles.sectionWrapper}>
      <nav className={styles.section_nav}>
        <LinkScroll to="about" smooth={true} offset={-100} duration={500}>
          О клинике
        </LinkScroll>
        <LinkScroll to="services" smooth={true} offset={-100} duration={500}>
          Услуги
        </LinkScroll>
        <LinkScroll to="reviews" smooth={true} offset={-100} duration={500}>
          Отзывы
        </LinkScroll>
        <LinkScroll to="stock" smooth={true} offset={-100} duration={500}>
          Акции
        </LinkScroll>
        <LinkScroll to="doctors" smooth={true} offset={-100} duration={500}>
          Врачи
        </LinkScroll>
        <LinkScroll to="contacts" smooth={true} offset={0} duration={500}>
          Контакты
        </LinkScroll>
      </nav>
      <p className={cl(styles.section_Text, styles.section_footerTXT)}>Лазерная коррекция зрения</p>
      <div className={styles.section_Mobile}>
        <p className={styles.section_Text}>Лазерная коррекция зрения</p>
        <Button link="record" text="Позвоните мне" margin="0 auto"/>
      </div>
    </section>
  );
};

export default Nav;

// import { useRef } from react;

// const aboutSection = useRef(null);

// const scrollTo = () => { window.scrollTo({ top: aboutSection.current.offsetTop, behavior: 'smooth', });

// <button className="link" onClick={scrollTo}> About Us </button>

// <div className="about" ref={aboutSection}> <h2>About Us</h2> </div>
