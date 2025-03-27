import { Typography } from '@mui/material';
import { Rating as MuiRating } from '@mui/material';
import { RatingProps } from './types';
import { StyledRating, StyledRatingCount } from './styles';

const Rating = ({ value, max = 5, count, size = 'medium' }: RatingProps) => {
  return (
    <StyledRating>
      <MuiRating
        value={value}
        max={max}
        readOnly
        size={size}
        precision={0.5}
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
