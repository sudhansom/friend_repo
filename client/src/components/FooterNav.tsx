import { makeStyles } from '@material-ui/core/styles'
import InputBase from '@material-ui/core/InputBase'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
  navContainer: {
    background: '',
  },
  footerNav: {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: 'rgb(240, 222, 203)',
    padding: 30,
    fontSize: '1.5em',
  },
  navLists: {
    listStyleType: 'none',
    fontSize: 12,
    marginLeft: '10%',
    textAlign: 'center',
  },
  subBtn: {
    marginLeft: '5%',
  },
})

function FooterNav() {
  const classes = useStyles()
  return (
    <div className={classes.navContainer}>
      <Typography variant="h6" color="inherit" className={classes.footerNav}>
        <div>
          <div>Fashion Trends</div>
          <img
            src="https://img.pngio.com/beauty-logo-design-lessons-tes-teach-fashion-designer-logo-png-500_500.png"
            alt="company logo"
            width="150px"
            height="150px"
          />
        </div>
        <div>Address and contact</div>
        <div>
          <ul className={classes.navLists}>
            <li>
              <strong>Services</strong>
            </li>
            <li>
              <a>Email Marketing</a>
            </li>
            <li>Brands</li>
            <li>Compaigns</li>
          </ul>
        </div>
        <div>
          <ul className={classes.navLists}>
            <li>
              <strong>About</strong>
            </li>
            <li>Our Story</li>
            <li>Benefits</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <ul className={classes.navLists}>
            <li>
              <strong>Legal</strong>
            </li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Terms of Use</li>
          </ul>
        </div>
        <div>
          <div>Subscribe Newsletter</div>
          <div>
            <InputBase
              placeholder="Enter your email"
              fullWidth={true}
              color="secondary"
            />
          </div>
          <div>
            <Button variant="contained" color="secondary" fullWidth={true}>
              Send
            </Button>
          </div>
        </div>
      </Typography>
    </div>
  )
}

export default FooterNav
