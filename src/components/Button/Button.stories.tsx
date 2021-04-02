import React from "react";
import { Story, Meta } from "@storybook/react";
import Button from "./Button";
import { ButtonProps } from "./Button.interface";

export default {
  title: "Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Flat = Template.bind({});
export const Outline = Template.bind({});
export const Text = Template.bind({});

Flat.args = {
  onClick: () => console.log("clicked"),
  children: ["Get Restaurant"],
  bgColor: "--color-secondary-300",
  color: "--color-secondary-900",
};

Outline.args = {
  ...Flat.args,
  style: "outline",
};

Text.args = {
  ...Flat.args,
  style: "text",
};
