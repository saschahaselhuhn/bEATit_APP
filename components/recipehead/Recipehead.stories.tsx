import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Recipehead, { Props } from "./Recipehead";

export default {
  title: "Common/Recipehead",
  component: Recipehead,
} as Meta;

const Template: Story<Props> = (args) => <Recipehead {...args} />;

export const Recipeheaddiv = Template.bind({});
Recipeheaddiv.args = {
  recipeImg: "",
  recipeName: "",
  consumers: "",
  difficulty: "bla",
};
