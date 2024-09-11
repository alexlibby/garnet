import Input from "./Input.svelte";
import { action } from "@storybook/addon-actions";
import { fn } from "@storybook/test";
import { BADGE } from "storybook-addon-badges";

const BADGES = {
  ...BADGE,
  ALPHA: "Alpha",
};

export default {
  title: "Garnet UI Library/Basic Components/Input",
  component: Input,
  argTypes: {
    disabled: { control: "boolean" },
    placeholder: "",
  },
  props: {
    label: "Text:",
    placeholder: "Enter your text here",
    disabled: false,
  },
  on: { input: fn().mockName("on-input") },
};

export const Default = (args) => ({
  Component: Input,
  ...args,
  props: {},
  on: { input: fn().mockName("on-input") },
});

Default.parameters = {
  badges: [BADGES.ALPHA],
};

export const NoLabel = (args) => ({
  Component: Input,
  ...args,
  props: {
    label: "",
  },
  on: { input: fn().mockName("on-input") },
});

NoLabel.parameters = {
  badges: [BADGES.ALPHA],
};

export const Disabled = (args) => ({
  Component: Input,
  ...args,
  props: {
    label: "Text:",
    disabled: true,
    placeholder: "disabled field",
  },
});

Disabled.parameters = {
  badges: [BADGES.ALPHA],
};
