import React, { Component } from "react";

export default class Show extends Component {
  render() {
    const { flight } = this.props;
    return (
      <div>
        <p>Airline: {flight.airline}</p>
        <p>Flight Number: {flight.flightNo}</p>
        <p>Departure Time: {`${flight.departs}`}</p>
        <p>Airport: {flight.airport}</p>
        <form action="/flights" method="POST">
          <p>
            Destination:{" "}
            <select name="destinations">
              <option value="SAN">SAN</option>
              <option value="AUS">AUS</option>
              <option value="DAL">DAL</option>
              <option value="LAX">LAX</option>
              <option value="SEA">SEA</option>
            </select>
            Arrival Time: <input type="datetime-local" name="arrival" />
          </p>
        </form>
      </div>
    );
  }
}
