import styles from "./Line.module.sass";

const Line = (props) => {
  return <div className={styles.line} style={{ height: props.height }}></div>;
};

export default Line;
