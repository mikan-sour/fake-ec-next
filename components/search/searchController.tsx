import React, { ChangeEvent } from 'react';
import { useSearchContext } from '../../hooks';
import SearchView, { ISearchViewProps } from './searchView';


const SearchController: React.FC<{view:React.ReactNode}> = ({view,children}) =>{

    const {state, dispatch } = useSearchContext();

    const handleUpdate = (event:ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        dispatch(
            {
                type:"INPUT_SEARCH", 
                payload:{
                    searchValue:event.target.value
                }
            }
        )
    }
   
    return <SearchView handleUpdate={handleUpdate} value={state.value}/>;
}

export default SearchController
