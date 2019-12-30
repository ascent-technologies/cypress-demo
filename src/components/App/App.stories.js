import React from "react";
import { action } from "@storybook/addon-actions";
import { App } from "../DianaBookES7";

export const byDefault = () => <App onClick={action('You Clicked!')}> A Default App </App>;

export default {
  title: "App",
  component: App
};
