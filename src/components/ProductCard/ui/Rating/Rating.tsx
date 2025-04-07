import { Rating as MuiRating, Typography } from "@mui/material";
import { StyledRating, StyledRatingCount } from "./styles";
import { RatingProps } from "./types";

/**
 * Компонент отображения рейтинга продукта
 * 
 * @param value - значение рейтинга
 * @param max - максимальное значение рейтинга (по умолчанию 5)
 * @param count - количество отзывов
 * @param size - размер компонента (small, medium, large)
 * @param readOnly - флаг только для чтения (по умолчанию true)
 * @param onChange - функция обратного вызова при изменении рейтинга
 */
const Rating = ({ 
  value, 
  max = 5, 
  count, 
  size = "medium", 
  readOnly = true,
  onChange,
  precision = 0.5
}: RatingProps) => {
  return (
    <StyledRating>
      <MuiRating 
        value={value} 
        max={max} 
        readOnly={readOnly} 
        size={size} 
        precision={precision}
        onChange={(_, newValue) => {
          if (onChange && newValue !== null) {
            onChange(newValue);
          }
        }}
      />
      {count !== undefined && (
        <StyledRatingCount>
          <Typography variant="body2">({count})</Typography>
        </StyledRatingCount>
      )}
    </StyledRating>
  );
};

export default Rating;
