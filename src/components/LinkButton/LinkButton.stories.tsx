import React from "react";
import { Story, Meta } from "@storybook/react";
import { LinkButtonProps } from "./LinkButton.interface";
import LinkButton from "./LinkButton";

export default {
  title: "Link Button",
} as Meta;

const Template: Story<LinkButtonProps> = (args) => <LinkButton {...args} />;

export const Flat = Template.bind({});
export const Outline = Template.bind({});
export const Text = Template.bind({});

Flat.args = {
  href: "https://google.com",
  children: ["Order Now"],
  bgColor: "--color-primary-800",
  color: "--color-primary-100",
};

Outline.args = {
  ...Flat.args,
  style: "outline",
  color: "--color-primary-800",
};

Text.args = {
  ...Outline.args,
  style: "text",
};
