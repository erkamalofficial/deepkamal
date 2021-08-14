import React, { useEffect, useState } from 'react'
import { Cov19Daily } from '../../api';
import { Line, Bar} from "react-chartjs-2";

export const CovidChart = () => {
    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
        const fetchDailyData = async() => {
            setDailyData(await Cov19Daily())
        }
        fetchDailyData()
    }, [])
    

    const LineChart =  (
        dailyData && dailyData.length !== 0 ? <Line
        type={''}
        data={{
            labels: dailyData.map(({date}) => date),
            datasets: [
                {
                    data: dailyData.map(({confirmed}) => confirmed),
                    label: 'Infected',
                    borderColor: '#3333ff'
                },
                {
                    data: dailyData.map(({deaths}) => deaths),
                    label: 'Deaths',
                    borderColor: '#ff0000',
                }
            ]
        }} /> : null
    )

    return (
        <>
            {LineChart}
        </>
    )
}
