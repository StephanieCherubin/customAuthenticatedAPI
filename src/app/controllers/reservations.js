const Reservations = require('../model/reservation')
// const Seats = require('../model/seat')
// const Showings = require('../model/showing')


module.exports = function(app) {

  // Create and save Reservation
  server.create = (req, res) => {
      if (!req.body.content) {
          return res.status(400).send({
              message: 'Reservation content cannot be empty.'
          })
      }

      const reservation = new Reservation({
          title: req.body.title || 'Untitled reservation',
          content: req.body.content
      })

      reservation
          .save()
          .then(data => {
              res.send(data)
          }).catch(error => {
              res.status(500).send({
              message: error.message || 'An error occured while creating the reservation.'
          })
      })
  }

  // Retrieve and return all reservations from the database
  server.findAll = (req, res) => {
      Reservation
          .find()
          .then(reservations => {
              res.send(reservations)
          }).catch(error => {
              res.status(500).send({
              message: error.message || 'Some errors occured while retrieving reservations'
          })
      })
  }

  // Find a single reservation with reservationId
  server.findOne = (req, res) => {
      Reservation.findById(req.params.reservationId)
      .then(reservation => {
          if (!reservation) {
              return res.status(404).send({
                  message: 'Reservation not found with id ' + req.params.reservationId
              })
          }
          res.send(reservation)
      })
      .catch(error => {
          if (error.kind === 'ObjectId') {
              return res.status(404).send({
                  message: 'Reservation not found with id ' + req.params.reservationId
              })
          }
          return res.status(500).send({
              message: 'Error retrieving reservation with id ' + req.params.reservationId
          })
      })
  }

  // Update an reservation identified by the reservationId in the request.
  server.update = (req, res) => {
      if ( !req.body.content) {
          return res.status(400).send({
              message: 'Reservation content cannot be empty.'
          })
      }

      Reservation.findByIdAndUpdate(req.params.reservationId, {
          title: req.body.title || 'Untitled reservation',
          content: req.body.content
      }, {new: true})
      .then(reservation => {
          if (!reservation) {
              return res.status(404).send({
                  message: 'Reservation not found with id ' + req.params.reservationId
              })
          }
          res.send(reservation)
      })
      .catch(error => {
          if (error.kind === 'ObjectId') {
              return res.status(404).send({
                  message: 'Reservation not found with id ' + req.params.reservationId
              })
          }
          return res.status(500).send({
              message: 'Error updating reservation with id ' + req.params.reservationId
          })
      })
  }

  // Delete an reservation with the specified reservationId in the request
  server.delete = (req, res) => {
      Reservation.findByIdAndRemove(req.params.reservationId)
      .then(reservation => {
          if (!reservation) {
              return res.status(404).send({
                  message: 'Reservation not found with id ' + req.params.reservationId
              })
          }
          res.send({ message: 'Reservation deleted successfuly!' })
      })
      .catch(error => {
          if (error.kind === 'ObjectId' || error.name === 'NotFound') {
              return res.status(404).send({
                  message: 'Reservation not found with id ' + req.params.reservationId
              })
          }
          return res.status(500).send({
              message: 'Could not delete reservation with id ' + req.params.reservationId
          })
      })
  }
};
