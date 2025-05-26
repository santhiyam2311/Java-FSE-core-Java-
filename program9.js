const container = document.getElementById('eventContainer')
const spinner = document.getElementById('spinner')

function showEvents(data) {
  container.innerHTML = ''
  data.forEach(e => {
    const item = document.createElement('div')
    item.innerText = `${e.name} - ${e.category}`
    container.appendChild(item)
  })
}

function fetchWithThen() {
  spinner.style.display = 'block'
  fetch('https://mocki.io/v1/39ed19a4-d5c8-4cb2-8740-1a7c212cdb46')
    .then(res => res.json())
    .then(data => showEvents(data))
    .catch(() => alert('Error fetching events'))
    .finally(() => spinner.style.display = 'none')
}

async function fetchWithAsync() {
  spinner.style.display = 'block'
  try {
    const res = await fetch('https://mocki.io/v1/39ed19a4-d5c8-4cb2-8740-1a7c212cdb46')
    const data = await res.json()
    showEvents(data)
  } catch {
    alert('Error fetching events')
  }
  spinner.style.display = 'none'
}

fetchWithAsync()
// You can test fetchWithThen() instead by replacing the call above
