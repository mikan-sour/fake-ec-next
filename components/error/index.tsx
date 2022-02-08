import React from 'react';

interface IErrorComp {
    error:Error,
    resetErrorBoundary:()=>void
}
const ErrorComp:React.FC<IErrorComp> = ({error,resetErrorBoundary}) =>{

    return (
        <>
        <p style={{color:'red',fontWeight:'bold', fontSize:'32px'}}> an error occurred 😔</p>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>try again</button>
        </>
    );
}

export const myErrorHandler = (error: Error, info: {componentStack: string}) => {
    console.error(error);
    console.error(info);
}

export default ErrorComp
