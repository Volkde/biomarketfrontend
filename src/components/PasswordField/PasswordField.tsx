import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  IconButton,
  InputAdornment,
  TextField,
  TextFieldProps
} from "@mui/material";
import { useState } from "react";

function PasswordField({
  value,
  onChange,
  error,
  helperText,
  label,
  name
}: TextFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  const handleToggle = () => setShowPassword(prev => !prev);

  return (
    <TextField
      fullWidth
      margin="normal"
      type={showPassword ? "text" : "password"}
      label={label || "Password"}
      name={name || "password"}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleToggle} edge="end">
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        )
      }}
    />
  );
}

export default PasswordField;
