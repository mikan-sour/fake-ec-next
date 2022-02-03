import { ISearch, ISearchAction } from ".";

export const searchReducer = (state:ISearch, action:ISearchAction):ISearch => {
    switch(action.type){

        case 'INPUT_SEARCH':
            return {...state, value:action.payload.searchValue}
            
        default: return state;
    }
} 

