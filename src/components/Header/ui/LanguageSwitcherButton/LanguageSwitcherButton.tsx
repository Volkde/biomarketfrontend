import LanguageIcon from "@mui/icons-material/Language";
import {
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Tooltip
} from "@mui/material";
import { languages } from "app/languages";
import { MouseEvent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { selectLanguageState } from "store/redux/ui/selectors/selectLanguageState";
import { languageActions } from "store/redux/ui/slice/languageSlice";
import { Language } from "store/redux/ui/types/LanguageState";

function LanguageSwitcherButton() {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { language } = useAppSelector(selectLanguageState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);

  const handleOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    dispatch(languageActions.setLanguage(lng as Language));
    handleClose();
  };

  return (
    <>
      <Tooltip title="Change language">
        <IconButton
          size="large"
          aria-label="Change language"
          aria-haspopup="true"
          onClick={handleOpen}
          color="inherit"
        >
          <LanguageIcon />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        {languages.map(lang => (
          <MenuItem
            key={lang.code}
            selected={language === lang.code}
            onClick={() => handleChangeLanguage(lang.code)}
          >
            <ListItemIcon>
              <span style={{ fontSize: "1.2rem" }}>{lang.flag}</span>
            </ListItemIcon>
            <ListItemText>{lang.label}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default LanguageSwitcherButton;
