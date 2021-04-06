import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Stepstabs, { Props } from "./Stepstabs";

export default {
  title: "Common/Stepstabs",
  component: Stepstabs,
} as Meta;

const Template: Story<Props> = (args) => <Stepstabs {...args} />;

export const StepsTabs = Template.bind({});
StepsTabs.args = {
  ingredientslink: "",
};
