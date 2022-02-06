import React, { ChangeEvent, useCallback } from 'react';
import { useSearchContext } from '../../hooks';
import SearchView, { ISearchViewProps } from './searchView';


const SearchController: React.FC<{children:React.ReactNode}> = ({children}) =>{

    const {state, dispatch } = useSearchContext();

    const handleUpdate = useCallback((event:ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        dispatch(
            {
                type:"INPUT_SEARCH", 
                payload:{
                    searchValue:event.target.value
                }
            }
        )
    },[])

    if(!children) return <></>;
    
    return (
        <>
            {React.cloneElement(children as React.ReactElement,{handleUpdate, value:state.value})}
        </>
    )

    // return <SearchView handleUpdate={handleUpdate} value={state.value}/>;
}

export default React.memo(SearchController);
