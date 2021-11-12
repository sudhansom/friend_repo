import { useState, useEffect } from 'react'
import axios from 'axios'
import { Product } from '../types'
import React from 'react'
import Card from '@material-ui/core/Card'
import { Link } from 'react-router-dom'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import FavoriteIcon from '@material-ui/icons/Favorite'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

const useStyles = makeStyles(() => ({
  cardContainer: {
    marginLeft: '15%',
    marginRight: '15%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    // display: 'grid',
    //gridTemplateColumns: 'repeat(4, 1fr)',
    //gridGap: '2rem',
    //justifyItems: 'center',
    //gridColumn: 2,
    //background: '#00f',
    //textAlign: 'center',
    //justifyContent: 'space-around',
  },
  cardDimensions: {
    width: '200px',
    alignContent: 'center',
    marginBottom: '3%',
    textAlign: 'center',
    backgroundColor: 'rgb(240, 222, 203)',
  },
  cardMediaDimensions: {
    //width: '300px',
    height: '150px',
    textAlign: 'center',
  },
  buttonIcons: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}))

function Home() {
  const classes = useStyles()
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    axios.get<Product[]>('/products').then((res) => setProducts(res.data))
  }, [])

  return (
    <div className={classes.cardContainer}>
      {products.map((product) => {
        return (
          <Card key={product._id} className={classes.cardDimensions}>
            <CardMedia
              className={classes.cardMediaDimensions}
              image={product.image}
              title={product.name}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {product.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                DKK {product.price}
              </Typography>
            </CardContent>
            <CardActions className={classes.buttonIcons}>
              <IconButton aria-label="add to shoppingcart">
                <AddShoppingCartIcon color="primary" />
              </IconButton>
              <IconButton aria-label="add to shoppingcart">
                <Link to={`/products/${product._id}`}>
                  <MoreHorizIcon color="primary" />
                </Link>
              </IconButton>
              <IconButton aria-label="add to shoppingcart">
                <FavoriteIcon color="primary" />
              </IconButton>
            </CardActions>
          </Card>
        )
      })}
    </div>
  )
}

export default Home
