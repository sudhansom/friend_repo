/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, { Document, Schema } from 'mongoose'
import addressSchema, { AddressDocument } from './Address'
import { OrderDocument } from './Order'

export type UserDocument = Document & {
  give_name: string
  family_name: string
  email: string
  telephone: number
  orders: OrderDocument[]
  address: AddressDocument[]
  countryCode: string
}

const userSchema = new mongoose.Schema({
  given_name: {
    type: String,
    required: true,
    index: true,
  },
  family_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  telephone: {
    type: Number,
  },
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Order',
    },
  ],
  countryCode: {
    type: String,
  },
  address: [addressSchema],
})

export default mongoose.model<UserDocument>('User', userSchema)
