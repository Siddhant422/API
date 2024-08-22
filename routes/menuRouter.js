import express from 'express';
import { getMenuItems } from '../controllers/menuController.js';
import { createMenuItem } from '../controllers/menuController.js';

const router = express.Router();

router.get('/menu_items', getMenuItems)
router.post('/menu_item', createMenuItem)

export default router;