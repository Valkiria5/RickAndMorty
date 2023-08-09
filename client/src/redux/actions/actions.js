import axios from 'axios'

export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const GET_CHARACTER = "GET_CHARACTER"; 
export const GET_SEARCH = "GET_SEARCH";
export const DELETE_CARD = "DELETE_CARD";
export const GET_DETAIL = "GET_DETAIL"; 
export const RES_STATE = "RES_STATE";
export const GET_LOCATION = "GET_LOCATION";
export const NEXT_PAGE = "NEXT_PAGE";
export const PREV_PAGE = "PREV_PAGE"; 

export const addFav = (character) => {
    return {type: ADD_FAV, payload: character}
}
export const removeFav = (id) => {
    return {type: REMOVE_FAV, payload: id}
}

export const getCharacter = () => {
    return async function(dispatch){
        let response = await axios ("https://rickandmortyapi.com/api/character/")
        return dispatch({
         type: GET_CHARACTER, 
         payload: response.data
     })
   }
}
export const getCharacterByName= (name) => async dispatch =>{
    try{
    await axios.get('https://rickandmortyapi.com/api/character/?name=' + name)
    .then((response) => {
        dispatch({
            type: GET_SEARCH,
            payload: response.data
        })
    })
  } catch (error) { 
    return alert("Personaje no encontrado")
  }
  }

  export function getDetail(id){
    return async function(dispatch){
        const json = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        return dispatch({
            type: GET_DETAIL,
            payload: json.data,
        })
    }
  } 
  export function resState(){
    return {
        type: RES_STATE,
    }
  }
  export const getLocation = () => {
    return async function(dispatch){
        let response = await axios ("https://rickandmortyapi.com/api/location")
        return dispatch({
         type: GET_LOCATION, 
         payload: response.data
     })
   }
}

export const nextPage = () => {
  return async function (dispatch){
    let next = await axios('https://rickandmortyapi.com/api/character?page=2')
    return dispatch ({
      type: NEXT_PAGE, 
      payload: next.data
    })
  }
}

export const prevPage = () => {
  return async function (dispatch){
    let prev = await axios ("https://rickandmortyapi.com/api/character?page=2") 
    return dispatch ({
      type: PREV_PAGE,
      payload: prev.data
    })
  }
}

// characterReducer.js
