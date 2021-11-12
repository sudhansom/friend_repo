import express from 'express'

import {
  createVariant,
  updateVariant,
  findVariantById,
  findAll,
  deleteVariant,
} from '../controllers/variant'

const router = express.Router()

router.get('/', findAll)
router.get('/:productId', findVariantById)
router.put('/:productId', updateVariant)
router.delete('/:productId', deleteVariant)
router.post('/', createVariant)

export default router
