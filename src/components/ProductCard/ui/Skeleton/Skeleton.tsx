import { Box, Skeleton as RootSkeleton } from "@mui/material";

function Skeleton() {
  return (
    <Box sx={{ width: 210, marginRight: 0.5, my: 5 }}>
      <RootSkeleton
        animation="wave"
        variant="rectangular"
        width={210}
        height={118}
      />
      <Box sx={{ pt: 0.5 }}>
        <RootSkeleton animation="wave" />
        <RootSkeleton animation="wave" width="60%" />
      </Box>
    </Box>
  );
}

export default Skeleton;
