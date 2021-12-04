import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

export const questionMC = (
  <Grid
      container
      item
      direction='row'
      justifyContent='space-between'
      alignItems= 'center'
      spacing={2}
    >
    <Typography variant='h4' item>
      Q#
    </Typography>
    <Button variant='contained' item>
      A
    </Button>
    <Button variant='contained' item>
      B
    </Button>
    <Button variant='contained' item>
      C
    </Button>
    <Button variant='contained' item>
      D
    </Button>
  </Grid>
)