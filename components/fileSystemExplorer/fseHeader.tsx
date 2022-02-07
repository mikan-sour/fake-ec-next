import React, { useMemo, useRef } from 'react';
import IFileSystem, { IFileHeader } from './fse.types';
import styles from "./fse.module.css";

const FileSystemExplorerHeader:React.FC<IFileSystem> = (props) => {

    const recursiveCalculation = (data:IFileSystem, summary:React.MutableRefObject<IFileHeader>):IFileHeader => {
      const { current } = summary;
      if(!data.childrenFiles){
        current.files += 1;
      } else {
        current.dirs += 1;
        data.childrenFiles.forEach(fs => recursiveCalculation(fs,summary) ) 
      }

      return current
    }

    const summary = useRef<IFileHeader>({dirs:0,files:0})
    const data = useMemo(()=> recursiveCalculation(props,summary),[JSON.stringify(props.childrenFiles)])

    return (
        <section className={styles.statistics}>
          <p>Number of dirs: {data.dirs}</p>
          <span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>
          <p>Number of files: {data.files}</p>
        </section>
      )
}

export default FileSystemExplorerHeader;
