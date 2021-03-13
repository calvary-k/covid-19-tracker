import React from 'react';

import { fetchCaseData, fetchVaccineData } from './api';
import { Cards } from './components';
import styles from './App.module.css';

class App extends React.Component {
  state = {
    caseData: {},
    vaccineData: {},
    province: '',
  };

  async componentDidMount() {
    const caseData = await fetchCaseData();
    const vaccineData = await fetchVaccineData();

    this.setState({ caseData, vaccineData });
  }

  render() {
    const { caseData, vaccineData } = this.state;

    return (
      <div className={styles.container}>
        <Cards caseData={caseData} vaccineData={vaccineData}/>
      </div>
    );
  }
}

export default App;