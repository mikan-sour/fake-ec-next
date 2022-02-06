import React, { useEffect } from 'react';
import {GoClippy} from 'react-icons/go'
import { useCopyToClipboard } from '../../hooks';

const CopyButton:React.FC<{url:string}>  = ({url}) => {

    const [copyUrlStatus, copyUrl] = useCopyToClipboard(url)

    // if (copyUrlStatus === 'copied') {
    //     return <button onClick={copyUrl as React.MouseEventHandler<HTMLButtonElement>}><GoClippy/> copy</button>;
    // } else if (copyUrlStatus === 'failed to copy') {
    //     return <button onClick={()=>alert(copyUrlStatus)}><GoClippy/> copy</button>;
    // }

    useEffect(()=>{
        console.log(copyUrlStatus)
    }, [url])
    
    return <button><GoClippy/></button>
}

export default CopyButton

