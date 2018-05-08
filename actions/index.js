import fetch from 'isomorphic-fetch';

// actions/index.js
// Namespace actions
export const LOAD_REQUEST = 'movieList/LOAD_REQUEST';
export const LOAD_SUCCESS = 'movieList/LOAD_SUCCESS';
export const LOAD_FAILURE = 'movieList/LOAD_FAILURE';

// action creators go here

export const loadMovies = (searchParam, dispatch) => {

  // fetch happens inside load request action creator!

  // indicate we are loading movies now

  //     // "we successfully got back a response" scenario
  //     // requirement: generate a view with the movie results upon successfully getting a response
  //     // --> do things here that will eventually update the view
  //
  //     // dispatch EMITS AN ACTION
  //     // (an action <--> view only)
  //     // --> dispatch change the view to the success view
  //
  return dispatch => {
    fetch(`https://www.omdbapi.com/?apiKey=66461b74&s=${searchParam}`)
      .then((response) => response.json())
      .then((responseJson) => {
        dispatch(someActionCreator(responseJson));
        // console.log(responseJson)
      })
      .catch(function(err) {
        function dispatch() {
          dispatch({
            type: LOAD_FAILURE,
            payload: err
          });
        }
      })
  }
};

export const requestMovies = (movies) => {
  return {
    type: LOAD_REQUEST,
    payload: movies
  }
};

export const someActionCreator = (jsonData) => {
  return {
    type: LOAD_SUCCESS,
    // anything else you want!!
    // include movies coming from the data
    data: jsonData.Search
    // TODO: handle edge cases: null response, no search results
  }
};
