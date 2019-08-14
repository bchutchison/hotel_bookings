use hotel;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Daniella",
    checkedIn: true,
    email: "daniella@email.com"
  },
  {
    name: "Lawrie",
    checkedIn: false,
    email: "lawrie@email.com"
  },
  {
    name: "Ben",
    checkedIn: false,
    email: "ben@email.com"
  },
  {
    name: "Dave",
    checkedIn: false,
    email: "dave@email.com"
  },
  {
    name: "John",
    checkedIn: false,
    email: "john@email.com"
  },
  {
    name: "Sue",
    checkedIn: false,
    email: "sue@email.com"
  },
]);
