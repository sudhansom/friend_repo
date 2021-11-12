import mongoose, { Document, Schema } from 'mongoose'
import { VariantDocument } from './Variant'

export type ProductDocument = Document & {
  name: string
  image: string
  price: number
  description: string
  variants: VariantDocument[]
}

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: true,
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  variants: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Variant',
    },
  ],
})

export default mongoose.model<ProductDocument>('Product', productSchema)
