import { styled } from '@mui/material/styles'
import { Box, Typography, List, ListItem, Divider } from '@mui/material'

export const SummaryWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
}))

export const Section = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
}))

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
}))

export const AddressLine = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.body2.fontSize,
}))

export const ItemsList = styled(List)(({ theme }) => ({
  padding: 0,
}))

export const ItemRow = styled(ListItem)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  paddingLeft: 0,
  paddingRight: 0,
}))

export const TotalRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  fontWeight: 600,
  marginTop: theme.spacing(2),
}))
