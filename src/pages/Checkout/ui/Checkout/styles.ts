import { styled } from '@mui/material/styles'
import { Box, Button } from '@mui/material'

export const ButtonGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: theme.spacing(4),
}))

export const Button = styled(Button)(({ theme }) => ({
  minWidth: 120,
}))
