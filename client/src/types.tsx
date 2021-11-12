export type User = {
  given_name: string
  family_name: string
  email: string
}

export type Product = {
  _id: string
  name: string
  image: string
  price: number
  description: string
  variants: string[]
}
