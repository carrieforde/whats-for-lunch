import React from "react";
import { Story, Meta } from "@storybook/react";
import Card from "./Card";
import { CardProps } from "./Card.interface";

export default {
  title: "Card",
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Display = Template.bind({});

Display.args = {
  title: "Zen Noodle Bar",
  imageUrl: "https://picsum.photos/425",
  children: [
    <address key="address">
      668 E 3rd Ave
      <br />
      San Mateo, CA 94401
    </address>,

    <p key="phone">
      <a href="tel:+16507813183">(650) 781-3183</a>
    </p>,
    <p key="web">
      <a href="http://www.zennoodlebarca.com/?utm_source=gmb&utm_medium=website">
        Website
      </a>
    </p>,
  ],
};
