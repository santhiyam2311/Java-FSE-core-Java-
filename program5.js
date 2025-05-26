function Event(name, date, seats) {
  this.name = name;
  this.date = date;
  this.seats = seats;
}

Event.prototype.checkAvailability = function() {
  return this.seats > 0;
};

const event1 = new Event("Tech Expo", "2025-06-20", 50);
console.log(event1.checkAvailability());
console.log(Object.entries(event1));
