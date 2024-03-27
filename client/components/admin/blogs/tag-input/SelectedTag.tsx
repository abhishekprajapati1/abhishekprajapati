import React, { FC } from 'react'

interface SelectedTagProps {
    label: string;
    onClose: () => void;
}

const SelectedTag: FC<SelectedTagProps> = ({ label, onClose }) => {
    return (
        <div className='rounded-xl border bg-gray-50 border-gray-400 px-2 py-1 flex items-center gap-2'>
            <span className='text-sm'>{label}</span>
            <button onClick={() => onClose()} type='button' className='w-fit h-fit p-0 grid place-content-center'>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z"></path></svg>
            </button>
        </div>
    )
}

export default SelectedTag