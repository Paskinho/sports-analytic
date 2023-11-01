import {FieldValues, useController, UseControllerProps} from 'react-hook-form'

import { Checkbox, CheckboxProps } from '../../checkbox'

export type ControlledCheckboxProps<TFieldValues extends FieldValues> =
    UseControllerProps<TFieldValues> & Omit<CheckboxProps, 'onChange' | 'value' | 'id'>


export const ControlledCheckbox = <TFieldValues extends FieldValues> ({
                                       name,
                                       rules,
                                       shouldUnregister,
                                       control,
                                       defaultValue,
                                       ...checkboxProps
                                   }: ControlledCheckboxProps<TFieldValues>) => {
    const {
        field: { onChange, value },
    } = useController({
        name: name,
        rules,
        shouldUnregister,
        control: control,
        defaultValue,
    })

    return (
        <Checkbox
            {...{
                onChange,
                checked: value,
                id: name,
                ...checkboxProps,
            }}
        />
    )
}