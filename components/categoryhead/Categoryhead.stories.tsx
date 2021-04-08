import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Categoryhead, { Props } from "./Categoryhead";

export default {
  title: "Common/Categoryhead",
  component: Categoryhead,
} as Meta;

const Template: Story<Props> = (args) => <Categoryhead {...args} />;

export const Categoryheaddiv = Template.bind({});
Categoryheaddiv.args = {
  categoryImg: "",
  categoryName: "Rezepte",
};
