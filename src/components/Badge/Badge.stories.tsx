import React from "react";
import { Story, Meta } from "@storybook/react";
import Badge from "./Badge";
import { BadgeProps } from "./Badge.interface";

export default {
  title: "Badge",
  component: Badge,
} as Meta;

const Template: Story<BadgeProps> = (args) => <Badge {...args} />;

export const Accent = Template.bind({});
export const Warning = Template.bind({});

Accent.args = {
  text: "Thai",
  color: "accent",
};

Warning.args = {
  text: "Mexican",
  color: "warning",
};
