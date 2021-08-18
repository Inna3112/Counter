import React from 'react';
import './App.css';
import {SettingsBlock} from './Component/SettingsBlock';
import {Counter} from './Component/Counter';

function App() {

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


    return (
        <div className="App">
            <div className="wrapper">
                <SettingsBlock/>
                <Counter/>
            </div>
        </div>
    );
}

export default App
