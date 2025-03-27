import { Rating as MuiRating, Typography } from "@mui/material";
import { StyledRating, StyledRatingCount } from "./styles";
import { RatingProps } from "./types";

const Rating = ({ value, max = 5, count, size = "medium" }: RatingProps) => {
  return (
    <StyledRating>
      <MuiRating value={value} max={max} readOnly size={size} precision={0.5} />
      {count && (
        <StyledRatingCount>
          <Typography variant="body2">({count})</Typography>
        </StyledRatingCount>
      )}
    </StyledRating>
  );
};

export default Rating;
