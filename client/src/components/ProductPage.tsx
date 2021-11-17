import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Product } from '../types'
import axios from 'axios'
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
//import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { IconButton, makeStyles } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import NavBar from './Navbar';
import FooterNav from './FooterNav';
import Login from './Login';
import { User } from '../types'

const useStyles = makeStyles({
  styledCard: {
    maxWidth: "30%",
    marginLeft: "38%",
    marginTop: "2.5%",
    marginBottom: "2.5%",
    backgroundColor: 'rgb(240, 222, 203)'
  },
  media: {
    height: 250,
    padding: "5%"
  },
  btn: {
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",
    width: "100%",
    backgroundColor: "#1976D2",
  },
  name: {
    backgroundColor: "#f50057",
    color: "white",
    height: "1.5rem",
    paddingBottom: "7%",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "2rem"
  },
  info: {
    variant: "h4",
    component: "h2",
    align: "center",
    
  },
  buttonIcons: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});


interface ParamProps {
    productId: string
}
function ProductPage() {
  const [product, setProduct] = useState<Product>()
  const { productId } = useParams<ParamProps>()
  const classes = useStyles();
  useEffect(() => {
    axios
      .get<Product>(`/products/${productId}`)
      .then((res) => setProduct(res.data))
  }, [productId])
  
  const [user, setUser] = useState<User>()
  const setUserData = (user: User) => {
    setUser(user)
  }

  return (
    <>
      <Login setUser={setUserData} />
      <NavBar />
      <Card className={classes.styledCard}>
        <CardActionArea>
          <CardContent  color="secondary">
            <Typography className={classes.name}>
              {product?.name}
            </Typography>
          </CardContent>
          <CardMedia
            className={classes.media}
            image={product?.image}
            title="Product picture"
          />
          <CardContent>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.info}>
                  <strong>Price</strong>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>DKK {product?.price}</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.info}>
                  <strong>Variants</strong>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                  { product?.variants.map((variant)=> {
                    return  <Typography>{variant}</Typography>
                  })
                  }
                
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.info}>
                  <strong>Description</strong>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{product?.description}</Typography>
              </AccordionDetails>
            </Accordion>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.buttonIcons}>
              <IconButton aria-label="add to shoppingcart">
                <AddShoppingCartIcon color="secondary" />
              </IconButton>
              <IconButton aria-label="add to shoppingcart">
                <Link to={'/'}>
                  <ArrowBackIcon color="secondary" />
                </Link>
              </IconButton>
              <IconButton aria-label="add to shoppingcart">
                <FavoriteIcon color="secondary"/>
              </IconButton>
            </CardActions>
      </Card>
      <FooterNav />
    </>
  );
}

export default ProductPage

