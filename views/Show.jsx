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
        <p>Destination: {`${flight.destinations[0].airport}`}</p>
        <p>Arrival: {`${flight.destinations[0].arrival}`}</p>
        <form action={`/flights/${flight._id}?_method=PUT`} method="POST">
            Destination:{" "}
            <select name="airport">
              <option value="SAN">SAN</option>
              <option value="AUS">AUS</option>
              <option value="DAL">DAL</option>
              <option value="LAX">LAX</option>
              <option value="SEA">SEA</option>
            </select>
            <input type="datetime-local" name="arrival" />
            <input type="submit" value="Submit New Destination" />
        </form>
      </div>
    );
  }
}
