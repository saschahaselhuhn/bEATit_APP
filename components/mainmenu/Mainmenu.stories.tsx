import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import MainMenu, { HeaderProps } from "./Mainmenu";

export default {
  title: "Common/MainMenu",
  component: MainMenu,
} as Meta;

const Template: Story<HeaderProps> = (args) => <MainMenu {...args} />;

export const beatitmenu = Template.bind({});
beatitmenu.args = {};
