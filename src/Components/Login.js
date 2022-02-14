import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import '../Components/Login.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { postData } from '../FetchData/fetachAllServices';

 
const useStyles = makeStyles((theme) => ({
  paper: {
    
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login(props) {
  const classes = useStyles();
  const history = useHistory();
  const [email, setEmail] =  useState('')
  const [password, setPasword] = useState('')

  const login=async()=>{
    var body ={
      "username":email,
      "password":password
  }
    
    if(props.state != undefined || props.state != null || props.state==false){
      var result = await postData('auth/verifydelear/username',body)
      // alert(JSON.stringify(result))
      if(result.status){
        alert("login successfully", result.token)
        localStorage.setItem('TOKEN', result.token)
        localStorage.setItem('USER', 'DEALER')
        history.push('/dashboard')
      }else{
        alert(result.msg)
      }
    }else{
      var result = await postData('auth/verifydriver/username',body)
      if(result.status){
        alert("login successfully", result.token)
        localStorage.setItem('TOKEN', result.token)
        localStorage.setItem('USER', 'DRIVER')
        history.push('/dashboard')
      }else{
        alert(result.msg)
      }
    }
  }
  // alert(password)
  return (
      <div className='body'>
    <Container className='mainContainer' component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>

        <h1 className='heading'>PRO DEV TRANSPORT SERVICES</h1>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <div className={classes.form} >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(event)=>setEmail(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(event)=>setPasword(event.target.value)}
          />
         
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={()=>login()}
          >
            {props.btntxt}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link style={{cursor:'pointer'}} variant="body2" onClick={props.handleClick}>
                {props.linktxt}
              </Link>
            </Grid>
            <Grid item>
                
              <Link style={{cursor:'pointer'}} variant="body2"  onClick={()=>{ history.push({pathname:'/flipper2', state:props.state})}}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </div>
      </div>
      <Box mt={8}>
        {/* <Copyright /> */}
      </Box>
    </Container>
    </div>
  );
}