import useLocalStorage from './useLocalStorage';
import React, {useEffect} from 'react';


export default () => {
    const [dark, setDark] = useLocalStorage('dark-mode', false)
    useEffect(() => {
        
        if (dark===true){
           document.body.classList.add("dark-mode")
            } 
            else {
             document.body.classList.remove("dark-mode")
            }
        }, [dark-mode]);

    useLocalStorage("dark-mode", false)
    return(
       
           setDark(toggle) 
           
    
    )
        
    