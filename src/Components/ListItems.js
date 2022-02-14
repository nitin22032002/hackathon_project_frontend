import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';

export default function MainListItems(props) {
  let items=props.items;
    return(
        <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    {items.map((item)=>{
      return(
        <>
        <ListItem button>
      <ListItemIcon>
        {item[1]}
      </ListItemIcon>
      <ListItemText primary={item[0]} onClick={item[2]} />
    </ListItem>
        </>
      )
    })}
  </div>
    )
};
 

