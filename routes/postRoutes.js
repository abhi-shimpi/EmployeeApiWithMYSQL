const express = require('express');
const postController = require('../controllers/postControllers');
const router = express.Router();

router.route("/").get(postController.getAllEmployee);

router.route("/").post(postController.createEmployee);

router.route("/:id").get(postController.getEmlpoyeeById);

router.route('/:id').delete(postController.deleteEmployee);

router.route("/:id").put(postController.updateEmployee);
module.exports = router;