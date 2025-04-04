export function convertToSearchParams(
  params: Record<string, any>
): URLSearchParams {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      searchParams.append(
        key.replace(/([A-Z])/g, "_$1").toLowerCase(),
        String(value)
      );
    }
  });

  return searchParams;
}
