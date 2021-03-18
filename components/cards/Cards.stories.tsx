import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Cards, { Props } from "./Cards";

export default {
  title: "Common/Cards",
  component: Cards,
} as Meta;

const Template: Story<Props> = (args) => <Cards {...args} />;

export const RecipeCard = Template.bind({});
RecipeCard.args = {
  cardrecipesrc: "./images/foodimages/paellamallorquina.jpg",
  cardrecipename: "Paella Mallorquina",
  cardopenrecipesrc: "./images/go.svg",
};
