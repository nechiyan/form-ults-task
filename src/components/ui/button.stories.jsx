import React from "react";
import { Button, buttonVariants } from "./Button";  // Adjust import path if necessary

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ["default", "destructive", "outline", "secondary", "ghost", "link"]
      },
    },
    size: {
      control: {
        type: 'select',
        options: ["default", "sm", "lg", "icon"]
      },
    },
    asChild: {
      control: { type: 'boolean' },
    },
  },
};

// Default button story
const Template = (args) => <Button {...args}>Click Me</Button>;

export const Default = Template.bind({});
Default.args = {
  variant: "default",
  size: "default",
};

export const Destructive = Template.bind({});
Destructive.args = {
  variant: "destructive",
  size: "default",
};

export const Outline = Template.bind({});
Outline.args = {
  variant: "outline",
  size: "default",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  size: "default",
};

export const Ghost = Template.bind({});
Ghost.args = {
  variant: "ghost",
  size: "default",
};

export const Link = Template.bind({});
Link.args = {
  variant: "link",
  size: "default",
};

export const SmallButton = Template.bind({});
SmallButton.args = {
  variant: "default",
  size: "sm",
};

export const LargeButton = Template.bind({});
LargeButton.args = {
  variant: "default",
  size: "lg",
};

export const IconButton = Template.bind({});
IconButton.args = {
  variant: "default",
  size: "icon",
  children: <svg width="16" height="16" fill="none"><path d="M8 0v16M0 8h16" stroke="currentColor" strokeWidth="2"/></svg>, // Example icon
};
