import React, { useEffect, useMemo, useState } from 'react';
import { useLoading } from '../hooks';
import styles from '../styles/hemmingway.module.css';

export default function Hemmingway() {

    const [text, setText] = useState<string>();
    const [loading, setLoading] = useState<boolean>(true);
    const [showAll, setShowAll] = useState<boolean>(false);

    useEffect(() => {
        console.log('is setting')
        let isActive = true;
        if(!loading) setLoading(true);
        fetch("./OldManAndTheSea.txt")
            .then(res => res.text())
            .then(text => {
                if(isActive){
                    setText(text);
                    setLoading(false);
                }
            })
        .catch(e => console.error(e))
        .finally(()=> setLoading(false));
    
      return () => {
          isActive = false;
      };
    }, []);

    const truncateText = useMemo(():string => {
        if(!text) return "";
        return text.slice(0, 1800).concat('...');
    }, [text]);


    const HemComp:React.FC<{textColor?:string}> = ({textColor}) => {
        const color = textColor ? {color:textColor} : {color:'black'}
        return (
        <main className={styles.mainContent}>
            <button onClick={()=> setShowAll(!showAll)}>show all</button>
            <pre className={styles.preContent} style={color}>
                {showAll ? text : truncateText}
            </pre>
        </main>
    )}

    const HemmingwayContent = useLoading(loading)(HemComp,{textColor:'purple'});
    
    return HemmingwayContent;
}


