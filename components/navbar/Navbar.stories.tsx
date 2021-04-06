import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import Navigationbar, { HeaderProps } from "./Navbar";

export default {
  title: "Common/Navbar",
  component: Navigationbar,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Navigationbar {...args} />;

export const navigationBar = Template.bind({});
navigationBar.args = {};
