import express from 'express';
import Categories from '../controller/category.js';

const router = express.Router();

router.post('/create', Categories.create);

router.get('/:id', Categories.getCategory)

router.get('/all', Categories.getAllCategories)

router.patch('/:id', Categories.updateCategory);

router.delete('/:id', Categories.deleteCategory);

export default router;