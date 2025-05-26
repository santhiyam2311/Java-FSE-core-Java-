const events = [
  { name: "Music Fest", category: "Music" },
  { name: "Tech Talk", category: "Technology" },
  { name: "Painting Workshop", category: "Art" }
];

function addEvent(arr, event) {
  arr.push(event);
}

function registerUser(eventName) {
  console.log(`User registered for ${eventName}`);
}

function filterEventsByCategory(events, category) {
  return events.filter(e => e.category === category);
}

function createRegistrationTracker() {
  const counts = {};
  return function (category) {
    counts[category] = (counts[category] || 0) + 1;
    console.log(`${category} total registrations: ${counts[category]}`);
  };
}

const tracker = createRegistrationTracker();
tracker("Music");
tracker("Music");
tracker("Art");

function dynamicFilter(events, callback) {
  return events.filter(callback);
}

const result = filterEventsByCategory(events, "Music");
document.getElementById("output").textContent = JSON.stringify(result);
