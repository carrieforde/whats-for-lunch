import button from "../components/Button/Button.module.css";
import linkButton from "../components/LinkButton/LinkButton.module.css";
import cn from "classnames";
import { ButtonStyle } from "../entities/Button.interface";
import { Color } from "../entities/color.interface";
import { CSSProperties } from "react";

export function getButtonClasses({
  style = "flat",
  isLink = false,
}: {
  style?: ButtonStyle;
  isLink?: boolean;
}): string {
  return cn(button.button, {
    [button.outline]: style === "outline",
    [button.text]: style === "text",
    [linkButton.linkButton]: isLink,
  });
}

export function getColorSettings(
  prefix: string,
  { bgColor, color }: Color
): CSSProperties {
  return {
    [`--${prefix}BgColor`]: bgColor ? `var(${bgColor})` : "inherit",
    [`--${prefix}Color`]: color ? `var(${color})` : "inherit",
  };
}
