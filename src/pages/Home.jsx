import React, { useState } from "react";
import Buttons from "../components/Buttons";
import './Home.css'

function Home(){
    const [displayValue, setDisplayValue] = useState('');
    function handleClick(event){
        if(event.target.value === `C`){
            setDisplayValue(``);
        }
        else if(event.target.value === `%`){
            setDisplayValue(displayValue + `/100`);
        }
        else if(event.target.value === `<=`){
            setDisplayValue(displayValue.slice(0, displayValue.length - 1))
        }
        else if(event.target.value === `=`){
            try {
                setDisplayValue(eval(displayValue));
            } catch (error) {
                setDisplayValue(`ERROR`);
            }
        }
        else{
            setDisplayValue(displayValue + event.target.value);
        }
    }
    return(
        <>
            <div id="display">{displayValue}</div>
            <Buttons handleClick = {handleClick} />
        </>
    )
}

export default Home