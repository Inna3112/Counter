import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './Component/Counter';
import {SettingsBlock} from "./Component/SettingsBlock";

function App() {
    const [num, setNum] = useState<number>(0)
    const [minValue, setMinValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)

    useEffect(() => {
        let numAsString = localStorage.getItem('num')
        if(numAsString){
            let newNum = JSON.parse(numAsString)
            setNum(newNum)
        }
        let minValueAsString = localStorage.getItem('minValue')
        if(minValueAsString){
            let newMinValue = JSON.parse(minValueAsString)
            setMinValue(newMinValue)
        }
        let maxValueAsString = localStorage.getItem('maxValue')
        if(maxValueAsString){
            let newMaxValue = JSON.parse(maxValueAsString)
            setMaxValue(newMaxValue)
        }

    }, [])

    useEffect(()=>{
        localStorage.setItem('num', JSON.stringify(num))
        localStorage.setItem('minValue', JSON.stringify(minValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }, [num, minValue, maxValue])

    function increaseInc(maxValue: number) {
        if (num < maxValue)
            setNum(num + 1)
    }

    function resetNum(minValue: number) {
        setNum(minValue)
    }

    function setValue(minValue: number) {
        setNum(minValue)
    }

    return (
        <div className="App">
            <SettingsBlock num={num} setValue={setValue} minValue={minValue}
                           maxValue={maxValue} setMinValue={setMinValue} setMaxValue={setMaxValue}/>
            <Counter num={num} increaseInc={increaseInc} resetNum={resetNum} maxValue={maxValue}
                     minValue={minValue}/>
        </div>
    );
}

export default App
