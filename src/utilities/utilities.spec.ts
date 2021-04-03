import { getButtonClasses, getColorSettings } from "./utilities";

describe("utilities", () => {
  it("should get button classes", () => {
    expect(getButtonClasses({})).toEqual("button");
    expect(getButtonClasses({ style: "outline" })).toEqual("button outline");
    expect(getButtonClasses({ style: "text" })).toEqual("button text");
    expect(getButtonClasses({ isLink: true })).toEqual("button linkButton");
  });

  it("should return color settings", () => {
    expect(getColorSettings("button", {})).toEqual({
      "--buttonBgColor": "inherit",
      "--buttonColor": "inherit",
    });
    expect(getColorSettings("link", { color: "--color-primary-900" })).toEqual({
      "--linkBgColor": "inherit",
      "--linkColor": "var(--color-primary-900)",
    });
    expect(
      getColorSettings("button", { bgColor: "--color-accent-200" })
    ).toEqual({
      "--buttonBgColor": "var(--color-accent-200)",
      "--buttonColor": "inherit",
    });
  });
});
