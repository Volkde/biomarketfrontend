export interface RatingProps {
  value: number;
  max?: number;
  count?: number;
  size?: "small" | "medium" | "large";
  readOnly?: boolean;
  onChange?: (newValue: number) => void;
  precision?: number;
}
