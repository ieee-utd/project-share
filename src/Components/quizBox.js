import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { questionMC } from './questionMC';
import { questionFR } from './questionFR';
import { questionTF } from './questionTF';

export const quizBox = (
  <Grid 
    container
    direction='column'
    alignItems='center'
    spacing={7}
    xs={12}
  >
    <Typography variant='h1' item>
      Quiz
    </Typography>
    {questionTF}
    {questionMC}
    {questionFR}
    {questionMC}
    {questionFR}
  </Grid>
);