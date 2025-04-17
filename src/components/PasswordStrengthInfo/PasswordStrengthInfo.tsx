import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { PasswordStrengthInfoProps } from "./types";

const passwordChecks = {
  minLength: (password: string, minLength: number) =>
    password.length >= minLength,
  hasUppercase: (password: string) => /[A-Z]/.test(password),
  hasLowercase: (password: string) => /[a-z]/.test(password),
  hasNumber: (password: string) => /\d/.test(password),
  hasSpecial: (password: string) => /[!@#$%^&*(),.?":{}|<>]/.test(password)
};

function PasswordStrengthInfo({
  password,
  minLength = 8
}: PasswordStrengthInfoProps) {
  const { t } = useTranslation();

  const checks = [
    {
      label: t("At least * characters", {
        minLength
      }),
      valid: passwordChecks.minLength(password, minLength)
    },
    {
      label: t("Contains uppercase letters"),
      valid: passwordChecks.hasUppercase(password)
    },
    {
      label: t("Contains lowercase letters"),
      valid: passwordChecks.hasLowercase(password)
    },
    {
      label: t("Contains numbers"),
      valid: passwordChecks.hasNumber(password)
    },
    {
      label: t("Contains special characters"),
      valid: passwordChecks.hasSpecial(password)
    }
  ];

  return (
    <Box mt={1}>
      <Typography variant="body2" mb={1}>
        {t("For your security, choose a password you've never used before.")}
      </Typography>
      <List dense>
        {checks.map(({ label, valid }, idx) => (
          <ListItem key={idx}>
            <ListItemIcon>
              {valid ? (
                <CheckCircleIcon color="success" fontSize="small" />
              ) : (
                <CancelIcon color="disabled" fontSize="small" />
              )}
            </ListItemIcon>
            <ListItemText primary={label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default PasswordStrengthInfo;
