# Pseudocode for Project
> Written by Nolan Kovacik & Collaborators
> From <a href="http://learnmongodbthehardway.com/schema/theater/">this source</a>

## Routes
- [ ] Sessions
	- [ ] INDEX sessions *(see all times of movies)*
- [ ] Seats
	- [ ] INDEX seats *(see all seats)*
	- [ ] UPDATE seat *(change status of seat)*
- [ ] Checkout
	- [ ] NEW reservation ~~?~~ *(see reservation creation form)*
	- [ ] CREATE reservation *(reserve one or many seats)*
	- [ ] SHOW reservation *(see single reservation)*
	- [ ] EDIT reservation *(see reservation update form)*
	- [ ] UPDATE reservation *(make internal changes to reservations)*
	- [ ] DESTROY reservation *(cancel reservation)*

## Folder Structure
These are the controllers:
```s
/controllers/*
/controllers/showings.js
/controllers/seats.js
/controllers/reservations.js
```

These are the models:
```s
/models/*
/models/showing.js
/models/seat.js
/models/reservation.js
```