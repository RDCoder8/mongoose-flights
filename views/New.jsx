const React = require('react')

class New extends React.Component {
  render() {
    const date = new Date();
    const futureDate = date.getDate() + 366;
    date.setDate(futureDate);
    const defaultValue = date.toLocaleDateString('en-CA');
    return (
      <div>
        <h1>
            Add New Flight
        </h1>
        <form action="/flights" method="POST">
            Airline <input type="text" name="airline" />
            Flight Number <input type="number" name="flightNo" min={10} max={9999} /><br />
            Departure <input type="datetime-locale" name="departs" defaultValue={defaultValue}/>
            Airport <select name="airport" defaultValue={'SAN'}>
              <option value="SAN">SAN</option>
              <option value="AUS">AUS</option>
              <option value="DAL">DAL</option>
              <option value="LAX">LAX</option>
              <option value="SEA">SEA</option>
            </select><br />
            <input type="submit" value="Submit New Flight" />
        </form>
        <a href="/flights">Back to flights</a>
      </div>
    )
  }
}

module.exports = New