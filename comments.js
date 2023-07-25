// Create web server

// Import modules
const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsController');

// Create routes
router.get('/', commentsController.index);
router.post('/', commentsController.create);
router.delete('/:id', commentsController.delete);

// Export router
module.exports = router;