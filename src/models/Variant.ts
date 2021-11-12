import mongoose, { Document, Schema } from 'mongoose'
import { ProductDocument } from './Product'

export type VariantDocument = Document & {
  productId: ProductDocument[]
  productColor: string
  productSize: string
}

const variantSchema = new mongoose.Schema({
  productId: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],
  productColor: {
    type: String,
    required: true,
  },
  productSize: {
    type: String,
    required: true,
  },
})

export default mongoose.model<VariantDocument>('Variant', variantSchema)
