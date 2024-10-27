import React from 'react'
import { FormControl, FormField, FormItem, FormLabel } from './ui/form'
import { Input } from './ui/input'


type TCustomInputProps = {
    control: any;
    name: string;
    label?: string;
    placeholder: string;
    message?: string;
    className?: string;
    type?: string;
    disabled?: boolean
}
const CustomInput = ({disabled, control, name, label, placeholder, className, type='text' }:TCustomInputProps) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Input disabled={disabled} className={className} type={type} placeholder={placeholder} {...field} />
                    </FormControl>

                </FormItem>
            )}
        />
    )
}

export default CustomInput