import React from 'react';
import { Grid } from '@material-ui/core';

import CardComponent from './Card/Card';
import styles from './Cards.module.css';

const Cards = ({ caseData: { confirmed, recovered, deaths, lastUpdate: caseLastUpdate },
  vaccineData: { vaccine, lastUpdate: vaccineLastUpdate }
}) => {
  if(!confirmed) {
    return 'Loading...';
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <CardComponent
          className={styles.confirmed}
          cardTitle="Infected"
          value={confirmed}
          lastUpdate={caseLastUpdate}
          cardSubtitle="Number of active cases of COVID-19"
        />
        <CardComponent
          className={styles.recovered}
          cardTitle="Recovered"
          value={recovered}
          lastUpdate={caseLastUpdate}
          cardSubtitle="Number of recoveries from COVID-19"
        />
        <CardComponent
          className={styles.deaths}
          cardTitle="Deaths"
          value={deaths}
          lastUpdate={caseLastUpdate}
          cardSubtitle="Number of deaths caused by COVID-19"
        />
        <CardComponent
          className={styles.vaccine}
          cardTitle="Vaccinated"
          value={vaccine}
          lastUpdate={vaccineLastUpdate}
          cardSubtitle="Number of people have been vaccinated"
        />
      </Grid>
    </div>
  );
};

export default Cards;