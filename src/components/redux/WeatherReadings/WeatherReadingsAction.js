import axios from 'axios'
import { apiKey } from '../../../apiConfig';
import {
    FETCH_WEATHER_READINGS,
    FETCH_WEATHER_READINGS_SUCCESS,
    FETCH_WEATHER_READINGS_FAILURE
} from './WeatherReadingsTypes'

export const fetchWeatherReadings = () => {
  const weatherURL =`http://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID=${apiKey}`

  return (dispatch) => {
    dispatch(fetchWeatherReadingsRequest())
    axios
      .get(weatherURL)
      .then(response => {
        // response.data is the readings
        const readings = response.data
        dispatch(fetchUsersSuccess(readings))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchUsersFailure(error.message))
      })
  }
}

export const fetchWeatherReadingsRequest = () => {
  return {
    type: FETCH_WEATHER_READINGS
  }
}

export const fetchWeatherReadingsSuccess = readings => {
  return {
    type: FETCH_WEATHER_READINGS_SUCCESS,
    payload: readings
  }
}

export const fetchWeatherReadingsFailure = error => {
  return {
    type: FETCH_WEATHER_READINGS_FAILURE,
    payload: error
  }
}