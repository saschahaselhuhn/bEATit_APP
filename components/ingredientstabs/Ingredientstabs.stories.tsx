import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Ingredientstabs, { Props } from "./Ingredientstabs";

export default {
  title: "Common/Ingredientstabs",
  component: Ingredientstabs,
} as Meta;

const Template: Story<Props> = (args) => <Ingredientstabs {...args} />;

export const IngredientsTabs = Template.bind({});
IngredientsTabs.args = {
  stepslink: "",
};
