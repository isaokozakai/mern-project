const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// @route  GET api/items
// @desc   Get all items
// @access Public
router.get('/api/items', (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.send(items))
});

// @route  POST api/items
// @desc   Create an item
// @access Public
router.post('/api/items', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save().then(item => res.send(item));
});

// @route  DELETE api/items/:id
// @desc   Delete an item
// @access Public
router.delete('/api/items/:id', (req, res) => {
  Item.findById(req.params.id)
  .then(item => item.remove().then(() => res.send(item)))
  .catch(err => res.status(404).send())
});

module.exports = router;