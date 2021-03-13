import React from 'react';

import { fetchCaseData, fetchProvinceData, fetchVaccineData } from './api';
import { Cards, LocationPicker } from './components';
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

  handleProvinceChange = async (province) => {
    if(province) {
      const caseData = await fetchProvinceData(province);

      this.setState({ caseData, province: province });
    } else {
      const caseData = await fetchCaseData();

      this.setState({ caseData, province: province });
    }
  }

  render() {
    const { caseData, vaccineData } = this.state;

    return (
      <div className={styles.container}>
        <Cards caseData={caseData} vaccineData={vaccineData}/>
        <LocationPicker handleProvinceChange={this.handleProvinceChange} />
      </div>
    );
  }
}

export default App;