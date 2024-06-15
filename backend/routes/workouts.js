const express = require('express')
const {
  getWorkouts,
  getWorkout,
  createWorkout
} = require('../controllers/workoutController.js')

const router = express.Router()

// GET all workouts
router.get('/', getWorkouts)

// GET single workout
router.get('/:id', getWorkout)

// POST new workout
router.post('/', createWorkout)

// DELETE a workout
router.delete('/:id', (req, res) => {
  res.json({msg: 'DELETE a workout'})
})

// UPDATE a workout
router.patch('/:id', (req, res) => {
  res.json({msg: 'UPDATE a workout'})
})

module.exports = router