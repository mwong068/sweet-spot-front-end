import React from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import deleteItem from '../../actions/deleteItem';
import increaseQuantity from '../../actions/increaseQuantity';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
 
const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      height: 15
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));


export default function CartItem(props) {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [rating, setRating] = React.useState('');

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
        }, []);

    const handleChange = event => {
        setRating(event.target.value);
      };

    return(
        <div id="cart-item">
            <div>
                {console.log(props)}
                <br></br>
                <img src={ props.attributes.product.image } style={{width: '90%', height: '90%', objectFit: 'cover'}}></img>
            </div>
            <div>
                <h3>${props.attributes.product.price}</h3>
                <h4><Link to={'products/' + (props.attributes.product.id)}>
                    {props.attributes.product.name}
                    </Link></h4>
                <p>{props.attributes.product.description}</p>
                <h4>Quantity:</h4>
                <FormControl className={classes.formControl}>
                    <InputLabel variant="outlined" ref={inputLabel} id="demo-simple-select-outlined-label">
                    Rating
                    </InputLabel>
                    <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={rating}
                    onChange={handleChange}
                    labelWidth={labelWidth}
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>hey</MenuItem>
                    <MenuItem value={2}>hi</MenuItem>
                    <MenuItem value={3}>hey</MenuItem>
                    <MenuItem value={4}>woah</MenuItem>
                    <MenuItem value={5}>cool</MenuItem>
                    </Select>
                </FormControl>
            
                <Button 
                onClick={(event) => dispatch(deleteItem(event, props.id, props.attributes.order.id))}
                style={{
                borderRadius: 5,
                backgroundColor: 'white',
                // padding: "9px 27px",
                fontSize: "14px",
                color: 'black',
                border: '3px solid #f3e4b7',
                fontFamily: 'Montserrat',
                }}>Delete</Button>
            </div>
        </div>
    )
}