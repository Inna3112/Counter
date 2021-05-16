import React, {ChangeEvent, useState} from 'react';
import {Batton} from "./Batton";
import {Counter} from "./Counter";


type PropsType = {
    num: number
    setInNumMinValue: (minValue: number) => void
    increaseInc: (maxValue: number) => void
}

export function SettingsBlock(props: PropsType) {
    const [minValue, setMinValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)
    const [minError, setMinError] = useState<string>('')
    const [maxError, setMaxError] = useState<string>('')
    const [message, setMessage] = useState<string>("Enter values and press 'set'!")

    const onClickHandler = () => props.setInNumMinValue(minValue)

    const startInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMinValue(JSON.parse(e.currentTarget.value))
        if (JSON.parse(e.currentTarget.value) < 0) {
            setMinError('Incorrect value!')
            setMessage('')
        }else if (JSON.parse(e.currentTarget.value) === maxValue) {
            setMinError('Incorrect value!')
            setMaxError('Incorrect value!')
            setMessage('')
        } else if (JSON.parse(e.currentTarget.value) !== maxValue) {
            setMinError('')
            setMaxError('')
        } else {
            setMinError('')
        }
    }
    const maxInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(JSON.parse(e.currentTarget.value))
        if (JSON.parse(e.currentTarget.value) < 0) {
            setMaxError('Incorrect value!')
            setMessage('')
        }else if (JSON.parse(e.currentTarget.value) === minValue) {
            setMaxError('Incorrect value!')
            setMinError('Incorrect value!')
            setMessage('')
        } else if (JSON.parse(e.currentTarget.value) !== minValue) {
            setMaxError('')
            setMinError('')
        } else {
            setMaxError('')
        }
    }
    const onClickStartInputHandler = () => {
        if (maxError !== 'Incorrect value!' && minError !== 'Incorrect value!') {
            props.setInNumMinValue(0)
            setMessage("Enter values and press 'set'!")
        }
    }
    return (
        <div className='wrapper'>
            <div className="counter">
                <div className={'num'}>
                    <div>
                        Start value
                        <input className={minError ? `${'input'} ${'error'}` : 'input'}
                               type='number'
                               value={minValue}
                               onChange={startInputChangeHandler}
                               onClick={onClickStartInputHandler}
                        />
                    </div>
                    <div>
                        Max value
                        <input className={maxError ? `${'input'} ${'error'}` : 'input'}
                               type='number'
                               value={maxValue}
                               onChange={maxInputChangeHandler}
                               onClick={onClickStartInputHandler}
                        />
                    </div>
                </div>

                <div className="buttons">
                    <Batton title={'Set'}
                            onClickHandler={onClickHandler}
                            disabled={minValue < 0 || maxValue < 0 || minValue >= maxValue}/>
                </div>
            </div>

            <Counter num={props.num}
                     message={message}
                     increaseInc={props.increaseInc}
                     setInNumMinValue={props.setInNumMinValue}
                     maxValue={maxValue}
                     minValue={minValue}
                     minError={minError}
                     maxError={maxError}
            />
        </div>
    );
}