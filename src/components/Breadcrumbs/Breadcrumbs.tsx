import {
  Breadcrumbs as BasicBreadcrumbs,
  Link,
  Typography
} from "@mui/material";
import { useBreadcrumbs } from "hooks/useBreadcrumbs";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { BreadcrumbsProps } from "./types";
import { useTranslation } from "react-i18next";

function Breadcrumbs({ pathname }: BreadcrumbsProps) {
	const { t } = useTranslation();
  const pages = useBreadcrumbs();
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
      label: pages?.home?.title || t("Home")
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
