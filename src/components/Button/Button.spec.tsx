import React from "react";
import { render } from "@testing-library/react";
import { Flat, Outline, Text } from "./Button.stories";

describe("Button", () => {
  it("should correctly render a flat button", () => {
    const { container } = render(<Flat {...Flat.args} />);
    const button = container.firstElementChild;

    expect(button).toHaveClass("button");
    expect(button).toHaveTextContent("Get Restaurant");
  });

  it("should correctly render an outline button", () => {
    const { container } = render(<Outline {...Outline.args} />);
    const button = container.firstElementChild;

    expect(button).toHaveClass("button outline");
  });

  it("should correctly render a text button", () => {
    const { container } = render(<Text {...Text.args} />);
    const button = container.firstElementChild;

    expect(button).toHaveClass("button text");
  });
});
