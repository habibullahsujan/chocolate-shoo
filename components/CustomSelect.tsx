import React from 'react';
import { Controller, Control } from 'react-hook-form';
import { FormControl, FormItem, FormLabel } from './ui/form';
import Select from 'react-select';

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
};

const CustomSelect: React.FC<CustomSelectProps> = ({ name, label, control, options, placeholder }) => {
    return (
        <FormItem>
            {label && <FormLabel>{label}</FormLabel>}
            <FormControl>
                <Controller
                    name={name}
                    control={control}
                    defaultValue={null} // Set default value to null if no selection is desired initially
                    render={({ field }) => (
                        <Select
                            {...field}
                            options={options}           // Pass options array
                            placeholder={placeholder}
                            isClearable
                            onChange={(selectedOption) => field.onChange(selectedOption?.value)} // Set entire option
                            value={options?.find(option => option?.value === field?.value)}   // Show selected option
                        />
                    )}
                />
            </FormControl>
        </FormItem>
    );
};

export default CustomSelect;
