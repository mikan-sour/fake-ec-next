import React from 'react';

export default function Loader() {
  return (
    <main style={styles}>
        <h1 style={text}>Loading...</h1>
    </main>
  );
}

const styles:React.CSSProperties = {
    width: '100vw',
    height: '100vh',
    backgroundColor:'purple',
    display: 'flex',
    alignItems:'center',
    justifyContent:'center'
}

const text: React.CSSProperties = {
    color: '#FFF'
}
