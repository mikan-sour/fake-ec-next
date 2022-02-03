import React, { ChangeEvent, ChangeEventHandler, FC, useRef, useState } from 'react';
import styles from './search.module.css';

import { GoSearch } from "react-icons/go";

export interface ISearchViewProps {
    handleUpdate:(e:ChangeEvent<HTMLInputElement>)=>void,
    value:string
}

const SearchView:FC<ISearchViewProps> = ({handleUpdate,value}) => {

  const inputRef = useRef<HTMLInputElement | null>(null);
  const [ isEmpty, set ] = useState(false);

  const handleBlur = () =>{
    const {current} = inputRef
    if(!current) return;
    !current.value && set(true);
    setTimeout(()=> set(false),2000);
  }

  const handleUpdateWithViewChanges = (event:ChangeEvent<HTMLInputElement>) => {
    const {current} = inputRef
    if(!current) return;
    if(current.value) set(false);
    return handleUpdate(event);
  }

  return (
    <article className={styles.search}>
        <input 
            ref={inputRef}
            onBlur={handleBlur}
            className={`${styles.input} ${isEmpty && styles.empty}`}
            onChange={handleUpdateWithViewChanges}
            type='text' 
            value={value}/>
        <button 
            className={styles.button}>
                <GoSearch size={'20px'} color='purple'/>
        </button>
    </article>
  );
}

export default React.memo(SearchView)
