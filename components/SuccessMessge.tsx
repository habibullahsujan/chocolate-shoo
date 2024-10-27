import React from 'react'
import { FaRegCheckCircle } from "react-icons/fa";

type TSuccessMessageProps = {
    message?: string;
}
const SuccessMessage = ({ message }: TSuccessMessageProps) => {

    if (!message) return null
    return (
        <div className='bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500'>
            <FaRegCheckCircle className='size-6' />
            {message}
        </div>
    )
}

export default SuccessMessage