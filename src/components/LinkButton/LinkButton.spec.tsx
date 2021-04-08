import React from "react";
import { render } from "@testing-library/react";
import { Flat } from "./LinkButton.stories";

describe("LinkButton", () => {
  it("should render a link as a button", () => {
    const { container } = render(<Flat {...Flat.args} />);
    const button = container.firstElementChild;

    expect(button).toHaveTextContent("Order Now");
  });
});
