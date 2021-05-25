const express = require('express')
const router = express.Router()
const EventCtrl = require('../controllers/eventControllers')

router.post('/events', EventCtrl.createNewEvent)

router.get('/events', EventCtrl.fetchEvents)


router.get('/events/:id', EventCtrl.fetchOneEvent)


router.put('/events/:id', EventCtrl.updateOneEvent)


router.delete('/events/:id', EventCtrl.deleteOneEvent)


module.exports = router