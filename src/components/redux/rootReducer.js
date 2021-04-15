import { combineReducers } from 'redux'
import WeatherReadingsReducer from './WeatherReadings/WeatherReadingsReducer'

const rootReducer = combineReducers({
    weatherReadings: WeatherReadingsReducer
})

export default rootReducer