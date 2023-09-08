import styles from "./ArticleWrapper.module.sass";

const ArticleWrapper = ({ children, isNotSide }) => {
  return (
    <article
      className={
        isNotSide ? styles.articleWrapperNoSide : styles.articleWrapper
      }
    >
      {children}
    </article>
  );
};

export default ArticleWrapper;
