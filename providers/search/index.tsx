import React from 'react';
import { searchReducer } from './search_reducer';

export interface ISearch {
    value:string,
}

export interface ISearchAction {
    type:string,
    payload:{
        isLoading?:boolean,
        searchValue:string
    }
}

const initialState:ISearch = {
    value:'',
}

export const SearchContext = React.createContext<{state:ISearch,dispatch:React.Dispatch<ISearchAction>}>
({
    state:initialState,
    dispatch:searchReducer as unknown as React.Dispatch<ISearchAction>
})

const SearchProvider:React.FC<{}> = ({children}) => {
    const [state, dispatch ] = React.useReducer( searchReducer, initialState);
    const contextValue = React.useMemo(()=> {
        return {state, dispatch}
    },[state,dispatch]);

    return (
        <SearchContext.Provider value={contextValue}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchProvider;