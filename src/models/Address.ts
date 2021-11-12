import mongoose, { Document } from 'mongoose'

export type AddressDocument = Document & {
  street: string
  city: string
  postalCode: number
}

const addressSchema = new mongoose.Schema({
  street: {
    type: String,
  },
  city: {
    type: String,
  },
  postalCode: {
    type: Number,
  },
})

export default addressSchema
