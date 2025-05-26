const events = [
 { name: "Music Fest", date: "2025-06-15", seats: 5 },
 { name: "Art Expo", date: "2024-05-10", seats: 10 },
 { name: "Tech Summit", date: "2025-07-01", seats: 0 }
]

const list = document.getElementById("eventList")
const today = new Date()

events.forEach(event => {
 const eventDate = new Date(event.date)
 if (eventDate > today && event.seats > 0) {
  const li = document.createElement("li")
  li.textContent = `${event.name} - ${event.date} (${event.seats} seats left)`
  list.appendChild(li)
  try {
   if (event.seats <= 0) throw "No seats available"
  } catch (err) {
   console.log("Error:", err)
  }
 }
})
