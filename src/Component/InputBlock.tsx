import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type PropsType = DefaultInputPropsType & {
    value: number
    title: string
    onChangeHandler: (value: number) => void
    error: boolean
}

export function InputBlock(props: PropsType) {

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange && props.onChange(e)

        props.onChangeHandler && props.onChangeHandler(+e.currentTarget.value)
    }

    return (
        <div>
            {props.title}
            <input className={props.error ? `${'input'} ${'error'}` : 'input'}
                   type='number'
                   value={props.value}
                   onChange={onChangeCallback}

            />
        </div>
    );
}