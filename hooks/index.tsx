import  { useContext, useDebugValue } from 'react';
import { SearchContext } from '../providers/search';
export const useSearchContext = () => {
    const {state} = useContext(SearchContext);
    useDebugValue( state )
    return useContext(SearchContext)
}