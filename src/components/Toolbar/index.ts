import { Toolbar, ToolbarProps } from "./ui/Toolbar";
import { ToolbarButton, ToolbarButtonProps } from "./ui/ToolbarButton";
import { ToolbarLink, ToolbarLinkProps } from "./ui/ToolbarLink";
import { ToolbarSeparator, ToolbarSeparatorProps } from "./ui/ToolbarSeparator";

const Root = Toolbar;
const Separator = ToolbarSeparator;
const Button = ToolbarButton;
const Link = ToolbarLink;

export {
  Button,
  Link,
  Root,
  Separator,
  Toolbar,
  ToolbarButton,
  ToolbarLink,
  ToolbarSeparator,
};

export type {
  ToolbarButtonProps,
  ToolbarLinkProps,
  ToolbarProps,
  ToolbarSeparatorProps,
};
