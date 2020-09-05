import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { required, alphaNumeric, requiredArray } from './validations';
import { renderTextField, renderCheckbox, renderSelectField } from './Field';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

interface IProps {
  handleSubmit(): void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 300,
      },
      '& .MuiButton-root': {
        margin: theme.spacing(1),
        width: 300,
      },
      '& .MuiSelect-select': {
        width: 300,
      },
    }
  }),
);

const Form: React.SFC<IProps> = ({handleSubmit}) => {
  const classes = useStyles();

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <div>
        <Field
          name="firstName"
          component={renderTextField}
          label="First Name"
          validate={[required, alphaNumeric]}
        />
      </div>
      <div>
        <Field
          name="lastName"
          component={renderTextField}
          label="Last Name"
          validate={[required, alphaNumeric]}
        />
      </div>
      <div>
        <Field
          name="email"
          component={renderTextField}
          label="Email"
        />
      </div>
      <div>
        <Field
          classes={classes}
          name="favoriteColor"
          component={renderSelectField}
          label="Favorite Color"
          validate={[requiredArray]}
        >
          <MenuItem value={'ff0000'}>Red</MenuItem>
          <MenuItem value={'00ff00'}>Green</MenuItem>
          <MenuItem value={'0000ff'}>Blue</MenuItem>
        </Field>
      </div>
      <div>
        <Field
          name="acept"
          component={renderCheckbox}
          label="Aceptar"
        />
      </div>
      <div>
        <Button variant="contained" color="primary" type="submit">
          Enviar
        </Button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'sellerRegister'
})(Form);