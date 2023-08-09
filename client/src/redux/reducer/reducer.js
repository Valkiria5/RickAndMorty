import { ADD_FAV, REMOVE_FAV, GET_CHARACTER, GET_SEARCH, GET_DETAIL, RES_STATE, GET_LOCATION, NEXT_PAGE, PREV_PAGE} from "../actions/actions"

const initialState = {
    myFavorites : [],
    allcharacters: [],
    characters: [],
    character: [],
    detail: [],
    locations: [],
    characters: [],
   pages: 1
}


const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            }
        
        case REMOVE_FAV: 
            return {
                ...state,
                myFavorites: state.myFavorites.filter(character => character.id !== action.payload)
            }
        case GET_CHARACTER: 
        return{
            ...state,
            characters: action.payload
        }
        case GET_SEARCH:
            return{
                ...state,
              characters: action.payload
            }

        case GET_DETAIL:
        return{
         ...state,
        detail: action.payload
                }
           case RES_STATE:
            return{
             ...state, 
             detail:[]
                        }
        case GET_LOCATION: 
        return{
            ...state,
            locations: action.payload
        }
        case NEXT_PAGE:
            return {
              ...state,
              characters: action.payload,
              pages: state.pages + 1
            };
            case PREV_PAGE:
                return {
                  ...state,
                  characters: action.payload,
                  pages: state.pages - 1
                };
        default: 
            return { ...state };
    }
}
export default reducer;