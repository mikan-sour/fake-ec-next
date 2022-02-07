import React from 'react';
import {GoClippy} from 'react-icons/go'

const CopyButton:React.FC<{url:string}>  = ({url}) => {
    
    return <button><GoClippy/></button>
}

export default CopyButton

