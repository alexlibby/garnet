import Breadcrumbs from "./Breadcrumbs.svelte";
import { BADGE } from "storybook-addon-badges";

const BADGES = {
  ...BADGE,
  ALPHA: "Alpha",
};

let levels = [
  { href: "/", text: "Dashboard" },
  { href: "/reports", text: "Annual reports" },
  { href: "/reports/2019", text: "2019" },
];

const meta = {
  parameters: {
    badges: [],
  },
  argTypes: {
    BreadcrumbItems: levels,
    image: { control: "boolean" },
  },
};

export default {
  title: "Garnet UI Library/Navigation Components/Breadcrumbs",
  component: Breadcrumbs,
  ...meta,
};

export const Default = (args) => ({
  title: "Garnet UI Library/Navigation Components/Breadcrumbs",
  Component: Breadcrumbs,
  ...meta,
  props: {
    ...args,
    breadcrumbItems: levels,
  },
});

Default.parameters = {
  badges: [BADGES.ALPHA],
  docs: { source: { type: "code" } },
};

export const CustomImage = (args) => ({
  title: "Garnet UI Library/Navigation Components/Breadcrumbs",
  Component: Breadcrumbs,
  ...meta,
  props: {
    ...args,
    iconFamily: "material-symbols",
    iconName: "arrow-right-alt",
    breadcrumbItems: levels,
  },
});

CustomImage.parameters = {
  badges: [BADGES.ALPHA],
};

export const TextDivider = (args) => ({
  title: "Garnet UI Library/Navigation Components/Breadcrumbs",
  Component: Breadcrumbs,
  ...meta,
  props: {
    ...args,
    divider: ">>",
    breadcrumbItems: levels,
  },
});

TextDivider.parameters = {
  badges: [BADGES.ALPHA],
};
