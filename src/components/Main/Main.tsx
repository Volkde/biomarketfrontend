import { Box } from '@mui/material';
import type { MainProps } from './types.ts';

function Main({ children }: MainProps) {
  return <Box>{children}</Box>;
}

export default Main;