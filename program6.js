const events = [
  { name: "Music Show", category: "Music" },
  { name: "Food Fest", category: "Food" },
  { name: "Music Workshop", category: "Music" }
];

events.push({ name: "Baking Class", category: "Cooking" });

const musicEvents = events.filter(e => e.category === "Music");

const formatted = events.map(e => `Workshop on ${e.name}`);

document.getElementById("events").textContent = formatted.join(", ");
