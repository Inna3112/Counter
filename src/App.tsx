import React, {useState} from 'react';
import './App.css';
import {Counter} from './Component/Counter';
import {SettingsBlock} from "./Component/SettingsBlock";

function App() {
    const [num, setNum] = useState<number>(0)
    const [minValue, setMinValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)

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
