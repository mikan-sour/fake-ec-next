import React from 'react';

const Styles:React.CSSProperties = {
    width:'100vw',
    position: 'fixed',
    bottom:0,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    height:'4rem',
    textAlign:'center',
    color:'#999',
    borderTop:'1px solid #999',
    padding: '1rem',
    backgroundColor:'#FFF',
}

export default function Footer() {
  return <section style={Styles}>
      <p style={{transform:'TranslateY(-5px)'}}>For demo purposes</p>
  </section>;
}
