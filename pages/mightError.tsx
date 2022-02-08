import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/Home.module.css';
import {ErrorBoundary} from 'react-error-boundary'
import ErrorComp, {myErrorHandler} from '../components/error';
export default function MightError() {
  
    const [ isTrue, set ] = useState<boolean>(false)

    useEffect(()=> {
        console.log(isTrue)
    },[isTrue])
  
    return (
    <main className={styles.main}>
            <ErrorBoundary 
                onError={myErrorHandler} 
                onReset={()=>set(true)}
                resetKeys={[isTrue]}
                FallbackComponent={ErrorComp}>
                <MaybeError val={isTrue}/>
            </ErrorBoundary>
        </main>
    );
}



const MaybeError:React.FC<{val:boolean}> = ({val}) => {

    useEffect(()=> {
        if(val !== true){
            throw new Error ("there's an error...")
        }
    })

    return(
        <>
            <p>{val && 'it works now'}</p>
        </>
    )
}


