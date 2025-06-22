const { Router } = require('express');
const { RoleController } = require('../controllers/role.controler');

const router = Router();
const role_controller = new RoleController();
router.get('/', role_controller.getAll);
router.get('/:id', role_controller.getOne);

module.exports = router;