import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Product } from '../types'
import axios from 'axios'

function Product() {
  const [product, setProduct] = useState<Product{}>({})
  const { productId } = useParams()

  useEffect(() => {
    axios
      .get<Product[]>(`/products/${productId}`)
      .then((res) => setProduct(res.data))
  }, [productId])
  return <div></div>
}

export default Product
