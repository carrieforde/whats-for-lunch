import React, { CSSProperties } from "react";
import { ButtonProps } from "./Button.interface";
import styles from "./Button.module.css";
import cn from "classnames";

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  style = "flat",
  bgColor,
  color,
}) => {
  const classes = cn(styles.button, {
    [styles.outline]: style === "outline",
    [styles.text]: style === "text",
  });

  const inlineStyles = {
    "--buttonBgColor": bgColor ? `var(${bgColor})` : "inherit",
    "--buttonColor": color ? `var(${color})` : "inherit",
  } as CSSProperties;

  return (
    <button
      type="button"
      style={inlineStyles}
      className={classes}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
