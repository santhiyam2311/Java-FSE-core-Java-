const eventName = "Spring Festival"
const eventDate = "2025-06-10"
let availableSeats = 5
const eventInfo = `Event: ${eventName}, Date: ${eventDate}, Seats left: ${availableSeats}`

console.log(eventInfo)

function registerSeat() {
  if(availableSeats > 0) {
    availableSeats--
    console.log(`Seat registered. Seats left: ${availableSeats}`)
  } else {
    console.log("No seats available")
  }
}

registerSeat()
registerSeat()

class Event {
  constructor(name, date, seats, category) {
    this.name = name
    this.date = new Date(date)
    this.seats = seats
    this.category = category
  }
}

Event.prototype.checkAvailability = function() {
  return this.seats > 0 && this.date > new Date()
}

const events = [
  new Event("Music Fest", "2025-07-01", 10, "music"),
  new Event("Baking Workshop", "2024-12-01", 0, "food"),
  new Event("Tech Talk", "2025-05-15", 15, "tech")
]

function addEvent(name, date, seats, category) {
  events.push(new Event(name, date, seats, category))
}

function registerUser(event) {
  try {
    if(event.checkAvailability()) {
      event.seats--
      console.log(`Registered for ${event.name}. Seats left: ${event.seats}`)
    } else {
      throw "Event full or past"
    }
  } catch(e) {
    console.log(`Cannot register: ${e}`)
  }
}

function filterEventsByCategory(category, callback) {
  return events.filter(e => e.category === category).filter(callback)
}

let totalRegistrations = 0
function registrationCounter() {
  return function() {
    totalRegistrations++
    return totalRegistrations
  }
}

const countRegistrations = registrationCounter()

events.forEach(event => {
  if(event.checkAvailability()) {
    console.log(`${event.name} is upcoming with seats`)
  }
})

addEvent("Art Expo", "2025-08-20", 20, "art")

const musicEvents = events.filter(e => e.category === "music")

const eventCards = events.map(e => `Event: ${e.name}, Date: ${e.date.toDateString()}`)

console.log(eventCards)

registerUser(events[0])
registerUser(events[1])
console.log("Total registrations:", countRegistrations())
