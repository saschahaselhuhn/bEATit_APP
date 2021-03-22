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
  categorySrc: "./images/foodimages/paellamallorquina.jpg",
  categoryName: "Deutschland",
  opencategoryLink: "./images/go.svg",
};
