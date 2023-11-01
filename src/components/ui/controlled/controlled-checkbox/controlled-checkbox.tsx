import {FieldValues, useController, UseControllerProps} from 'react-hook-form'

import { Checkbox, CheckboxProps } from '../../checkbox'

export type ControlledCheckboxProps<TFieldValues extends FieldValues> =
    UseControllerProps<TFieldValues> & Omit<CheckboxProps, 'onChange' | 'value' | 'id'>


export const ControlledCheckbox = ({
                                       name,
                                       rules,
                                       shouldUnregister,
                                       control,
                                       defaultValue,
                                       ...checkboxProps
                                   }: ControlledCheckboxProps) => {
    const {
        field: { onChange, value },
    } = useController({
        name,
        rules,
        shouldUnregister,
        control,
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