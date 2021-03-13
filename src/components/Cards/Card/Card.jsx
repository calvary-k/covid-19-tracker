import React from 'react';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import CountUp from 'react-countup';

const CardComponent = ({ cardTitle, value, lastUpdate, cardSubtitle }) => (
  <Grid item xs={3} md={3} component={Card}>
    <CardContent>
      <Typography color="textSecondary" gutterBottom>{cardTitle}</Typography>
      <Typography variant="h5" component="h2">
        <CountUp start={0} end={value} duration={2.5} separator="," />
      </Typography>
      <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
      <Typography variant="body2" component="p">{cardSubtitle}</Typography>
    </CardContent>
  </Grid>
);

export default CardComponent;