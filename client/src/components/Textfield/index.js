import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


//onChange is a react term, everytime something changes, use this term. onClick is for buttons or clickable items (duh)
export default function BookSearchField(props) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
    
      <TextField 
      id="outlined-basic" 
      label="Outlined" 
      variant="outlined" 
      onChange={props.handleInputChange} value={props.searchTerm}/>

      <Button variant="contained" color="primary" 
        onClick={props.searchBooks}>
        Primary
      </Button>
    </form>
    
  );
}
