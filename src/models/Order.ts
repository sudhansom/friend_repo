/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, { Document, Schema } from 'mongoose'
import { ProductDocument } from './Product'
import { UserDocument } from './User'

export type OrderDocument = Document & {
  productId: ProductDocument[]
  userId: UserDocument
  qauntity: number
  shippingDate: Date
}

const orderSchema = new mongoose.Schema({
  productId: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  qauntity: {
    type: Number,
    required: true,
  },
  shippingDate: {
    type: Date,
    required: true,
  },
})

export default mongoose.model<OrderDocument>('Order', orderSchema)
