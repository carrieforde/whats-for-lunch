import React from "react";
import { getButtonClasses, getColorSettings } from "../../utilities/utilities";
import { ButtonProps } from "./Button.interface";

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  style = "flat",
  bgColor,
  color,
}) => {
  const classes = getButtonClasses({ style });

  const inlineStyles = getColorSettings("button", { bgColor, color });

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
