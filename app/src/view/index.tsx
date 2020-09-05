import React from 'react';
import { connect } from 'react-redux';
import {Field, reduxForm, formValueSelector} from 'redux-form';
import { CenterBox } from './styled';
import Form from './form';

interface IProps {
  handleSubmit: Function;
}

const App: React.SFC<IProps> = ({ handleSubmit }) => {
  return(
    <CenterBox>
      <Form onSubmit={handleSubmit}/>
    </CenterBox>
  );
}

const onSubmit = (payload) => {
  return async (dispatch, getState) => {
    console.log(payload, 'payload');
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (request) => dispatch(onSubmit(request))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

