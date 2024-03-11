import {Router} from 'express';
import {getAllProducts, getProductById, getProductByCategory, createProduct, updateProduct, deleteProduct} from '../controllers/products.controller.js';
const router = Router()

router.get('/products',getAllProducts)
router.get('/products/:id',getProductById)
router.get('/products/category/:category',getProductByCategory)
router.post('/product',createProduct)
router.put('/products/:id',updateProduct)
router.delete('/products/:id',deleteProduct)

export default router
