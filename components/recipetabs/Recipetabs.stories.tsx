import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Recipetabs, { Props } from "./Recipetabs";

export default {
  title: "Common/Recipetabs",
  component: Recipetabs,
} as Meta;

const Template: Story<Props> = (args) => <Recipetabs {...args} />;

export const RecipeTab = Template.bind({});
RecipeTab.args = {};
