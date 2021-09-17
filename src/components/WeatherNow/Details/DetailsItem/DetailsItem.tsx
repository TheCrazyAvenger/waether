import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

type DetailsItemProps = {
  icon: string;
  value: string;
};

export const DetailsItem: React.FunctionComponent<DetailsItemProps> = ({
  icon,
  value,
}) => {
  return (
    <Grid item>
      <Grid container justifyContent='center' spacing={1}>
        <Grid item>
          <i className='material-icons'>{icon}</i>
        </Grid>
        <Grid item>
          <Typography className='details-value'>{value}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
