import Variant, { VariantDocument } from '../models/Variant'
import { NotFoundError } from '../helpers/apiError'

const create = async (variant: VariantDocument): Promise<VariantDocument> => {
  return variant.save()
}

const update = async (
  variantId: string,
  update: Partial<VariantDocument>
): Promise<VariantDocument | null> => {
  const foundVariant = await Variant.findByIdAndUpdate(variantId, update, {
    new: true,
  })
  if (!foundVariant) {
    throw new NotFoundError(`Product ${variantId} not found`)
  }

  return foundVariant
}

const findVariantById = async (variantId: string): Promise<VariantDocument> => {
  const foundVariant = await Variant.findById(variantId)
  if (!foundVariant) {
    throw new NotFoundError(`Product ${variantId} not found`)
  }

  return foundVariant
}

const findAll = async (): Promise<VariantDocument[]> => {
  return Variant.find()
}

const deleteVariant = async (
  variantId: string
): Promise<VariantDocument | null> => {
  const foundVariant = Variant.findByIdAndDelete(variantId)
  if (!foundVariant) {
    throw new NotFoundError(`Product ${variantId} not found`)
  }

  return foundVariant
}

export default {
  create,
  update,
  findVariantById,
  findAll,
  deleteVariant,
}
