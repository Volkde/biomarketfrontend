import {
  Breadcrumbs as BasicBreadcrumbs,
  Link,
  Typography
} from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { pages } from "./data";
import { BreadcrumbsProps } from "./types";

/**
 * Breadcrumbs component for navigation
 * 
 * @param {BreadcrumbsProps} props - Component props
 * @param {string} props.pathname - Current pathname
 */
function Breadcrumbs({ pathname }: BreadcrumbsProps) {
  const location = useLocation();

  let currentPath = "";
  const breadcrumbs = (pathname ?? location.pathname)
    .split("/")
    .filter(Boolean)
    .map(part => {
      currentPath += `/${part}`;

      return {
        path: currentPath,
        label: pages[part]?.title || part
      };
    });

  if (breadcrumbs.length) {
    // Add home page
    breadcrumbs.unshift({
      path: "/",
      label: "Home"
    });
  }

  const elBreadcrumbs = breadcrumbs.map(({ path, label }, index) =>
    index === breadcrumbs.length - 1 ? (
      <Typography key={path} sx={{ color: "text.primary" }}>
        {label}
      </Typography>
    ) : (
      <Link
        key={path}
        component={RouterLink}
        to={path}
        underline={"hover"}
        color={"inherit"}
      >
        {label}
      </Link>
    )
  );

  return (
    breadcrumbs.length > 0 && (
      <BasicBreadcrumbs
        maxItems={3}
        aria-label="breadcrumb"
        sx={{
          marginBottom: "35px"
        }}
      >
        {elBreadcrumbs}
      </BasicBreadcrumbs>
    )
  );
}

export default Breadcrumbs;
