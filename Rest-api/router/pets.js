const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { petController } = require('../controllers');

// middleware that is specific to this router

router.get('/', petController.getPets);
router.post('/', auth(), petController.createPet);

router.get('/:petId', petController.getPet);
// router.post('/:themeId', auth(), postController.createPost);
// router.put('/:themeId', auth(), themeController.subscribe);
// router.put('/:themeId/posts/:postId', auth(), postController.editPost);
router.delete('/:themeId', auth(), petController.deletePet);

// router.get('/my-trips/:id/reservations', auth(), themeController.getReservations);

module.exports = router