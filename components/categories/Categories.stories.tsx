import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Cards, { Props } from "./Categories";

export default {
  title: "Common/Cards",
  component: Cards,
} as Meta;

const Template: Story<Props> = (args) => <Cards {...args} />;

export const RecipeCard = Template.bind({});
RecipeCard.args = {
  recipeSrc: "./images/foodimages/paellamallorquina.jpg",
  recipeName: "Paella Mallorquina",
  openrecipeSrc: "./images/go.svg",
};
