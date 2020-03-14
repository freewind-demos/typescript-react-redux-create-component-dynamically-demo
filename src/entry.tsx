import Hello, {HelloDispatchProps} from './components/hello';
import React, {Dispatch} from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import store from './store';
import {State} from './store/State';
import {DeleteFruitAction} from './store/actions/actionTypes';
import {deleteFruitAction} from './store/actions';

ReactDOM.render(
  <Provider store={store}>
    {React.createElement(connect((state: State) => ({
      fruits: state.fruits,
      title: 'Hello, I like:'
    }), (dispatch: Dispatch<DeleteFruitAction>): HelloDispatchProps => ({
      deleteFruit: (name) => dispatch(deleteFruitAction(name))
    }))(Hello))}
  </Provider>,
  document.body
);

