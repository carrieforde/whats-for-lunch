import React from "react";
import { COLORS } from "../constants/colors";

export default {
  title: "Tokens/Colors",
};

const container = {
  display: "grid",
  gap: "24px",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, auto))",
  justifyContent: "center",
};

const chip = {
  border: "1px solid var(--color-neutral-200)",
  width: "200px",
  height: "150px",
};

const value = {
  backgroundColor: "var(--color-neutral-050)",
  border: "1px solid var(--color-neutral-200)",
  fontFamily: "'Inconsolata', monospace",
  display: "block",
  marginTop: "4px",
  padding: "4px",
};

function hexToRgb(hex: string): any {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

function getRgbString(hex: string): string {
  const values = hexToRgb(hex);

  return values ? `rgb(${values.r}, ${values.g}, ${values.b})` : "";
}

export const Colors = () => (
  <div style={container}>
    {Object.keys(COLORS).map((color) => (
      <div key={color} style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ ...chip, backgroundColor: `var(--${color})` }}></div>
        <code style={value}>--{color}</code>
        <code style={value}>{COLORS[color]}</code>
        <code style={value}>{getRgbString(COLORS[color])}</code>
      </div>
    ))}
  </div>
);
