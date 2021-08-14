import axios from 'axios'

const url = 'https://covid19.mathdro.id/api';

export const Cov19 = async(country?: string) => {
    const changableUrl = country ? `${url}/countries/${country}` : url;

    try {
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(changableUrl)
        console.log('changableUrl==>', changableUrl)
        return {confirmed: confirmed.value, recovered: recovered.value, deaths: deaths.value, lastUpdate};
    } catch (error) {
        console.log('Cov19 Error =>', error)
        return {confirmed: 0, deaths: 0, recovered: 0, lastUpdate: ''}
    }
}

export const Cov19Daily = async() => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        const result = data.map((res: any) => ({
            confirmed: res.confirmed.total,
            deaths: res.deaths.total,
            date: res.reportDate
        }))
        return result
    } catch (error) {
        console.log('Cov19 Error =>', error)
        return null
    }
}

export const fetchCountries = async() => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`)
        return countries.map((country:any) => country.name)
    } catch (error) {
        return null
    }
}