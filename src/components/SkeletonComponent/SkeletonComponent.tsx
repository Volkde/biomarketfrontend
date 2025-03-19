import React from 'react';
import Skeleton from '@mui/material/Skeleton';

interface SkeletonComponentProps {
  width?: number | string;
  height?: number | string;
  variant?: 'text' | 'rectangular' | 'circular';
}

const SkeletonComponent: React.FC<SkeletonComponentProps> = ({ width, height, variant = 'rectangular' }) => {
  return (
    <Skeleton
      width={width}
      height={height}
      variant={variant}
    />
  );
};

export default SkeletonComponent;
