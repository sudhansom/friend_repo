import express from 'express'

import {
  createProduct,
  updateProduct,
  findProductById,
  findAll,
  deleteProduct,
} from '../controllers/product'

const router = express.Router()

router.get('/', findAll)
router.get('/:productId', findProductById)
router.put('/:productId', updateProduct)
router.delete('/:productId', deleteProduct)
router.post('/', createProduct)

export default router
