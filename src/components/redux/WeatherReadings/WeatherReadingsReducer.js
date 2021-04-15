
import {
    FETCH_WEATHER_READINGS,
    FETCH_WEATHER_READINGS_SUCCESS,
    FETCH_WEATHER_READINGS_FAILURE
} from './WeatherReadingsTypes'
  
  const initialState = {
    readings: [],
    error: ''
  }
  
  const WeatherReadingsReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_WEATHER_READINGS:
        return {
          ...state
        }
      case FETCH_WEATHER_READINGS_SUCCESS:
        return {
          readings: action.payload,
          error: ''
        }
      case FETCH_WEATHER_READINGS_FAILURE:
        return {
          readings: [],
          error: action.payload
        }
      default: return state
    }
  }
  
  export default WeatherReadingsReducer