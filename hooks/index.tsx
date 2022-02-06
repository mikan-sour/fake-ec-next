import  React, { useContext, useDebugValue } from 'react';
import FullPageLoader from '../components/fullPageLoader';
import { SearchContext } from '../providers/search';
export const useSearchContext = () => {
    const {state} = useContext(SearchContext);
    useDebugValue( state )
    return useContext(SearchContext)
}

export const useLoading = (val:boolean) => (Component:React.FC, props?:any) => {
    // val is the value that will toggle based on whether or not the data is loading

    useDebugValue(val)
    useDebugValue(Component)
    if(val) {
        return React.cloneElement(<FullPageLoader/>);
    } else {
        return React.cloneElement(<Component/>, {...props});
    }
}