import { Box, Chip } from "@mui/material";
import { TagsProps } from "./types";

const Tags = ({ tags }: TagsProps) => {
  return (
    <Box>
      {tags.map((tag, index) => (
        <Chip
          key={index}
          label={tag.label}
          size="medium"
          color={tag.color || "primary"}
          variant={tag.variant || "outlined"}
          sx={{
            fontSize: "0.875rem"
          }}
        />
      ))}
    </Box>
  );
};

export default Tags;
