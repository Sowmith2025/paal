var express = require('express');
var router = express.Router();
const ctrl=require('../controllers/main');
router.get('/',ctrl.index);
router.get('/about', ctrl.about);
router.get('/events', ctrl.events);
router.get('/dashboard',ctrl.dashboard);

module.exports = router;
