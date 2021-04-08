import { render } from "@testing-library/react";
import React from "react";
import { Display } from "./Card.stories";

describe("Card", () => {
  it("should render a card", () => {
    const { container } = render(<Display {...Display.args} />);
    const card = container.firstElementChild;
    const img = card?.querySelector("img");
    const title = card?.querySelector(".title");
    const content = card?.querySelector(".content");

    expect(img?.src).toEqual(Display.args?.imageUrl);
    expect(title).toHaveTextContent("Zen Noodle Bar");
    expect(content).toHaveTextContent("668 E 3rd Ave");
  });
});
