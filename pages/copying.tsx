import React from 'react';
import CopyButton from '../components/copyButton';

export default function Copying() {

    const data = [
        {name:'macdonalds',text:'link to order from macdonalds',url:'macdonalds.com'},
        {name:'burgerking',text:'link to order from burgerking',url:'burgerking.com'},
        {name:'wendys',text:'link to order from wendys',url:'wendys.com'}
    ]

  return (
      <main>
          {data.map((food:{name:string,text:string,url:string}) => (
              <article>
                  <h1>{food.name}</h1>
                  <section>
                      {food.text}
                      <CopyButton url={food.url}/>
                  </section>
              </article>
          ))}
      </main>
  )
}
