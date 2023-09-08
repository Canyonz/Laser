import { useState } from "react";
// import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import cl from "classnames";
import styles from "./Button.module.sass";

const Button = (props) => {
  const [hover, setHover] = useState("");

  const isSecondary = () => {
    if (props.secondaryStyle) return styles.btnSecondary;
    return props.isDisabled ? styles.btnDisabled : styles.btnNotDisabled;
  };

  return (
    <LinkScroll
      className={cl(styles.btn, isSecondary())}
      style={{
        width: props.width && props.width,
        margin: props.margin,
      }}
      to={!props.isDisabled ? props.link : ""}
      smooth={true}
      offset={-100}
      duration={500}
      onMouseOver={() => props.secondaryText && setHover(styles.isHover)}
      onMouseOut={() => props.secondaryText && setHover("")}
    >
      {!props.secondaryStyle ? (
        props.text
      ) : (
        <div
          className={
            props.secondaryText
              ? styles.btnSecondaryWithSpanWrapper
              : styles.btnSecondaryWrapper
          }
        >
          <p>{props.text}</p>
          {props.secondaryText && (
            <span className={hover}>{props.secondaryText}</span>
          )}
        </div>
      )}
    </LinkScroll>
  );
};

export default Button;
