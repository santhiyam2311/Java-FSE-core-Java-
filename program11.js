document.getElementById('eventForm').onsubmit = e => {
  e.preventDefault()
  const form = e.target
  const { name, email, event } = form.elements
  let valid = true
  if (!name.value) {
    document.getElementById('errName').innerText = 'Name required'
    valid = false
  } else document.getElementById('errName').innerText = ''
  if (!email.value) {
    document.getElementById('errEmail').innerText = 'Email required'
    valid = false
  } else document.getElementById('errEmail').innerText = ''
  if (valid) alert(`Registered for ${event.value}`)
}
