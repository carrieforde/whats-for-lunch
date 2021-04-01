import React from "react";
import { FONT_SIZES } from "../constants/font-sizes";

export default {
  title: "Tokens/Font Sizes",
};

const string = "Almost before we knew it, we had left the ground.";

export const FontSizes = () => (
  <>
    {Object.keys(FONT_SIZES).map((size) => (
      <p key={size} style={{ fontSize: `var(${size})` }}>
        {string}
      </p>
    ))}
  </>
);
