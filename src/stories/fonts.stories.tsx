import React from "react";
import ReactHtmlParser from "react-html-parser";

export default {
  title: "Tokens/Fonts",
};

const specimen = {
  display: "flex",
};

const style = {
  backgroundColor: "var(--color-neutral-050)",
};

const container = {
  alignItems: "center",
  display: "flex",
  gap: "var(--size-4)",
};

const big = {
  fontSize: "var(--font-size-11)",
};

const charContainer = {
  display: "flex",
};

export const Fonts = () => (
  <>
    <div style={{ ...specimen, flexDirection: "column" }}>
      <p style={style}>normal</p>
      <div style={container}>
        <div style={big}>Aa</div>
        <div style={{ ...charContainer, flexDirection: "column" }}>
          <span>ABCDEFGHIJKLMNOPQRSTUVWXYZ</span>
          <span>abcdefghijklmnopqrstuvwxyz</span>
          <span>
            {ReactHtmlParser("1234567890([&lbrace;“‘,.;:?!$&*’”&rbrace;])")}
          </span>
        </div>
      </div>
    </div>

    <div style={{ ...specimen, flexDirection: "column" }}>
      <p style={style}>italic</p>
      <div style={container} className="fontItalic">
        <div style={big}>Aa</div>
        <div style={{ ...charContainer, flexDirection: "column" }}>
          <span>ABCDEFGHIJKLMNOPQRSTUVWXYZ</span>
          <span>abcdefghijklmnopqrstuvwxyz</span>
          <span>
            {ReactHtmlParser("1234567890([&lbrace;“‘,.;:?!$&*’”&rbrace;])")}
          </span>
        </div>
      </div>
    </div>
  </>
);
