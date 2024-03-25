'use client';
import React, { useState } from 'react';
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";

const ReactQuill = dynamic(
    async () => await import('react-quill'),
    {
        ssr: false,
    }
);
import { Controller, useForm } from 'react-hook-form';
import { IPostForm, PostStatus } from '@/lib/form';
import useCreateBlog from '@/lib/mutations/blogs/useCreateBlog';
import useFetch from '@/lib/hooks/useFetch';
import ENDPOINTS from '@/lib/endpoints';

const CreateNewBlogPage = () => {
    const { data: tags, isLoading } = useFetch({ endpoint: ENDPOINTS.TAGS });
    const { mutate, isPending } = useCreateBlog();

    const [status, setStatus] = useState<PostStatus>("draft")
    const { control, handleSubmit } = useForm<IPostForm>({
        mode: "all",
        defaultValues: {
            title: "",
            content: "",
            status: status,
            tag_ids: []
        }
    });


    const onSubmit = (data: IPostForm) => {
        data.status = status;
        mutate(data);
    }


    return (
        <div className='h-full overflow-auto py-4'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex gap-6'>
                <div className='flex-grow'>
                    <Controller
                        name='title'
                        control={control}
                        render={({ field: { value, onChange } }) => {
                            return (
                                <textarea
                                    className='text-3xl w-full bg-white focus-visible:outline-none break-words'
                                    placeholder='Blog title...'
                                    value={value}
                                    onChange={onChange}
                                />
                            )
                        }}
                    />
                    <div className='flex-grow'>
                        <Controller
                            name='content'
                            control={control}
                            render={({ field: { value, onChange } }) => {
                                return (
                                    <ReactQuill
                                        modules={modules}
                                        formats={formats}
                                        className='font-inherit'
                                        style={{
                                            boxSizing: 'border-box'
                                        }}
                                        value={value}
                                        onChange={onChange}
                                    />
                                )
                            }}
                        />
                    </div>
                </div>
                <div className='w-1/5 flex-shrink-0'>
                    <div className='flex items-center flex-wrap gap-4'>
                        <button onClick={() => setStatus("draft")} className='flex-grow bg-green-200 hover:bg-green-100 text-green-500'>
                            Save draft
                        </button>
                        <button onClick={() => setStatus("published")} className='w-fit bg-green-500 hover:bg-green-400 text-white'>
                            Publish
                        </button>
                    </div>

                    <div className='mt-4'>
                        {
                            Array.isArray(tags) && (
                                <Controller
                                    name='tag_ids'
                                    control={control}
                                    render={({ field: { value, onChange } }) => (
                                        <select value={Array.isArray(value) ? value[0] : value} onChange={e => onChange([e.target.value])} className='w-full h-[40px] px-2'>
                                            {tags?.map(tag => (
                                                <option key={tag.id} value={tag.id}>{tag.name}</option>
                                            ))}
                                        </select>
                                    )}
                                />
                            )
                        }
                    </div>
                </div>
            </form>
        </div>
    )
}


const modules = {
    toolbar: [
        [{ size: ["small", false, "large", "huge"] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"],
        [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
            { align: [] }
        ],
        [{ "color": ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466", 'custom-color'] }],
    ]
};

const formats = [
    "header", "height", "bold", "italic",
    "underline", "strike", "blockquote",
    "list", "color", "bullet", "indent",
    "link", "image", "align", "size",
];

export default CreateNewBlogPage