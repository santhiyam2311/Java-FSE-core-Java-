const events = [
  { id: 1, name: 'Music Fest', category: 'music' },
  { id: 2, name: 'Tech Talk', category: 'tech' },
  { id: 3, name: 'Jazz Night', category: 'music' }
]

function display(eventsList = []) {
  const box = document.getElementById('modernEvents')
  box.innerHTML = ''
  eventsList.forEach(({ name, category }) => {
    const el = document.createElement('div')
    el.innerText = `${name} - ${category}`
    box.appendChild(el)
  })
}

const clonedList = [...events]
const filtered = clonedList.filter(({ category }) => category === 'music')
display(filtered)
