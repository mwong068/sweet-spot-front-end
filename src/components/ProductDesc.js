import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
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
    flexGrow: 1,
    width: '100%',
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
          <Tab label="About" {...a11yProps(4)} style={{fontFamily: 'Montserrat', textTransform: 'capitalize' }} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} style={{fontFamily: 'Montserrat'}}>
        {(Object.keys(props).length !== 0 ? 
                    <p>{props.desc}</p> : null)}
    
        <b>NO RETURNS. ALL SALES ARE FINAL.</b>
      </TabPanel>
      <TabPanel value={value} index={1} style={{fontFamily: 'Montserrat'}}>
      {(Object.keys(props).length !== 0 ? 
                    <p>{props.desc}</p> : null)}
      </TabPanel>
      <TabPanel value={value} index={2} style={{fontFamily: 'Montserrat'}}>
        Shipping is a $7 flat rate fee.
      </TabPanel>
      <TabPanel value={value} index={3} style={{fontFamily: 'Montserrat'}}>
        Coming Soon!
      </TabPanel>
      <TabPanel value={value} index={4} style={{fontFamily: 'Montserrat'}}>
        Grace's Delights was founded in 2016 by Grace and Rebecca, two sisters who enjoy making pastries and sweet dessert snacks. The sisters would often gift their fresh homemade goodies to friends and family where it become instant crowd favorites. The sisters knew they had to get into the action and spread the same joy to others they did with their loved ones.
        <br></br><br></br>
        Today, Grace's Delights has over 27 pastry items sold online and is looking for new recipes to try out. Whether you've recently become a fan or have been there since the beginning, Grace's Delights is delighted to have a growing family that supports the sister duo.
      </TabPanel>
      </center>
    </div>
  );
}