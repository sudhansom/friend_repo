import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Product } from '../types'
import axios from 'axios'

interface ParamProps {
    productId: string
}
function ProductPage() {
  const [product, setProduct] = useState<Product>()
  const { productId } = useParams<ParamProps>()
const x = useParams()
  useEffect(() => {
    axios
      .get<Product>(`/products/${productId}`)
      .then((res) => setProduct(res.data))
  }, [productId])
  console.log("hello", x)
  return <div>
      {product?._id && product.name}
  </div>
}

export default ProductPage
