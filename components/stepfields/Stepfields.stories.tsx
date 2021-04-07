import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Stepfields, { Props } from "./Stepfields";

export default {
  title: "Common/Stepfields",
  component: Stepfields,
} as Meta;

const Template: Story<Props> = (args) => <Stepfields {...args} />;

export const StepFields = Template.bind({});
StepFields.args = {
  stepname: "1000",
  stepinstruction: "Ml",
};
