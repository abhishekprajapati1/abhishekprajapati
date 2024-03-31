'use client';
import React, { FC, useEffect, useState } from 'react'
import SelectedTag from './SelectedTag'
import useFetch from '@/lib/hooks/useFetch';
import ENDPOINTS from '@/lib/endpoints';


export interface TagInputProps {
    value: string[] | undefined;
    onChange: (value: string[]) => void;
    label?: string;
    id: string;
}


const TagInput: FC<TagInputProps> = ({ id, label, value, onChange }) => {
    const { data, isLoading } = useFetch({ endpoint: ENDPOINTS.TAGS });
    const [filteredData, setFilteredData] = useState<any[]>([]);
    const [tags, setTags] = useState<any[]>([]);
    const [query, setQuery] = useState("");
    const [optionsVisible, setOptionsVisible] = useState(false);

    const handleTagClose = (id: string) => {
        let newTags = tags.filter(t => t.id !== id);
        setTags(newTags);
        onChange(newTags.map(t => t.id));
    }

    const handleClick = (value: any) => {
        if (value) {
            let newTags = Array.from(new Set([...tags, value]));
            setTags(newTags)
            onChange(newTags.map(tag => tag.id))
            setOptionsVisible(false);
            setQuery("")
        }
    }

    useEffect(() => {
        if (data) {
            if (query === "") {
                setFilteredData(data);
                return;
            }

            const filteredData = data.filter((tag: any) => tag.name.toLowerCase().includes(query.toLowerCase()));
            setFilteredData(filteredData)
            if (!optionsVisible) setOptionsVisible(true)
        }
    }, [query, data]);

    useEffect(() => {
        if (data && Array.isArray(value)) {
            let newTags: any[] = [];
            value.forEach(tag => {
                const foundTag = data.find((t: any) => t.id === tag);
                if (foundTag) newTags.push(foundTag);
            });
            setTags(newTags);
        }
    }, [value, data]);

    if (isLoading || !data) {
        return (
            <div>
                loading ...
            </div>
        )
    }

    return (
        <div className='w-full h-fit'>
            {label && <label htmlFor={id} className='mb-1'>{label}</label>}
            <div className='flex items-center flex-wrap gap-1 mb-2'>
                {
                    tags.map(t => <SelectedTag key={t.id} label={t.name} onClose={() => handleTagClose(t.id)} />)
                }
            </div>
            <div className='w-full relative'>
                <input
                    id={id}
                    type='text'
                    className='border bg-background text-foreground dark:bg-foreground dark:text-background rounded-xl w-full'
                    placeholder='Search tags...'
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    onClick={() => setOptionsVisible(!optionsVisible)}
                />
                {
                    optionsVisible && (
                        <div className='absolute w-full h-40 border p-2 border-gray-300 bg-background text-foreground dark:bg-foreground dark:text-background rounded-xl top-[101%]'>
                            <div className='w-full h-full overflow-auto'>
                                {
                                    filteredData?.map((d: any) => (
                                        <button onClick={() => { handleClick(d); setOptionsVisible(false); setQuery("") }} type='button' key={d.id} className='py-0 px-2 hover:bg-primary/10 hover:text-primary  w-full font-normal text-start rounded-md cursor-pointer'>
                                            {d.name}
                                        </button>
                                    ))
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default TagInput