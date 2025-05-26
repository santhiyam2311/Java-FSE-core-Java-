const events = [
  { name: "Tech Meet", seats: 10 },
  { name: "Art Gallery", seats: 0 }
];

const container = document.querySelector("#eventContainer");

events.forEach(event => {
  const card = document.createElement("div");
  card.textContent = `${event.name} - Seats: ${event.seats}`;
  container.appendChild(card);

  if (event.seats > 0) {
    const btn = document.createElement("button");
    btn.textContent = "Register";
    btn.onclick = () => {
      event.seats--;
      card.textContent = `${event.name} - Seats: ${event.seats}`;
    };
    card.appendChild(btn);
  }
});
