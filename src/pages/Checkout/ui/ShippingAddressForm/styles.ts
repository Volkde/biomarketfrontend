import { styled } from '@mui/material/styles'
import { Box, TextField, Typography, Button } from '@mui/material'

export const FormWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
}))

export const FormTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
}))

export const FormField = styled(TextField)(({ theme }) => ({
  width: '100%',
}))

export const FormActions = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: theme.spacing(2),
}))

export const SubmitButton = styled(Button)(({ theme }) => ({
  minWidth: 120,
}))
