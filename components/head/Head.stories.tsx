import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Headerbar, { Props } from "./Head";

export default {
  title: "Common/Head",
  component: Headerbar,
} as Meta;

const Template: Story<Props> = (args) => <Headerbar {...args} />;

export const Header = Template.bind({});
Header.args = {
  leftImage: "./images/backBtn.svg",
  centerImage: "./images/logowhite.svg",
  rightImage: "",
};
