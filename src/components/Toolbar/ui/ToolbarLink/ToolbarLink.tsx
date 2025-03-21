import { useToolbarContext } from "../../hooks/useToolbarContext";
import { ToolbarLinkProps } from "./types";

function ToolbarLink(props: ToolbarLinkProps) {
  const { children, ...toolbarLinkProps } = props;
  const { orientation } = useToolbarContext();

  return <a {...toolbarLinkProps}>{children}</a>;
}

export default ToolbarLink;
