import React from "react";
import styles from './fploader.module.css';
   
const FullPageLoader:React.FC = () => {
   return (
      <div className={styles.overlay}>
         <div className={styles.loader}/>
      </div>
   )
}

export default FullPageLoader;

