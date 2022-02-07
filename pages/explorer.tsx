import React, { useEffect, useMemo, useState } from 'react';
import { useLoading } from '../hooks';
import styles from '../styles/filesystem.module.css';
import IFileSystem from '../components/fileSystemExplorer/fse.types';
import FileSystemExplorer from '../components/fileSystemExplorer';
import FileSystemExplorerHeader from '../components/fileSystemExplorer/fseHeader';

export default function Explorer() {

  const [ explorer, setExplorer ] = useState<IFileSystem>()
  const [ isLoading, setIsLoading ] = useState<boolean>(true);

  useEffect(()=>{
    let isActive = true;
    
    fetch("./explorer.json")
      .then(res => res.json())
      .then((json:IFileSystem) => {
        if(isActive) {
          setExplorer(json);
          setIsLoading(false);
        }
      })
      .catch(e => console.error(e))
      .finally(()=> setIsLoading(false))

      return () => {
        isActive = false
      }
  },[])


  return useLoading(isLoading)(()=><div className={styles.wrapper}> 
    <FileSystemExplorerHeader {...explorer!}/>
    <FileSystemExplorer {...explorer!}/> 
  </div>);
}
