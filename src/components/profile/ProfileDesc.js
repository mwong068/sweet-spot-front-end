import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useSelector, useDispatch } from 'react-redux';
import EditProfile from './EditProfile';
import RenderUserInfo from './RenderUserInfo';




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
    width: '70%',
    backgroundColor: 'white',
    // padding: '0px 250px',
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

  const user = useSelector(state => state.currentUser);
  const favorites = useSelector(state => state.favorites);
  const orders = useSelector(state => state.previousOrders);
  const dispatch = useDispatch();
   
  const [value, setValue] = React.useState(0)

    

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: 'white', border: 'none', color: 'black'}}>
        <Tabs value={value} onChange={handleChange} 
        centered
              classes={{
                indicator: classes.indicator,
                root: 'none',
              }}>       
          <Tab label="Account" {...a11yProps(0)} style={{fontFamily: 'Montserrat', textTransform: 'capitalize' }} />      
          <Tab label="Past Orders" {...a11yProps(1)} style={{fontFamily: 'Montserrat', textTransform: 'capitalize' }} />
          <Tab label="Favorites" {...a11yProps(2)} style={{fontFamily: 'Montserrat', textTransform: 'capitalize' }} />    
          <Tab label="Settings" {...a11yProps(3)} style={{fontFamily: 'Montserrat', textTransform: 'capitalize' }} />       
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} style={{fontFamily: 'Montserrat', textAlign: 'left'}}>
        {/* could have two components rendering conditionally here based on val change sent down from parent */}
        
        
        {props.val === 4 ? <EditProfile info={props.info} history={props.history} /> : <RenderUserInfo info={props.info}/>}
      </TabPanel>
      <TabPanel value={value} index={1} style={{fontFamily: 'Montserrat', textAlign: 'left'}}>
        {/* {console.log(orders)} */}
        {Object.keys(orders).length !== 0 ? orders.map(item => <p><b>{item.type} {item.id}:</b> Total ${(item.attributes.total).toFixed(2)}</p>) : null}
      </TabPanel>
      <TabPanel value={value} index={2} style={{fontFamily: 'Montserrat', textAlign: 'left'}}>
        {/* {console.log(favorites)} */}
        {Object.keys(favorites).length !== 0 ? favorites.data.map(item =><p>{item.attributes.product.name}</p>) : null}
      </TabPanel>
      <TabPanel value={value} index={3} style={{fontFamily: 'Montserrat', textAlign: 'left'}}>
        <p><b>Email Preferences</b>: Not Subscribed</p>
      </TabPanel>
    </div>
  );
}