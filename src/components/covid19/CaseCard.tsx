import { Card, CardContent, Grid, makeStyles, Typography } from '@material-ui/core'
import clsx from 'clsx'
import React from 'react'
import CountUp from 'react-countup'
import { ICov19 } from './ICov19'

const cardStyles = makeStyles({
    container: {
        margin: '50px0'
    },
    card: {
        margin: '0 2%'
    },
    infected: {
        borderBottom: ' 10px solid rgba(0, 0, 255, 0.5)'
    },
    recovered: {
        borderBottom: ' 10px solid rgba(0, 255, 0, 0.5)'
    },
    deaths: {
        borderBottom: ' 10px solid rgba(255, 0, 0, 0.5)'
    }
})

export const CaseCard = (props: ICov19) => {
    const styles = cardStyles();
    const {confirmed, recovered, deaths, lastUpdate} = props;

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={clsx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed} duration={2.5} />
                        </Typography>
                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={clsx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={recovered} duration={2.5} />    
                        </Typography>
                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={clsx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={deaths} duration={2.5} />    
                        </Typography>
                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of deathes caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}
