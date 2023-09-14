require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const mongoose = require('mongoose')
const Flights = require('./models/Flight')

////////Database Collection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  mongoose.connection.once("open", () => {
    console.log("Jacked in and start up")
  })
////////////////////////

////////View Engine
app.set("view engine", 'jsx')
//Default is to look inside the views folder
// app.set('views', './views')
const jsxViewEngine = require('jsx-view-engine')
const Flight = require('./models/Flight')
app.engine("jsx", jsxViewEngine())
///////////////////

/////////Middleware
app.use(express.urlencoded({extended: false}))


//Index Route
app.get("/flights", async (req, res) => {
  try {
    const foundFlights = await Flights.find({})
    res.render("Index", {flights: foundFlights})
  } catch (error) {
    res.status(400).send(error)
  }
})

//New route
app.get("/flights/new", (req, res) => {
    res.render("New")
})

//Delete Rout

//Update Route

//Create Route
app.post("/flights", async (req, res) => {
  try {
    const createdFlight = await Flight.create(req.body)
    res.status(201).send(createdFlight)
  } catch (error) {
    res.status(400).send(error)
  }
})

//Edit Route

//Show Route
app.get("/flights/:id", async (req, res) => {
  try {
    const foundFlight = await Flight.findById(req.params.id)
    res.status(200).render('Show', {flight: foundFlight})
  } catch (error) {
    res.status(400).send(error)
  }
  
})

app.listen(PORT, ()=>{
    console.log("Spirit Airlines, because we make ghosts.")
})