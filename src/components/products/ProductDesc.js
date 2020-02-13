import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from "react-redux";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    // flexGrow: 1,
    width: '1200px',
    backgroundColor: 'white',
    // padding: '0px 70px',
    textAlign: 'center',
    boxShadow: 'none',
    fontFamily: 'Montserrat',
  },
  indicator: {
    backgroundColor: '#dcead9',
    height: '5px',
    // border: 'none'
  },
}));

export default function SimpleTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const reviews =  useSelector(state => state.reviews);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    
    <div className={classes.root}>
      <center>
      <AppBar position="static" style={{backgroundColor: 'white', border: 'none', color: 'black'}}>
        <Tabs value={value} onChange={handleChange} 
        centered
              classes={{
                indicator: classes.indicator,
                root: 'none',
              }}>       
              aria-label="simple tabs example" >
          <Tab label="Description" {...a11yProps(0)} style={{fontFamily: 'Montserrat', textTransform: 'capitalize' }} />      
          <Tab label="Ingredients" {...a11yProps(1)} style={{fontFamily: 'Montserrat', textTransform: 'capitalize' }} />
          <Tab label="Shipping" {...a11yProps(2)} style={{fontFamily: 'Montserrat', textTransform: 'capitalize' }} />    
          <Tab label="Reviews" {...a11yProps(3)} style={{fontFamily: 'Montserrat', textTransform: 'capitalize' }} />    
          <Tab label="Extra Information" {...a11yProps(4)} style={{fontFamily: 'Montserrat', textTransform: 'capitalize' }} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} style={{fontFamily: 'Montserrat'}}>
        {(Object.keys(props).length !== 0 ? 
                    <p>{props.desc}</p> : null)}
      </TabPanel>
      <TabPanel value={value} index={1} style={{fontFamily: 'Montserrat'}}>
      {(Object.keys(props).length !== 0 ? 
                    <p>{props.ingred}</p> : null)}
                
      </TabPanel>
      <TabPanel value={value} index={2} style={{fontFamily: 'Montserrat'}}>
        Shipping is a $7 flat rate fee.
        
      </TabPanel>
      <TabPanel value={value} index={3} style={{fontFamily: 'Montserrat'}}>
        {/* {console.log(reviews)} */}
        {(Object.keys(reviews).length !== 0 ?
        reviews.data.map(fav => <p><b>{fav.attributes.user.name}</b>: {fav.attributes.review}</p>) : null)}
        
        {/* {reviews.data.map(fav => <p><b>{fav.attributes.user.name}</b>: {fav.attributes.review}</p>)} */}
      </TabPanel>
      <TabPanel value={value} index={4} style={{fontFamily: 'Montserrat'}}>
      <h3>NO RETURNS. ALL SALES ARE FINAL.</h3>
      </TabPanel>
      </center>
    </div>
  );
}