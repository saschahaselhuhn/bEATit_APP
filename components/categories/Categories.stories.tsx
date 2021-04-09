import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Categories, { Props } from "./Categories";

export default {
  title: "Common/Category",
  component: Categories,
} as Meta;

const Template: Story<Props> = (args) => <Categories {...args} />;

export const CategoryCard = Template.bind({});
CategoryCard.args = {
  Src: "./images/categoryBG.jpg",
  LinkDeutsch: "./images/go.svg",
  LinkSpanisch: "./images/go.svg",
  LinkItalienisch: "./images/go.svg",
  LinkAmerikanisch: "./images/go.svg",
};
