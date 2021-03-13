import React from 'react';

import { fetchCaseData, fetchProvinceData, fetchVaccineData } from './api';
import { Cards, Chart, LocationPicker } from './components';
import styles from './App.module.css';

class App extends React.Component {
  state = {
    caseData: {},
    vaccineData: {},
    province: 'INDONESIA',
  };

  async componentDidMount() {
    const caseData = await fetchCaseData();
    const vaccineData = await fetchVaccineData();

    this.setState({ caseData, vaccineData });
  }

  handleProvinceChange = async (province) => {
    if(province) {
      const caseData = await fetchProvinceData(province);

      this.setState({ caseData, province: province });
    } else {
      const caseData = await fetchCaseData();

      this.setState({ caseData, province: 'INDONESIA' });
    }
  }

  render() {
    const { caseData, vaccineData, province } = this.state;

    return (
      <div className={styles.container}>
        <Cards caseData={caseData} vaccineData={vaccineData}/>
        <LocationPicker handleProvinceChange={this.handleProvinceChange} />
        <Chart caseData={caseData} province={province}/>
      </div>
    );
  }
}

export default App;