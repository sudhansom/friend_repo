import { Request, Response, NextFunction } from 'express'

import Product from '../models/Product'
import ProductService from '../services/product'
import { BadRequestError } from '../helpers/apiError'

export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, image, price, description, variants } = req.body
    const product = new Product({
      name,
      image,
      price,
      description,
      variants,
    })
    await ProductService.create(product)
    res.json(product)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

export const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const update = req.body
    const productId = req.params.productId
    const updateProduct = await ProductService.update(productId, update)
    res.json(updateProduct)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

export const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const productId = req.params.productId
    await ProductService.deleteProduct(productId)
    res.status(204).end()
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

export const findProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await ProductService.findProductById(req.params.productId))
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
    res.json(await ProductService.findAll())
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
