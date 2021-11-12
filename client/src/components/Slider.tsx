import SimpleImageSlider from 'react-simple-image-slider'
import { makeStyles } from '@material-ui/core/styles'

const images = [
  {
    url: 'https://image.freepik.com/free-photo/customer-giving-credit-card-cashier-desk-with-pos-terminal-payment-cropped-shot-closeup-hands-shopping-concept_74855-11658.jpg',
  },
  {
    url: 'https://image.freepik.com/free-photo/black-friday-title-near-different-stationery_23-2147958106.jpg',
  },
  {
    url: 'https://image.freepik.com/free-photo/sale-discount-promotion-special-offer-graphic-concept_53876-122378.jpg',
  },
  {
    url: 'https://image.freepik.com/free-photo/young-girl-with-present_144627-45100.jpg',
  },
  {
    url: 'https://image.freepik.com/free-photo/woman-red-lying-floor-with-laptop-card_23-2147950623.jpg',
  },
  {
    url: 'https://image.freepik.com/free-photo/order-concept-with-wooden-block-paper-basket-icon-blue-table-flat-lay-man-hand-pointing_176474-10443.jpg',
  },
]

const useStyles = makeStyles(() => ({
  imageSlider: {
    marginTop: '5%',
    marginBottom: '5%',
    marginLeft: '15%',
    textAlign: 'center',
    width: '70%',
  },
}))

function Slider() {
  const classes = useStyles()
  return (
    <div className={classes.imageSlider}>
      <SimpleImageSlider
        width="70%"
        height="70vh"
        images={images}
        showBullets={true}
        autoPlay={true}
        autoPlayDelay={5}
        showNavs={true}
      />
    </div>
  )
}

export default Slider
