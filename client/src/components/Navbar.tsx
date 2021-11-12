import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  navBar: {
    display: 'flex',
    backgroundColor: 'rgb(240, 222, 203)',
    justifyContent: 'space-around',
  },
  logo: {
    width: '70%',
    fontSize: '0.5em',
    alignContent: 'center',
  },
  navigation: {
    width: '30%',
  },
  navList: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'space-around',
  },
  navItem: {
    textDecoration: 'none',
    color: 'rgb(61, 0, 0)',
    fontWeight: 'bold',
    fontFamily: 'ubuntu',
    '& a:hover': {
      cursor: 'pointer',
    },
    li: {
      '& a:hover': {
        cursor: 'pointer',
        background: 'rgb(61, 0, 0)',
      },
    },
  },
})

export default function NavBar() {
  const classes = useStyles()

  return (
    <div className={classes.navBar}>
      <div className={classes.logo}></div>
      <div className={classes.navigation}>
        <ul className={classes.navList}>
          <li>
            <a href="#" className={classes.navItem}>
              About
            </a>
          </li>
          <li>
            <a href="" className={classes.navItem}>
              Home
            </a>
          </li>
          <li>
            <a href="" className={classes.navItem}>
              Users
            </a>
          </li>
          <li>
            <a href="" className={classes.navItem}>
              Products
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
