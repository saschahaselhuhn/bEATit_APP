import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Categories, { Props } from "./Categories";

export default {
  title: "Common/Categories",
  component: Categories,
} as Meta;

const Template: Story<Props> = (args) => <Categories {...args} />;

export const CategorieCard = Template.bind({});
CategorieCard.args = {
  Src: "./images/foodimages/paellamallorquina.jpg",
  Name: "Deutschland",
  Link: "./images/go.svg",
};
