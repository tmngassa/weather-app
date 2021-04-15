import React, { Component, useEffect } from 'react'
import { apiKey } from '../apiConfig';
import DayCard from './DayCard'
import ToggleDegree from './ToggleDegree'
import { fetchWeatherReadings } from './redux'

export default class WeekDays extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            fullData: null,
            dailyData: null,
            degreeType: "fahrenheit"
        }
    }

    componentDidMount = () => {

        const weatherURL =`http://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID=${apiKey}`

        fetch(weatherURL)
            .then(res => res.json())
            .then(data => {
            const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
            this.setState({
                fullData: data.list,
                dailyData: dailyData
            }, () => console.log(this.state))
            })
    }

    updateForecastDegree = event => {
        this.setState({
            degreeType: event.target.value
        }, () => console.log(this.state))
    }

    displayDayCard = () => this.state.dailyData && 
        this.state.dailyData.map((reading, index)=> <DayCard reading={reading} degreeType={this.state.degreeType} key={index} />)


    render() {
        return (
            <div className="container">
                <h1 className="display-1 jumbotron">Weather App</h1>
                <h5 className="display-5 text-muted">Maryland, US</h5>
                <ToggleDegree degreeType={this.state.degreeType} updateForecastDegree={this.updateForecastDegree}/>
                <div className="row justify-content-center">
                    {this.displayDayCard()}                    
                </div>
            </div>
        )
    }
}
