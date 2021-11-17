import axios from 'axios'
import GoogleLogin from 'react-google-login'
import { makeStyles } from '@material-ui/core/styles'

import { User } from '../types'

type Response = {
  token: string
  user: User
}

type LoginProps = {
  setUser: (user: User) => void
}

const useStyles = makeStyles({
  login: {
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center',
    padding: '0 3%',
  },
  googleBtn: {
    width: '100px',
    height: '50px',
    marginTop: '2%',
  },
})

function Login({ setUser }: LoginProps) {
  const classes = useStyles()
  const responseGoogle = async (response: any) => {
    
    const tokenId = response.tokenId
    
    const result = await axios.post<Response>('/google/login', {
      id_token: tokenId,
    })
    
    const token = result.data.token
    
    
    localStorage.setItem('token', token)

    const userData = result.data.user
    console.log("userdata", userData)
    setUser(userData)
  }
  return (
    <div className={classes.login}>
      <img
        src="https://img.pngio.com/beauty-logo-design-lessons-tes-teach-fashion-designer-logo-png-500_500.png"
        alt="company logo"
        width="100px"
        height="100px"
      />
      <GoogleLogin
        clientId="757476884656-hmhbh0ec16t1lsjcse3n7ucqh1u6sdr3.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        className={classes.googleBtn}
      />
    </div>
  )
}

export default Login
