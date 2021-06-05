const express = require('express')
const router = express.Router()
const EventCtrl = require('../controllers/eventControllers')
const { authenticateUser, checkIfAdmin } = require('../middlewares/authenticate')

/* 
router.post('/events', authenticateUser, EventCtrl.createNewEvent)

router.get('/events' , authenticateUser, EventCtrl.fetchEvents)


router.get('/events/:id', authenticateUser,  EventCtrl.fetchOneEvent)


router.put('/events/:id', authenticateUser, checkIfAdmin, EventCtrl.updateOneEvent)


router.delete('/events/:id', authenticateUser, checkIfAdmin, EventCtrl.deleteOneEvent)
*/

router.post('/events', EventCtrl.createNewEvent)

router.get('/events', EventCtrl.fetchEvents)


router.get('/events/:id',  EventCtrl.fetchOneEvent)


router.put('/events/:id', EventCtrl.updateOneEvent)


router.delete('/events/:id', EventCtrl.deleteOneEvent)

module.exports = router

