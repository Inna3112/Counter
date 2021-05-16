import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './Component/Counter';
import {SettingsBlock} from "./Component/SettingsBlock";

function App() {
    const [num, setNum] = useState<number>(0)


    // useEffect(() => {
    //     let numAsString = localStorage.getItem('num')
    //     if(numAsString){
    //         let newNum = JSON.parse(numAsString)
    //         setNum(newNum)
    //     }
    //     let minValueAsString = localStorage.getItem('minValue')
    //     if(minValueAsString){
    //         let newMinValue = JSON.parse(minValueAsString)
    //         setMinValue(newMinValue)
    //     }
    //     let maxValueAsString = localStorage.getItem('maxValue')
    //     if(maxValueAsString){
    //         let newMaxValue = JSON.parse(maxValueAsString)
    //         setMaxValue(newMaxValue)
    //     }
    //
    // }, [])

    // useEffect(()=>{
    //     localStorage.setItem('num', JSON.stringify(num))
    //     localStorage.setItem('minValue', JSON.stringify(minValue))
    //     localStorage.setItem('maxValue', JSON.stringify(maxValue))
    // }, [num, minValue, maxValue])

    function increaseInc(maxValue: number) {
        if (num < maxValue)
            setNum(num + 1)
    }

    function setInNumMinValue(minValue: number) {
        setNum(minValue)
    }

    return (
        <div className="App">
            <SettingsBlock num={num}
                           setInNumMinValue={setInNumMinValue}
                           increaseInc={increaseInc}
            />
        </div>
    );
}

export default App
