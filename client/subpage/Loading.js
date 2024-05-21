import React, { useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loading = () => {
  return (
    <Box sx={{ display: 'flex justify-center' }}>
      <CircularProgress />
    </Box>
  );
};

export default Loading;
