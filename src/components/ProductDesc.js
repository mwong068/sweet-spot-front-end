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
    width: 500,
    backgroundColor: theme.palette.background.paper,
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
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Ingredients" {...a11yProps(0)} />
          <Tab label="Description" {...a11yProps(1)} />
          <Tab label="Shipping" {...a11yProps(2)} />
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
    </div>
  );
}