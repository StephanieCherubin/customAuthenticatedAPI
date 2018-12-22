# customAuthenticatedAPI

> RESTful API built with Node.js, Restify, Mongoose and JWT. It uses 'jsonwebtoken' to create the token and restify-jwt-community to protect routes.

## Getting Started

```bash
# Install dependencies
npm install

# Serve on localhost:3000
npm start
```
## API Endpoints
### Routes
-  Sessions
	-  INDEX sessions *(see all times of movies)*
-  Seats
	-  INDEX seats *(see all seats)*
	-  UPDATE seat *(change status of seat)*
-  Checkout
	-  NEW reservation ~~?~~ *(see reservation creation form)*
	-  CREATE reservation *(reserve one or many seats)*
	-  SHOW reservation *(see single reservation)*
	-  EDIT reservation *(see reservation update form)*
	-  UPDATE reservation *(make internal changes to reservations)*
	-  DESTROY reservation *(cancel reservation)*

### User Routes
- POST /register
- POST /auth
### Folder Structure
These are the controllers:
```
/controllers/*
/controllers/showings.js
/controllers/seats.js
/controllers/reservations.js
```

These are the models:
```
/models/*
/models/showing.js
/models/seat.js
/models/reservation.js
```