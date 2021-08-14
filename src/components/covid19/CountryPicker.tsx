import { FormControl, makeStyles, NativeSelect } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { fetchCountries } from '../../api';

const countryPickerStyles = makeStyles({
    formControl: {

    }
})
export const CountryPicker = (props: {handleCountryChange: (e:any) => void}) => {
    const styles = countryPickerStyles();
    const [countries, setCountries] = useState([])

    useEffect(() => {
        const countryAPI = async() => {
            setCountries(await fetchCountries())
        }
        countryAPI()
    }, [])

    return (
        <div>
            <FormControl className={styles.formControl}>
                <NativeSelect defaultValue="" onChange={(e) => props.handleCountryChange(e)}>
                    {(countries && countries.length !== 0) &&
                        countries.map((name) => {
                            return <option value={name}>{name}</option>
                        })
                    }
                </NativeSelect>
            </FormControl>
        </div>
    )
}
