import React, { Component } from 'react'

export default class Index extends Component {
  render() {
    const { flights } = this.props;
    return (
      <div>
        <h1>Flight Index</h1>
        <nav>
          <a href="/flights/new">Create New Flight</a>
        </nav>
        <ul>
          {
          flights.map((flight, i) => {
            return (
              <li key={i}>{`Airline: ${flight.airline}`} <br /> {`Flight #: ${flight.flightNo}`} <br /> {`Departure Time: ${flight.departs}`}</li>
            )
          })
          }
        </ul>
      </div>
    )
  }
}
