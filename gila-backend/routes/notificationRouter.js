const express = require('express');
const router = express.Router();
const Notification = require('../schemas/notificationSchema');

router.post('/', (req, res) => {
  const newNotification = new Notification({
    userId: req.body.userId,
    userName: req.body.userName,
    userEmail: req.body.userEmail,
    userPhoneNumber: req.body.userPhoneNumber,
    category: req.body.category,
    sendType: req.body.sendType,
    timestamp: req.body.timestamp,
  });

  newNotification.save()
    .then(() => res.status(200).json(req.body))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.get('/', (req, res) => {
  Notification.find()
    .then(notifications => res.json(notifications))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.put('/:id', (req, res) => {
  Notification.findById(req.params.id)
    .then(notification => {
      notification.read = req.body.read;
      notification.save()
        .then(() => res.json('Notification updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.delete('/:id', (req, res) => {
  Notification.findByIdAndDelete(req.params.id)
    .then(() => res.json('Notification deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
