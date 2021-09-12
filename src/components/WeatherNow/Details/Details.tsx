import React from 'react';

import Grid from '@material-ui/core/Grid';
import { DetailsItem } from './DetailsItem/DetailsItem';

type DetailsProps = {
  humidity: number;
  pressure: number;
  wind: number;
};

export const Details: React.FunctionComponent<DetailsProps> = ({
  humidity,
  pressure,
  wind,
}) => {
  return (
    <Grid container justifyContent='center' spacing={5}>
      <DetailsItem value={`${pressure} hpa`} icon='tonality' />
      <DetailsItem value={`${humidity} %`} icon='opacity' />
      <DetailsItem value={`${Math.round(wind)} m/s`} icon='grain' />
    </Grid>
  );
};
