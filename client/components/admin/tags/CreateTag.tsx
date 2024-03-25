'use client';
import Modal from '@/components/ui/Modal'
import { ITagForm } from '@/lib/form';
import useCreateTag from '@/lib/mutations/tags/useCreateTag';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

const CreateTag = () => {
    const { mutate, isPending } = useCreateTag();
    const [show, setShow] = useState(false);

    const { register, handleSubmit } = useForm<ITagForm>({
        mode: "all",
        defaultValues: {
            name: ""
        }
    })

    const onSubmit = (data: ITagForm) => {
        mutate(data);
        setShow(false);
    }




    return (
        <>
            <div className='flex items-center justify-between py-4'>
                <h1 className='text-2xl font-semibold'>Tags</h1>
                <button onClick={() => setShow(true)} type="button" className='bg-blue-500 hover:bg-blue-400 text-white'>+ New Tag</button>
            </div>
            <Modal show={show} onClose={setShow}>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6'>
                    <h3 className='font-semibold text-xl'>Create new tag</h3>
                    <input
                        type='text'
                        placeholder='Enter tag name here...'
                        {...register('name')}
                    />
                    <button className='bg-green-500 hover:bg-green-400 text-white'>Add Tag</button>
                </form>
            </Modal>
        </>
    )
}

export default CreateTag