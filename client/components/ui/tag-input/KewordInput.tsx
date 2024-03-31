'use client';
import React, { FC, KeyboardEvent, useEffect, useState } from 'react'
import SelectedTag from './SelectedTag'
import { TagInputProps } from '.';



const KeywordInput: FC<TagInputProps> = ({ id, label, value, onChange }) => {
    const [tags, setTags] = useState<any[]>([]);
    const [keyword, setKeyword] = useState<string>("");

    const handleTagClose = (tagToRemove: string) => {
        let newTags = tags.filter(tag => tag !== tagToRemove);
        setTags(newTags);
        onChange(newTags);
    }

    const handleOnKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (keyword) {
            if (event.key === ",") {
                let newTags = Array.from(new Set([...tags, keyword]));
                setKeyword("")
                setTags(newTags)
                onChange(newTags)
            }
        }
    }

    useEffect(() => {
        if (Array.isArray(value)) {
            setTags(value);
        }
    }, [value]);

    return (
        <div className='w-full h-fit'>
            {label && <label htmlFor={id} className='mb-1'>{label}</label>}
            <div className='flex items-center flex-wrap gap-1 mb-2'>
                {
                    tags.map(tag => <SelectedTag key={tag} label={tag} onClose={() => handleTagClose(tag)} />)
                }
            </div>
            <input
                id={id}
                type='text'
                className='border bg-background text-foreground dark:bg-foreground dark:text-background rounded-xl w-full'
                placeholder='Enter a keyword...'
                value={keyword}
                onChange={event => setKeyword(event.target.value)}
                onKeyDown={event => handleOnKeyDown(event)}
            />
        </div>
    )
}

export default KeywordInput