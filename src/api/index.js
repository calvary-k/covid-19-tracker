import axios from 'axios';

const CASE_API_URL = 'https://apicovid19indonesia-v2.vercel.app/api/indonesia';
const VACCINE_API_URL = 'https://vaksincovid19-api.now.sh/api/vaksin';

export const fetchCaseData = async () => {
  try {
    const { data: { positif: confirmed, sembuh: recovered, meninggal: deaths, lastUpdate } } = await axios.get(CASE_API_URL);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch(error) {
    return error;
  }
};

export const fetchVaccineData = async () => {
  try {
    const { data: { vaksinasi1: vaccine, lastUpdate } } = await axios.get(VACCINE_API_URL);

    return { vaccine, lastUpdate };
  } catch(error) {
    return error;
  }
};

export const fetchProvinceData = async (provinceName) => {
  try {
    const { data } = await axios.get(`${CASE_API_URL}/provinsi/more`);

    for(const { provinsi: name, kasus: confirmed, sembuh: recovered, meninggal: deaths, last_date: lastUpdate } of data) {
      if(name === provinceName) {
        return { confirmed, recovered, deaths, lastUpdate };
      }
    }

    return null;
  } catch(error) {
    return error;
  }
};

export const fetchProvincesName = async () => {
  try {
    const { data } = await axios.get(`${CASE_API_URL}/provinsi/more`);

    return data.map((province) => province.provinsi);
  } catch(error) {
    return error;
  }
};