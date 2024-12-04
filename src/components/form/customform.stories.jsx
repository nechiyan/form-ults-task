import React from "react";
import MultiStepForm from "../form/CustomForms";

// Default export setting up the story metadata
export default {
  title: "Forms/MultiStepForm",
  component: MultiStepForm,
};

// Template function for rendering the MultiStepForm in Storybook
const Template = (args) => <MultiStepForm {...args} />;

// The default story for rendering MultiStepForm
export const Default = Template.bind({});
Default.args = {};
