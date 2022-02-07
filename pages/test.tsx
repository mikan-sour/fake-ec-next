import React, { useState } from 'react';

export default function Test() {

    const [arr, set ] = useState<number[]>([])
    const [alert,setAlert] = useState<boolean>(false);

    const handleAdd = () => {
        const num = Math.floor(Math.random() * 10);
        set(prev => [...prev,num]);
    }

    const handleMinus = () => {
        try {
            const num = Math.floor(Math.random() * 10);
            const inArr = arr.indexOf(num) !== -1;
            if(!inArr){
                    
                setAlert(true);
                setTimeout(()=> {
                    setAlert(false)
                }, 500)
                return;
            }

            set(prev => prev.filter(el => el !== num))
        }catch (e) {
            console.error(e)
        }
        
    }

    return <div>
        <button onClick={handleAdd}>add to array</button>
        <button onClick={handleMinus}>minus from array</button>
        <p style={{color:alert ? 'red' : 'black'}}>{JSON.stringify(arr)}</p>
    </div>;
}
