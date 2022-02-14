import React, { useEffect, useState } from 'react';
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
import '../Components/signup.css'
import { fetchStateorCity, postData } from '../FetchData/fetachAllServices';
import {
    MenuItem,
    Select,
    FormControl,
    InputLabel
  } from "@material-ui/core";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

 
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

export default function DealerSignup(props) {
    const [state, setState] = useState([]);
    const [city, setCity] = useState([]);
    const [getState, setState1] = useState("");
    const [getCity, setCity1] = useState("");
    const [name, setName] = useState('');
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [contactNumber, setContactNumber] = useState('')
    const [matrialType, setMaterialType] = useState('')
    const [weight, setWeight] = useState('')
    const [quantity, setQuantity] = useState('')

    const classes = useStyles();
    const history = useHistory();

    const fecthAllState=async()=>{
        var body = {"country":"India"}
        var list = await fetchStateorCity("https://countriesnow.space/api/v0.1/countries/states",body);
        setState(list.data.states)
    }

    const fecthAllCity=async(userState)=>{
        var body = {"country":"India","state":userState}
        var list = await fetchStateorCity("https://countriesnow.space/api/v0.1/countries/state/cities",body);
        setCity(list.data)
    }

    const fillState = ()=>{
        return state.map((item) => {
            return <MenuItem value={item.name}>{item.name}</MenuItem>;
        });
    }

    const fillCity = () => {
        return city.map((item) => {
            return <MenuItem value={item}>{item}</MenuItem>;
        });
    };

    useEffect(function(){
        fecthAllState();
    },[])

    const handleChangeState=(event)=>{
        setState1(event.target.value)
        fecthAllCity(event.target.value);
    }

    const registerDealer=async()=>{
      
      const body={
        "name":name,
        "emailid":email,
        "contact":contactNumber,
        "materialtype":matrialType,
        "weight":weight,
        "quantity":quantity,
        "city":getCity,
        "state":getState,
        "password":password
      }
      const result = await postData('auth/add/delear', body)
      alert(JSON.stringify(body))
      if(result.status){
        localStorage.setItem('TOKEN',result.token)
        alert(result.token)
        setState('')
        setCity('')
        setName('')
        setEmail('')
        setPassword('')
        setContactNumber('')
        setWeight('')
        setMaterialType('')
        setQuantity('')
      }else{
        alert('error')
      }
    }

  return (
      <div className='body1'>
    <Container className='mainContainer1' component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>

        {/* <h1 className='heading'>PRO DEV TRANSPORT SERVICES</h1> */}
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <div className={classes.form} >
        <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                margin='normal'
                required
                fullWidth
                id="firstName"
                label="Name"
                value={name}
                onChange={(event)=>setName(event.target.value)}
                autoFocus
              />
          <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="contactNumber"
            label="Contact Number"
            name="contactNumber"
            autoComplete="phone"
            value={contactNumber}
            onChange={(event)=>setContactNumber(event.target.value)}
            // autoFocus
          />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                margin='normal'
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(event)=>setEmail(event.target.value)}
              />
            </Grid>
          </Grid>
          
          
          
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="matrialtype"
            label="Material Type"
            name="materialType"
            autoComplete="name"
            value={matrialType}
            onChange={(event)=>setMaterialType(event.target.value)}
            // autoFocus
          />
          <Grid container spacing={2} >
            <Grid item xs={12} sm={6}>
              <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="weight"
              label="Weight"
              name="weight"
              autoComplete="name"
              value={weight}
              onChange={(event)=>setWeight(event.target.value)}
              // autoFocus
            />
            </Grid>
            <Grid item xs={12} sm={6}> 
              <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="quantity"
              label="Quantity"
              name="quantity"
              autoComplete="name"
              value={quantity}
              onChange={(event)=>setQuantity(event.target.value)}
              // autoFocus
            />
            </Grid>
          </Grid>
          
          
          <Grid container spacing={2} >
            <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel id="stateId">Select State</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                //value={age}
                value={getState}
                onChange={(event) => handleChangeState(event)}
                label="Select State"
              >
                {fillState()}
              </Select>
            </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel id="stateId">Select City</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                //value={age}
                value={getCity}
                onChange={(event) => setCity1(event.target.value)}
                label="Select City"
              >
                {fillCity()}
              </Select>
            </FormControl>
            </Grid>
          </Grid>
          
            
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
                onChange={(event)=>setPassword(event.target.value)}
            />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={()=>registerDealer()}
          >
            Signup As Dealer
          </Button>
          <Grid container>
            <Grid item xs>
              <Link style={{cursor:'pointer'}} variant="body2" onClick={props.handleClick}>
                    Signup as Driver
              </Link>
            </Grid>
            <Grid item>
              <Link style={{cursor:'pointer'}} variant="body2" onClick={()=>history.replace({pathname:'/flipper', state:false})}>
                {"Do you have an account? Sign in"}
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