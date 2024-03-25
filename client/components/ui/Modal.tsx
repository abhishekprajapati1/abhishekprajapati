'use client'
import { WrapperProps } from '@/lib/types';
import React, { FC, MouseEvent, useEffect, useRef, useState } from 'react'

export interface ModalProps extends WrapperProps {
    show?: boolean;
    onClose?: (val: boolean) => void;
}


const Modal: FC<ModalProps> = ({ show = false, onClose, children }) => {
    const [modal, setModal] = useState<boolean>(false);
    const backdropRef = useRef<HTMLDivElement>(null);

    const handleClose = (event: MouseEvent<HTMLDivElement>) => {
        if (backdropRef?.current === event.target) {
            if (onClose) onClose(false)
            else setModal(false);
        }
    }


    useEffect(() => {
        setModal(show)
    }, [show]);



    if (modal) {
        return (
            <div ref={backdropRef} onClick={(e) => handleClose(e)} className='bg-black/30 h-screen fixed inset-0'>
                <div className='absolute shadow-xl min-h-[200px] p-6 rounded-xl top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full sm:w-[90%] md:w-[60%] lg:w-1/2 bg-white'>
                    <button type='button' className='absolute top-3.5 right-3.5' onClick={() => onClose ? onClose(false) : setModal(false)}>x</button>
                    {children}
                </div>
            </div>
        )
    }
    return <></>
}

export default Modal