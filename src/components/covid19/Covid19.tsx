import React, { useEffect, useState } from 'react'
import { Cov19 } from '../../api'
import { CaseCard } from './CaseCard'
import { CountryPicker } from './CountryPicker'
import { CovidChart } from './CovidChart'
import { ICov19 } from './ICov19'

export const Covid19 = () => {
    const [state, setState] = useState<ICov19>({confirmed: 0, deaths: 0, recovered: 0, lastUpdate: ''})

    React.useEffect(() => {
        const fetchData = async() => {
            const covdata = await Cov19();
            setState(covdata)
        }
        fetchData()
    }, [])

    const handleCountryChange = async(e:any) => {
        const covdata = await Cov19(e.target.value);
        setState(covdata)
    }

    return (
        <div className="container">
            <h1 className="text-center">Covid 19 tracker</h1>
            <CaseCard {...state}/>
            <CountryPicker handleCountryChange={handleCountryChange} />
            <CovidChart/>
        </div>
    )
}
