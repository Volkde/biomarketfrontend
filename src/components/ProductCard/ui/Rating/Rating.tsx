import { Star as StarIcon } from "@mui/icons-material";
import { Rating as MuiRating, Typography, useTheme } from "@mui/material";
import { StyledRating, StyledRatingCount } from "./styles";
import { RatingProps } from "./types";

const Rating = ({ value, max = 5, count, size = "small" }: RatingProps) => {
  const theme = useTheme();

  return (
    <StyledRating>
      <MuiRating
        value={value}
        max={max}
        readOnly
        size={size}
        precision={0.5}
        sx={{
          color: theme.palette.primary.main
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {count && (
        <StyledRatingCount>
          <Typography variant="body2">({count})</Typography>
        </StyledRatingCount>
      )}
    </StyledRating>
  );
};

export default Rating;
