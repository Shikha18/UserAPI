var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

var User_controller = require('../controllers/sample');

router.get('/test', User_controller.test);
router.get('/', User_controller.users_list);
router.get('/:id', User_controller.users_details);


module.exports = router;

router.post('/', User_controller.user_details_create);

router.put('/:id', User_controller.user_details_update);

router.delete('/:id', User_controller.user_details_delete);

