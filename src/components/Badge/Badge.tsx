import React, { CSSProperties } from "react";
import { BadgeProps } from "./Badge.interface";
import styles from "./Badge.module.css";

const Badge: React.FC<BadgeProps> = ({ text, color }) => {
  const inlineStyles = {
    "--badgeBg": `var(--color-${color}-050)`,
    "--badgeBorder": `var(--color-${color}-400)`,
    "--badgeColor": `var(--color-${color}-900)`,
  } as CSSProperties;

  return (
    <span style={inlineStyles} className={styles.badge}>
      {text}
    </span>
  );
};

export default Badge;
