let allEvents = []

function displayEvents(events) {
  const box = document.getElementById('events')
  box.innerHTML = ''
  events.forEach(e => {
    const card = document.createElement('div')
    card.innerHTML = `${e.name} - ${e.category} <button onclick="register('${e.name}')">Register</button>`
    box.appendChild(card)
  })
}

function register(eventName) {
  alert('Registered for ' + eventName)
}

document.getElementById('categoryFilter').onchange = e => {
  const val = e.target.value
  const list = val === 'all' ? [...allEvents] : [...allEvents].filter(ev => ev.category === val)
  displayEvents(list)
}

document.getElementById('searchInput').onkeydown = e => {
  if (e.key === 'Enter') {
    const val = e.target.value.toLowerCase()
    const list = [...allEvents].filter(ev => ev.name.toLowerCase().includes(val))
    displayEvents(list)
  }
}

async function fetchEvents() {
  document.getElementById('spinner').style.display = 'block'
  try {
    const res = await fetch('https://mocki.io/v1/39ed19a4-d5c8-4cb2-8740-1a7c212cdb46')
    const data = await res.json()
    allEvents = data
    displayEvents(allEvents)
  } catch {
    alert('Failed to load')
  }
  document.getElementById('spinner').style.display = 'none'
}

document.getElementById('registerForm').onsubmit = e => {
  e.preventDefault()
  const form = e.target
  const { name, email, event } = form.elements
  let valid = true
  if (!name.value) {
    document.getElementById('nameErr').innerText = 'Name required'
    valid = false
  } else document.getElementById('nameErr').innerText = ''
  if (!email.value) {
    document.getElementById('emailErr').innerText = 'Email required'
    valid = false
  } else document.getElementById('emailErr').innerText = ''
  if (valid) alert(`Signed up for ${event.value}`)
}

fetchEvents()
