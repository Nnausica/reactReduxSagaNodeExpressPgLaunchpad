import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import logger from 'redux-logger';

//reducers
const reducerName = ( state =[], action ) =>{
  console.log( 'inventory reducer:', action );
  if( action.type === 'SET_THINGS' ){
    return action.payload;
  }
  return state;
}

// sagas
function *watcherSaga(){
  // takeEvery also lisens for dispatch
  yield takeEvery( 'GET_THINGS', getSaga );
  yield takeEvery( 'ADD_THINGS', postsaga);
}
// generator functions for async
function *getSaga( action ){
  console.log( 'in *getSaga:', action );
  try{
    // yield to avoid 
    const response = yield axios.get('https://swapi.dev/api/starships');
    console.log( 'back from get:', response.data );
    // use a "put" to dispatch for sagas
    yield put( { type: 'GET_THINGS', payload: response.data } );
  } catch( err ){
    alert( 'no' );
    console.log( err );
  }
}

function *postsaga( action ){
  console.log( 'in *postsaga:', action );
  try{
    // yield to avoid 
    const response = yield axios.post('/test', {test: action.payload});
    // use a "put" to dispatch for sagas
    yield put( { type: 'ADD_THINGS', payload: response.data } );
  } catch( err ){
    console.log( err );
    alert( 'error adding item' );
  }
}

//reducers & store
const sagaMiddleware = createSagaMiddleware();

const count =(state=0, action)=>{
  console.log('speed Action:', action);

  if( action.type === 'INCREASE_COUNT' ){
    return state+1;
  }

  else if( action.type === 'DECREASE_COUNT'){
    return state-1;
  }
  return state;
}

const passenger = (state= [], action)=>{
  console.log("passenger action:", action)

  //pushes responses into an array that is saved in the store
  if(action.type === 'ADD_PASSENGER'){
      console.log('action.payload:', action.payload);
      return[...state, action.payload];
      }
  //takes empty array once responses are pushed to DB and emptys the store
  else if (action.type === 'EMPTY'){
      return[];
  }
  return state
}

// create store w/ reducers and middlewares
const store = createStore(
  combineReducers({

    count, 
    passenger

  }),
  applyMiddleware( logger, sagaMiddleware )
)

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
// make sure our saga is running
sagaMiddleware.run( watcherSaga );

reportWebVitals();
