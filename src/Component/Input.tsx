import React, {ChangeEvent, useState} from 'react';

type PropsType = {
    title: string
    onChangeHandler: (num: number) => void
}

export function Input(props: PropsType) {
    const [value, setValue] = useState<number>(0)
    const [error, setError] = useState('')
    const [message, setMessage] = useState("Enter values and press 'set'!")

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(JSON.parse(e.currentTarget.value))
        if (JSON.parse(e.currentTarget.value) < 0) {
            setError('Incorrect value!')
            setMessage('')
        } else {
            setError('')
            setMessage("Enter values and press 'set'!")
        }
    }
    return (
        <div>
            {props.title}
            <input className={error ? `${'input'} ${'error'}` : 'input'}
                   type='number'
                   value={value}
                   onChange={onChangeHandler}

            />
        </div>
    );
}