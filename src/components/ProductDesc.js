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
    width: 825,
    backgroundColor: 'white',
    padding: '0px 100px',
    textAlign: 'center',
  },
  indicator: {
    backgroundColor: '#dcead9',
    border: 'none'
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: 'white', border: 'none', color: 'black' }}>
        <Tabs value={value} onChange={handleChange} 
              classes={{
                indicator: classes.indicator
              }}>       
              aria-label="simple tabs example" >
          <Tab label="Ingredients" {...a11yProps(0)} />
          <Tab label="Description" {...a11yProps(1)} />      
          <Tab label="Shipping" {...a11yProps(2)} />    
          <Tab label="Reviews" {...a11yProps(3)} />    
          <Tab label="About" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Contains: nuts, egg, dairy
        Contains: nuts, egg, dairy
        Contains: nuts, egg, dairy
        Contains: nuts, egg, dairy
        Contains: nuts, egg, dairy
        Contains: nuts, egg, dairy
        Contains: nuts, egg, dairy
        Contains: nuts, egg, dairy
        Contains: nuts, egg, dairy
        Contains: nuts, egg, dairy
        Contains: nuts, egg, dairy
        Contains: nuts, egg, dairy
        Contains: nuts, egg, dairy
        Contains: nuts, egg, dairy
        Contains: nuts, egg, dairy
        Contains: nuts, egg, dairy
        Contains: nuts, egg, dairy
        Contains: nuts, egg, dairy
      </TabPanel>
      <TabPanel value={value} index={1}>
        Made with love!
      </TabPanel>
      <TabPanel value={value} index={2}>
        Shipping is a $7 flat rate fee.
      </TabPanel>
      <TabPanel value={value} index={3}>
        Shipping is a $7 flat rate fee.
      </TabPanel>
      <TabPanel value={value} index={4}>
        Shipping is a $7 flat rate fee.
      </TabPanel>
    </div>
  );
}