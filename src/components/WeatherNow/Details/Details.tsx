import React from 'react';

import Grid from '@material-ui/core/Grid';
import { DetailsItem } from './DetailsItem/DetailsItem';

export const Details: React.FC = () => {
  return (
    <Grid container justifyContent='center' spacing={5}>
      <DetailsItem icon='tonality' value='1009 hpa' />
      <DetailsItem icon='opacity' value='74%' />
      <DetailsItem icon='grain' value='4 m/s' />
    </Grid>
  );
};
