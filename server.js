const dbConfig = require('./config/db.config')


const db = require("./models");
const Airport = db.airport;
const Flight = db.flight;
const Terminal = db.terminal;

// db connection
db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

const airport = new Airport({
	name: "First Airport",
	country: "US",
  opened: "2020-12-15",
})

airport.save()
console.log("Airport saved", airport)
// Lets Make and Save our first airport

const flightOne = new Flight({
  name: "flight1",
  from: "CDG France",
  to: "JFK New-York, USA",
  airline: "American Airlines"
})
flightOne.save()
console.log("Flight saved", flightOne)

const flightTwo = new Flight({
  name: "flight2",
  from: "Heathrow UK",
  to: "JFK New-York, USA",
  airline: "British Airways"
})
flightTwo.save()
console.log("Another Flight saved", flightTwo)

const airportTwo = new Airport({
	name: "JFK",
	country: "US",
	opened: "1990-12-15"
})

airportTwo.save()
console.log("Another airport saved", airportTwo)

//need to push this to airport one - how do i do that?
const terminal = new Terminal({
	name: "Terminal 1",
	flights: [flightOne, flightTwo],
	capacity: 234324
})
airport.terminals.push(terminal)
terminal.save()
console.log("updated airport", airport)
console.log("Made a terminal", terminal)

// - Hard code the following data in `server.js`:

//   - A flight from CDG France to JFK New-York, USA on American Airlines with no passengers.  The name of the flight is "flight1"
//   - A second flight from Heathrow UK to JFK New-York, USA on British Airways with no passengers.  The name of the flight is "flight2"
//   - An airport called "JFK" in the USA opened on a random date in 1990.
//   - A terminal called "Terminal 1" `pushed` to airport1 with a capacity of 234324 and two flights: flight1 and flight2

// - Save and console.log all the objects and their children in the console - you should see all objects when `node server.js` is executed.