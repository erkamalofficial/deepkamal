import {
  Grid,
  IconButton,
  InputBase,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import axios from "axios";
import { Menu, Search, Directions, SearchSharp } from "@material-ui/icons";
import { convertTempToCel } from "../Helpers/convertTempToCel";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    minWidth: 100,
    maxWidth: 500,
    width: "100%",
    margin: "0 auto",
    borderRadius: 50,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  headingStyle: {
    color: " #0c44a08c",
    textAlign: "center",
    fontFamily: "fantasy",
    fontWeight: "bold",
    letterSpacing:8
  },
  mainContent: {
    minWidth: 100,
    maxWidth: 700,
    width: "100%",
    margin: "0 auto",
    height: "auto",
    marginTop: 20,
    marginBottom: 20,
    boxShadow: "0 1px 3px #0000007a",
    borderRadius: 5,
    padding: 20,
  },
  errMessage: {
    color: "#de3636",
    textAlign: "center",
    marginTop: 20,
  },
  dateStyle: {
    fontSize: 14,
    color: "#757575",
  },
}));

export const Weather = () => {
  const classes = useStyles();
  const [userInput, setUserInput] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [weatherInfo, setWeatherInfo] = useState<any>();

  const handelSearch = async (e: any) => {
    e.preventDefault();
    try {
      const result = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=1895c294164a5734df21db49db2ecf3c`
      );
      if (result.status === 200) {
        setErrorMsg("");
        setWeatherInfo(result.data);
      }
    } catch (e) {
      setWeatherInfo(null);
      setErrorMsg("Oooops...! No Recornd found, Please Enter Different City");
    }
  };

  return (
    <>
      <div className="my-5">
        <h1 className={classes.headingStyle}>Local Weather</h1>
      </div>

      <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Enter Your City"
          inputProps={{ "aria-label": "Enter your city" }}
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
          onClick={handelSearch}
        >
          <SearchSharp />
        </IconButton>
      </Paper>

      {weatherInfo ? (
        <div className={classes.mainContent}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h5">
                {String(weatherInfo.name)}, {String(weatherInfo.sys.country)}{" "}
                <span className={classes.dateStyle}>
                  {new Date().toLocaleDateString("en-US", {
                    weekday: "short",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h4">
                {convertTempToCel(weatherInfo.main.temp as number)}
                <span>&#176;</span>C
              </Typography>
              <Typography variant="body1">
                {String(weatherInfo.weather[0].main)}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <img
                width="100px"
                height="100px"
                src={`http://api.openweathermap.org/img/w/${weatherInfo.weather[0].icon}.png`}
                alt=""
              />
              <Typography variant="body1">
                {String(weatherInfo.weather[0].description)}
              </Typography>
            </Grid>

            {/* <Grid item xs={6}>
              <Typography variant="body1">
                Temperature :{" "}
                {convertTempToCel(weatherInfo.main.temp as number)}
                <span>&#176;</span> C
              </Typography>
            </Grid>
            <Grid item xs={6}>
            <Typography variant="body1">
                Pressure :{" "}
                {String(weatherInfo.main.pressure)}
              </Typography>
            </Grid> */}
          </Grid>
        </div>
      ) : (
        <Typography className={classes.errMessage} variant="body1">
          {errorMsg}
        </Typography>
      )}
    </>
  );
}