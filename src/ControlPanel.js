// import * as React from 'react'
import DatePicker from 'react-datepicker'
import React, { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'

function ControlPanel(props) {
  const [startDate, setStartDate] = useState(new Date('2014/02/08'))
  const [endDate, setEndDate] = useState(new Date('2014/04/08'))

  return (
    <div className="control-panel">
      <h4>Wejo</h4>
      <h1>Safe Streets and Roads for All</h1>
      <h3>Views</h3>
      <h4>Infractions</h4>
      <div className="control-option">
        <p>Accidents due to driving wrong way</p>
        <label class="switch">
          <input type="checkbox" id="wrong-way" checked="checked" />
          <span class="slider"></span>
        </label>
      </div>
      <h4>Speed Limits</h4>
      <div className="control-option">
        <p>Accidents due to Speeding</p>
        <label class="switch">
          <input type="checkbox" />
          <span class="slider"></span>
        </label>
      </div>
      <h4>Traffic and Journey</h4>
      <div className="control-option">
        <p>Accidents due to lack of turn signal</p>
        <label class="switch">
          <input type="checkbox" />
          <span class="slider"></span>
        </label>
      </div>
      <h3>Filters</h3>
      <h4>Dates and time</h4>
      <p>Time of Day</p>
      <div className="filter-option">
        <p>DAY</p>
        <label id="month"></label>
        <input id="slider" type="range" min="1" max="2" step="1" />
        <p>NIGHT</p>
      </div>
      <>
        <p>Date Range</p>
        <div className="filter-option">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            dateFormat="MM/yyyy"
            showMonthYearPicker
          />
          <label id="month"></label>
          <input id="slider" type="range" min="0" max="11" step="1" />
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            dateFormat="MM/yyyy"
            showMonthYearPicker
          />
        </div>
      </>
    </div>
  )
}

export default React.memo(ControlPanel)
