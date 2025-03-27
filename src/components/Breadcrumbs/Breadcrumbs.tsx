import {
  Breadcrumbs as BasicBreadcrumbs,
  Link,
  Typography,
} from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { pages } from "./data";

function Breadcrumbs() {
  const location = useLocation();

  let currentPath = "";
  const breadcrumbs = location.pathname
    .split("/")
    .filter(Boolean)
    .map(part => {
      currentPath += `/${part}`;

      return {
        path: currentPath,
        label: pages[part]?.title || part,
      };
    });

  if (breadcrumbs.length) {
    // Add home page
    breadcrumbs.unshift({
      path: "/",
      label: "Home",
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
    ),
  );

  return (
    breadcrumbs.length > 0 && (
      <BasicBreadcrumbs maxItems={3} aria-label="breadcrumb">
        {elBreadcrumbs}
      </BasicBreadcrumbs>
    )
  );
}

export default Breadcrumbs;
