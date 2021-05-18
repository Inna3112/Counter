import React, {ChangeEvent, useState} from 'react';
import {Batton} from "./Batton";
import {Counter} from "./Counter";


type PropsType = {
    num: number
    increaseInc: (maxValue: number) => void
    setNum: (num:number) => void
}

export function SettingsBlock(props: PropsType) {
    const [minValue, setMinValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(1)
    const [minError, setMinError] = useState<string>('')
    const [maxError, setMaxError] = useState<string>('')
    const [message, setMessage] = useState<string>("Enter values and press 'set'!")

    const onClickHandler = () => {
        if (maxValue > 0  && minValue === 0){
            setMaxError('')
            setMinError('')
            setMessage('')
        }
        props.setNum(minValue)
    }

    const startInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMinValue(+e.currentTarget.value)
        if (+e.currentTarget.value < 0) {
            setMinError('Incorrect value!')
            setMessage('')
        }else if (+e.currentTarget.value > maxValue) {
            setMinError('Incorrect value!')
            setMaxError('Incorrect value!')
            setMessage('')
        }else if (+e.currentTarget.value === maxValue) {
            setMinError('Incorrect value!')
            setMaxError('Incorrect value!')
            setMessage('')
        } else if (+e.currentTarget.value !== maxValue) {
            setMinError('')
            setMaxError('')
        } else {
            setMinError('')
        }
    }
    const maxInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value)
        if (+e.currentTarget.value < 0) {
            setMaxError('Incorrect value!')
            setMessage('')
        }else if (+e.currentTarget.value === minValue) {
            setMaxError('Incorrect value!')
            setMinError('Incorrect value!')
            setMessage('')
        } else if (+e.currentTarget.value !== minValue) {
            setMaxError('')
            setMinError('')
        }
        else {
            setMaxError('')
        }
    }

    const onClickInputHandler = () => {
        if (maxError !== 'Incorrect value!' && minError !== 'Incorrect value!') {
            props.setNum(0)
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
                               onClick={onClickInputHandler}
                        />
                    </div>
                    <div>
                        Max value
                        <input className={maxError ? `${'input'} ${'error'}` : 'input'}
                               type='number'
                               value={maxValue}
                               onChange={maxInputChangeHandler}
                               onClick={onClickInputHandler}
                        />
                    </div>
                </div>

                <div className="buttons">
                    <Batton title={'Set'}
                            onClickHandler={onClickHandler}
                            disabled={minValue < 0 || maxValue < 0 || minValue >= maxValue}
                            />
                </div>
            </div>

            <Counter num={props.num}
                     message={message}
                     increaseInc={props.increaseInc}
                     setNum={props.setNum}
                     maxValue={maxValue}
                     minValue={minValue}
                     minError={minError}
                     maxError={maxError}
            />
        </div>
    );
}