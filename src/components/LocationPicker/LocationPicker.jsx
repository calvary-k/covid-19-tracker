import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { fetchProvincesName } from '../../api';

const LocationPicker = ({ handleProvinceChange }) => {
  const [provinces, setProvinces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setProvinces(await fetchProvincesName());
    };

    fetchData();
  }, []);

  return (
    <FormControl>
      <NativeSelect defaultValue="" onChange={(e) => handleProvinceChange(e.target.value)}>
        <option value="">INDONESIA</option>
        {provinces.map((province, i) => <option key={i} value={province}>{province}</option>)}
      </NativeSelect>
    </FormControl>
  );
};

export default LocationPicker;