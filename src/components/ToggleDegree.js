import React from 'react';

const ToggleDegree = ({degreeType, updateForecastDegree}) => {
    return (
      <React.Fragment>
      <div className="form-check form-check-inline">
          <input
          className="form-check-input"
          type="radio"
          name="degree-type"
          value="celsius"
          checked={degreeType === "celsius"}
          onChange={updateForecastDegree}
          />
          <label className="form-check-label" >Celsius</label>
        </div>
        <div className="form-check form-check-inline">
          <input
          className="form-check-input"
          type="radio"
          name="degree-type"
          value="fahrenheit"
          checked={degreeType === "fahrenheit"}
          onChange={updateForecastDegree}
          />
          <label className="form-check-label" >Farenheit</label>
        </div>
      </React.Fragment>
    )
  }
export default ToggleDegree;