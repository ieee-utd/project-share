import * as React from 'react';
import Grid from '@mui/material/Grid';
import { TextField, Typography } from '@mui/material';

export const questionFR = (
  <Grid
      container
      item
      direction='row'
      justifyContent='space-between'
      spacing={2}
    >
    <Typography item variant='h4' >
      Q#
    </Typography>
    <TextField label='answer' variant='outlined' item sx={{ flexGrow: .9}}/>
  </Grid>
)