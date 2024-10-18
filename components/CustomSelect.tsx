import React from 'react';
import { Controller, Control } from 'react-hook-form';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { FormControl, FormItem, FormLabel } from './ui/form';

type Option = {
    label: string;
    value: string;
};

type CustomSelectProps = {
    name: string;
    label?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: Control<any>;
    options: Option[];
    placeholder?: string;
    disabled?: boolean;
};

const CustomSelect: React.FC<CustomSelectProps> = ({ name, label, control, options, placeholder, disabled }) => {
    return (
        <FormItem>
            {label && <FormLabel>{label}</FormLabel>}
            <FormControl>
                <Controller
                    name={name}
                    control={control}
                    render={({ field }) => (
                        <Select
                            onValueChange={(value) => field.onChange(value)}
                            value={field.value || ''}
                            disabled={disabled}
                        >
                            <SelectTrigger className='w-full'>
                                <SelectValue placeholder={placeholder || 'Select an option'} />
                            </SelectTrigger>
                            <SelectContent>
                                {options.map((option) => (
                                    <SelectItem key={option.value} value={option.value}>
                                        {option.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    )}
                />
            </FormControl>
        </FormItem>
    );
};

export default CustomSelect;
