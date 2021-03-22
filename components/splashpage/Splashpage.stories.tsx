import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Splashpage, { Props } from "./Splashpage";

export default {
  title: "Common/Splashpage",
  component: Splashpage,
} as Meta;

const Template: Story<Props> = (args) => <Splashpage {...args} />;

export const Splash = Template.bind({});
Splash.args = {
  topImage: "./images/splash/splash_01.png",
  centerImage: "./images/splash/splash_02.png",
  bottomImage: "./images/splash/splash_03.png",
};
