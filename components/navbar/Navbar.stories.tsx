import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Navbar, { Props } from "./Navbar";

export default {
  title: "Common/Navbar",
  component: Navbar,
} as Meta;

const Template: Story<Props> = (args) => <Navbar {...args} />;

export const Nav = Template.bind({});
Nav.args = {
  homeBtn: "./images/homeBtn.svg",
  searchBtn: "./images/searchBtn.svg",
  socialBtn: "./images/shareBtn.svg",
};
