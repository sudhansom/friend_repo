import { Request, Response, NextFunction } from 'express'

import Variant from '../models/Variant'
import VariantService from '../services/variant'
import { BadRequestError } from '../helpers/apiError'

export const createVariant = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { productId, productColor, productSize } = req.body
    const variant = new Variant({
      productId,
      productColor,
      productSize,
    })
    await VariantService.create(variant)
    res.json(variant)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

export const updateVariant = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const update = req.body
    const variantId = req.params.variantId
    const updateVariant = await VariantService.update(variantId, update)
    res.json(updateVariant)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

export const deleteVariant = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const variantId = req.params.variantId
    await VariantService.deleteVariant(variantId)
    res.status(204).end()
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

export const findVariantById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await VariantService.findVariantById(req.params.variantId))
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

export const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await VariantService.findAll())
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
