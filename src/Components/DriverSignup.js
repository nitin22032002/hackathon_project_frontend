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

export default function DriverSignup(props) {
    const [state, setState] = useState([]);
    const [cityList1 ,setCityList1] = useState([]);
    const [cityList2 ,setCityList2] = useState([]);
    const [cityList3 ,setCityList3] = useState([]);
    const [cityList4 ,setCityList4] = useState([]);
    const [cityList5 ,setCityList5] = useState([]);
    const [cityList6 ,setCityList6] = useState([]);
    const [fromState1, setFromState1] = useState('');
    const [fromState2, setFromState2] = useState('');
    const [fromState3, setFromState3] = useState('');
    const [toState1, setToState1] = useState('');
    const [toState2, setToState2] = useState('');
    const [toState3, setToState3] = useState('');
    const [fromCity1, setFromCity1] = useState('');
    const [fromCity2, setFromCity2] = useState('');
    const [fromCity3, setFromCity3] = useState('');
    const [toCity1, setToCity1] = useState('');
    const [toCity2, setToCity2] = useState('');
    const [toCity3, setToCity3] = useState('');

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [truckNumber, setTruckNumber] = useState('');
    const [truckCapacity, setTruckCapacity] = useState('');
    const [email, setEmail] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [transporterName, setTransportesName] = useState('');
    const [drivingExperience, setDriveingExperience] = useState('');
    const [password, setPassword] = useState('');


    const history = useHistory();

    
    const classes = useStyles();

    const registerDriver=async()=>{
      const body={
        "name":name,
        "age":age,
        "emailid":email,
        "contact":contactNumber,
        "vechilenumber":truckNumber,
        "capacity":truckCapacity,
        "transportername":transporterName,
        "experience":drivingExperience,
        "password":password,
        "routes":{
            "city":[fromCity1, fromCity2, fromCity3, toCity1, toCity2, toCity3],
            "state":[fromState1, fromState2, fromState3, toState1, toState2, toState3]
        }
      }
      const result = await postData('auth/add/driver', body)
      if(result.status){
        localStorage.setItem('TOKEN', result.token)
        alert(result.token)
        setName('')
        setAge('')
        setEmail('')
        setContactNumber('')
        setTransportesName('')
        setTruckNumber('')
        setPassword('')
        setTruckCapacity('')
        setDriveingExperience('')
        setFromCity1('')
        setFromCity2('')
        setFromCity3('')
        setFromState1('')
        setFromState2('')
        setFromState3('')
        setToCity1('')
        setToCity2('')
        setToCity3('')
        setToState1('')
        setToState2('')
        setToState3('')
        
      }else{
        alert('error')
      }
    }


    const fecthAllState=async()=>{
        var body = {"country":"India"}
        var list = await fetchStateorCity("https://countriesnow.space/api/v0.1/countries/states",body);
        setState(list.data.states)
    }

    const fecthAllCity6=async(userState)=>{
        var body = {"country":"India","state":userState}
        var list = await fetchStateorCity("https://countriesnow.space/api/v0.1/countries/state/cities",body);
        setCityList6(list.data);
    }
    const fecthAllCity1=async(userState)=>{
        var body = {"country":"India","state":userState}
        var list = await fetchStateorCity("https://countriesnow.space/api/v0.1/countries/state/cities",body);
        setCityList1(list.data);
    }
    const fecthAllCity2=async(userState)=>{
        var body = {"country":"India","state":userState}
        var list = await fetchStateorCity("https://countriesnow.space/api/v0.1/countries/state/cities",body);
        setCityList2(list.data);
    }
    const fecthAllCity3=async(userState)=>{
        var body = {"country":"India","state":userState}
        var list = await fetchStateorCity("https://countriesnow.space/api/v0.1/countries/state/cities",body);
        setCityList3(list.data);
    }
    const fecthAllCity4=async(userState)=>{
        var body = {"country":"India","state":userState}
        var list = await fetchStateorCity("https://countriesnow.space/api/v0.1/countries/state/cities",body);
        setCityList4(list.data);
    }
    const fecthAllCity5=async(userState)=>{
        var body = {"country":"India","state":userState}
        var list = await fetchStateorCity("https://countriesnow.space/api/v0.1/countries/state/cities",body);
        setCityList5(list.data);
    }

    const fillState = ()=>{
        return state.map((item) => {
            return <MenuItem value={item.name}>{item.name}</MenuItem>;
        });
    }

    const fillCity1 = () => {
        return cityList1.map((item) => {
            return <MenuItem value={item}>{item}</MenuItem>;
        });
    };
    const fillCity2 = () => {
        return cityList2.map((item) => {
            return <MenuItem value={item}>{item}</MenuItem>;
        });
    };
    const fillCity3 = () => {
        return cityList3.map((item) => {
            return <MenuItem value={item}>{item}</MenuItem>;
        });
    };
    const fillCity4 = () => {
        return cityList4.map((item) => {
            return <MenuItem value={item}>{item}</MenuItem>;
        });
    };
    const fillCity5 = () => {
        return cityList5.map((item) => {
            return <MenuItem value={item}>{item}</MenuItem>;
        });
    };
    const fillCity6 = () => {
        return cityList6.map((item) => {
            return <MenuItem value={item}>{item}</MenuItem>;
        });
    };

    useEffect(function(){
        fecthAllState();
    },[])

    const handleChangeState1=(event)=>{
        setFromState1(event.target.value)
        fecthAllCity1(event.target.value);
    }
    const handleChangeState2=(event)=>{
        setFromState2(event.target.value)
        fecthAllCity2(event.target.value);
    }
    const handleChangeState3=(event)=>{
        setFromState3(event.target.value)
        fecthAllCity3(event.target.value);
    }
    const handleChangeState4=(event)=>{
        setToState1(event.target.value)
        fecthAllCity4(event.target.value);
    }
    const handleChangeState5=(event)=>{
        setToState2(event.target.value)
        fecthAllCity5(event.target.value);
    }
    const handleChangeState6=(event)=>{
        setToState3(event.target.value)
        fecthAllCity6(event.target.value);
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
          
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name "
              name="name"
              autoComplete="name"
              autoFocus
              value={name}
              onChange={(event)=>setName(event.target.value)}
            />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="age"
              label="Age "
              name="age"
              autoComplete="number"
              value={age}
              onChange={(event)=>setAge(event.target.value)}
              // autoFocus
            />
            </Grid>
          </Grid>
          
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="truckNumber"
              label="Truck Number"
              name="truck number"
              autoComplete="number"
              value={truckNumber}
              onChange={(event)=>setTruckNumber(event.target.value)}
              // autoFocus
            />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="truckNumber"
            label="Truck Capacity"
            name="truck capacity"
            autoComplete="number"
            value={truckCapacity}
            onChange={(event)=>setTruckCapacity(event.target.value)}
            // autoFocus
          />
            </Grid>
          </Grid>
          
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(event)=>setEmail(event.target.value)}
              // autoFocus
            />
            </Grid>
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
          </Grid>
          
          
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Transporter Name "
              name="name"
              autoComplete="name"
              value={transporterName}
              onChange={(event)=>setTransportesName(event.target.value)}
              // autoFocus
            />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="number"
              label="Driving Experience"
              name="number"
              autoComplete="number"
              value={drivingExperience}
              onChange={(event)=>setDriveingExperience(event.target.value)}
              // autoFocus
            />
            </Grid>
          </Grid>
          
          <Grid container>
            <Grid item xs={12}>
              <h2>Select Interseted Route 1</h2>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel id="stateId">From State 1</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label1"
                id="demo-simple-select-outlined"
                //value={age}
                value={fromState1}
                onChange={(event) => handleChangeState1(event)}
                label="From State 1"
              >
                {fillState()}
              </Select>
            </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
<FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel id="stateId">From City 1</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label1"
                id="demo-simple-select-outlined"
                //value={age}
                value={fromCity1}
                onChange={(event) => setFromCity1(event.target.value)}
                label="From City 1"
              >
                {fillCity1()}
              </Select>
            </FormControl>
            </Grid>
          </Grid>
          
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel id="stateId">To State 1</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label2"
                id="demo-simple-select-outlined"
                //value={age}
                value={toState1}
                onChange={(event) => handleChangeState4(event)}
                label="To State 2"
              >
                {fillState()}
              </Select>
            </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel id="stateId">To City 1</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label2"
                id="demo-simple-select-outlined"
                //value={age}
                value={toCity1}
                onChange={(event) => setToCity1(event.target.value)}
                label="To City 2"
              >
                {fillCity4()}
              </Select>
            </FormControl>
          
            </Grid>
          </Grid>
            
          
          
            
          <Grid container>
            <Grid item xs={12}>
              <h2>Select Interseted Route 2</h2>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel id="stateId">From State 2</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label1"
                id="demo-simple-select-outlined"
                //value={age}
                value={fromState2}
                onChange={(event) => handleChangeState2(event)}
                label="From State 2"
              >
                {fillState()}
              </Select>
            </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
<FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel id="stateId">From City 2</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label1"
                id="demo-simple-select-outlined"
                //value={age}
                value={fromCity2}
                onChange={(event) => setFromCity2(event.target.value)}
                label="From City 1"
              >
                {fillCity2()}
              </Select>
            </FormControl>
            </Grid>
          </Grid>
          
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel id="stateId">To State 2</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label2"
                id="demo-simple-select-outlined"
                //value={age}
                value={toState2}
                onChange={(event) => handleChangeState5(event)}
                label="To State 2"
              >
                {fillState()}
              </Select>
            </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel id="stateId">To City 2</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label2"
                id="demo-simple-select-outlined"
                //value={age}
                value={toCity2}
                onChange={(event) => setToCity2(event.target.value)}
                label="To City 2"
              >
                {fillCity5()}
              </Select>
            </FormControl>
          
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12}>
              <h2>Select Interseted Route 3</h2>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel id="stateId">From State 3</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label1"
                id="demo-simple-select-outlined"
                //value={age}
                value={fromState3}
                onChange={(event) => handleChangeState3(event)}
                label="From State 3"
              >
                {fillState()}
              </Select>
            </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
<FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel id="stateId">From City 3</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label1"
                id="demo-simple-select-outlined"
                //value={age}
                value={fromCity3}
                onChange={(event) => setFromCity3(event.target.value)}
                label="From City 1"
              >
                {fillCity3()}
              </Select>
            </FormControl>
            </Grid>
          </Grid>
          
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel id="stateId">To State 3</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label2"
                id="demo-simple-select-outlined"
                //value={age}
                value={toState3}
                onChange={(event) => handleChangeState6(event)}
                label="To State 2"
              >
                {fillState()}
              </Select>
            </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel id="stateId">To City 3</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label2"
                id="demo-simple-select-outlined"
                //value={age}
                value={toCity3}
                onChange={(event) => setToCity3(event.target.value)}
                label="To City 3"
              >
                {fillCity6()}
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
            />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={()=>registerDriver()}
          >
            Signup As Driver
          </Button>
          <Grid container>
            <Grid item xs>
              <Link style={{cursor:'pointer'}} variant="body2" onClick={props.handleClick}>
                    Signup as Dealer
              </Link>
            </Grid>
            <Grid item>
              <Link style={{cursor:'pointer'}} style={{cursor:'pointer'}}  variant="body2" onClick={()=>history.replace({pathname:'/flipper', state:true})}>
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