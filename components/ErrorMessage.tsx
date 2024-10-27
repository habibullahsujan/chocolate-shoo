import React from 'react'
import { FaExclamationTriangle } from 'react-icons/fa';

type TErrorMessageProps = {
    message?: string;
}
const ErrorMessage = ({ message }: TErrorMessageProps) => {

    if (!message) return null
    return (
        <div className='bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive'>
            <FaExclamationTriangle className='size-6' />
            {message}
        </div>
    )
}

export default ErrorMessage