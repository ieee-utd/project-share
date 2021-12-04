import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

export const questionTF = (
  <Grid
      container
      item
      direction='row'
      justifyContent='flex-start'
      alignItems= 'center'
      spacing={2}
    >
    <Typography variant='h4' item>
      Q#
    </Typography>
    <Button variant='contained' item>
      T
    </Button>
    <Button variant='contained' item>
      F
    </Button>
  </Grid>
)