import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      width: 300,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

export const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    InputLabelProps={{
      shrink: true,
    }}
    {...input}
    {...custom}
  />
);

export const renderCheckbox = ({ input, label }) => (
  <div>
    <FormControlLabel
      control={
        <Checkbox
          checked={input.value ? true : false}
          onChange={input.onChange}
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
      }
      label={label}
    />
  </div>
);

const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>
  }
};

export const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => {
  const classes = useStyles();
  console.log(classes.formControl, '---------classes.formControl');

  return(
  <FormControl className={classes.formControl} error={touched && error}>
    <InputLabel shrink id="demo-simple-select-placeholder-label-label">
      Favorite Color
    </InputLabel>
    <Select
      inputProps={{
        name: 'age',
        id: 'filled-age-native-simple',
      }}
      {...input}
      {...custom}
    >
      {children}
    </Select>
    {renderFromHelper({ touched, error })}
  </FormControl>
)}
