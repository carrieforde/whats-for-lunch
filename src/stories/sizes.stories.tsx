import React from "react";
import { SIZES } from "../constants/sizes";

export default {
  title: "Tokens/Sizes",
};

export const Sizes = () => (
  <>
    {Object.keys(SIZES).map((size) => (
      <div key={size}>
        <code>
          {size}: {SIZES[size]}
        </code>
        <div
          style={{
            backgroundColor: "var(--color-neutral-100)",
            height: "20px",
            width: `var(${size})`,
            marginBottom: "var(--size-6)",
          }}
        ></div>
      </div>
    ))}
  </>
);
