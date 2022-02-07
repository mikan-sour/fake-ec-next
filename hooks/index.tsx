import  React, { useContext, useDebugValue, useState, useEffect, useCallback } from 'react';
import FullPageLoader from '../components/fullPageLoader';
import { SearchContext } from '../providers/search';
export const useSearchContext = () => {
    const {state} = useContext(SearchContext);
    useDebugValue( state )
    return useContext(SearchContext)
}

export const useLoading = (isLoading:boolean) => (Component:React.FC, props?:any) => {
    // isLoading is the value that will toggle based on whether or not the data is loading
    useDebugValue({isLoading,Component,props})

    return isLoading ? <FullPageLoader/> : <Component {...props}/> ;
}




