import { styled } from '@mui/material/styles'
import { Box, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button, Typography } from '@mui/material'

export const FormWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
}))

export const FormTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
}))

export const RadioGroupStyled = styled(RadioGroup)(({ theme }) => ({
  flexDirection: 'column',
  gap: theme.spacing(1),
}))

export const FormActions = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: theme.spacing(2),
}))

export const SubmitButton = styled(Button)(({ theme }) => ({
  minWidth: 120,
}))
