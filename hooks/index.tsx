import  React, { useContext, useDebugValue, useState, useEffect, useCallback } from 'react';
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

export const useCopyToClipboard = (text:string, notifyTimeout = 2500) => {
    const [copyStatus, setCopyStatus] = useState('inactive')
    const copy:React.MouseEventHandler<HTMLButtonElement> = useCallback(() => {
      navigator.clipboard.writeText(text).then(
        () => setCopyStatus('copied'),
        () => setCopyStatus('failed to copy'),
      )
    }, [text])
  
    useEffect(() => {
      if (copyStatus === 'inactive') {
        return
      }
  
      const timeoutId = setTimeout(() => setCopyStatus('inactive'), notifyTimeout)
  
      return () => clearTimeout(timeoutId)
    }, [copyStatus])
  
    return [copyStatus, copy]
  }


