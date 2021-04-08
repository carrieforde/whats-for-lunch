import React from "react";
import { getButtonClasses, getColorSettings } from "../../utilities/utilities";
import { LinkButtonProps } from "./LinkButton.interface";

const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  children,
  style,
  bgColor,
  color,
}) => {
  const classes = getButtonClasses({ style, isLink: true });
  const inlineStyles = getColorSettings("button", { bgColor, color });

  return (
    <a href={href} className={classes} style={inlineStyles}>
      {children}
    </a>
  );
};

export default LinkButton;
