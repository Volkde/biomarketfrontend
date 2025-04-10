export const replaceLastPathSegment = (
  pathname: string,
  newSegment?: string
) => {
  if (!newSegment) {
    return pathname;
  }

  const parts = pathname.split("/").filter(Boolean);

  parts[parts.length - 1] = newSegment;

  return "/" + parts.join("/");
};
