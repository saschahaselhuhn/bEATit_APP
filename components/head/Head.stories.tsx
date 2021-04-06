import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Headerbar, { HeaderProps } from "./Head";

export default {
  title: "Common/headerBar",
  component: Headerbar,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Headerbar {...args} />;

export const headerBar = Template.bind({});
headerBar.args = {};
