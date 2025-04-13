import { styled } from '@mui/material/styles'
import { Container, Paper, Typography } from '@mui/material'

export const PageWrapper = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(6),
}))

export const CheckoutPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
}))

export const PageTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(4),
}))
