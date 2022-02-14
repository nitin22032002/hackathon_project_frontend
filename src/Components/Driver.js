import React,{useState,useEffect} from 'react'
import MaterialTable from 'material-table';
import { fetchStateorCity, getData} from '../FetchData/fetachAllServices';
import {
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    Grid
  } from "@material-ui/core";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
export default function Driver() {
    const history=useHistory() 
    const [getDrivers,setDrivers]=useState([])
    const [state, setState] = useState([]);
    const [city, setCity] = useState([]);
    const [getState, setState1] = useState("");
    const [getCity, setCity1] = useState("");
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
    useEffect(function(){
            getDriverDetails()
    },[getCity])
    const handleChangeState=(event)=>{
        setState1(event.target.value)
        fecthAllCity(event.target.value);
    }
    const getDriverDetails=async()=>{
        if(getCity==="" || getState===""){
            let result=await getData("delear/alldriver")
            if(result.status){
                setDrivers(result.data)
            }
            else{
                alert("Some Error Occour Please Login Again")
                history.push({pathname:"/flipper"})
            }
        }
        else{
            let result=await getData(`delear/driver/route?statefrom=${getState}&cityfrom=${getCity}`)
            if(result.status){
                setDrivers(result.data)
            }
            else{
                setCity1("")
                setState1("")

            }
        }
    }
    const handleClick=(row)=>{

    }
    return(
        <>
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
          
          <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Contact Number</th>
      <th scope="col">Truck Number</th>
      <th scope="col">Capacity</th>
      <th scope="col">Experience</th>
    </tr>
  </thead>
  <tbody>
    {
        getDrivers.map((item)=>{
            return(
                <tr>
            <th scope="row"><button onClick={()=>{handleClick(item)}}>Book</button></th>
            <td>{item.name}</td>
            <td>{item.contactnumber}</td>
            <td>{item.vechilenumber}</td>
            <td>{item.capacity}</td>
            <td>{item.experience}</td>
            </tr>
            )
        })
    }
  </tbody>
</table>
        </>
        )
}
