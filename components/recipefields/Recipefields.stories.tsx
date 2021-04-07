import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Recipefields, { Props } from "./Recipefields";

export default {
  title: "Common/Recipefields",
  component: Recipefields,
} as Meta;

const Template: Story<Props> = (args) => <Recipefields {...args} />;

export const RecipeFields = Template.bind({});
RecipeFields.args = {
  wert: "1000",
  einheit: "Ml",
  zutat: "Milch",
};
