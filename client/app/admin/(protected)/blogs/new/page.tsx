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
import TagInput from '@/components/admin/blogs/tag-input';
import SpinnerIcon from '@/components/icons/SpinnerIcon';

const generateSlug = (str: string) => {
    try {
        return str.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
    } catch {
        return ""
    }
}

const CreateNewBlogPage = () => {
    const { mutate, isPending } = useCreateBlog();

    const [status, setStatus] = useState<PostStatus>("draft")
    const { control, handleSubmit, setValue } = useForm<IPostForm>({
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
        console.log(data);
        mutate(data);
    }


    return (
        <div className={`h-full overflow-auto p-4 ${isPending && "pointer-events-none"}`}>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-wrap md:flex-nowrap  gap-6'>
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
                                    onChange={e => { onChange(e.target.value); setValue("slug", generateSlug(e.target.value)) }}
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
                <div className='w-[250px] flex flex-col-reverse md:flex-col gap-4 flex-shrink-0'>
                    <div className='flex items-center flex-wrap gap-4'>
                        <button disabled={isPending} onClick={() => setStatus("draft")} className='flex-grow flex items-center justify-center gap-2 bg-green-200 hover:bg-green-100 text-green-500'>
                            {
                                status === "draft" && (
                                    <>
                                        {isPending && <SpinnerIcon className='w-5 h-5' />}
                                        {!isPending && <span> Save draft</span>}
                                        {isPending && <span>Saving...</span>}
                                    </>
                                )
                            }
                            {
                                status !== "draft" && <span>Save draft</span>
                            }
                        </button>
                        <button disabled={isPending} onClick={() => setStatus("published")} className='w-fit flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white'>
                            {
                                status === "published" && (
                                    <>
                                        {isPending && <SpinnerIcon className='w-5 h-5' />}
                                        {!isPending && <span>Publish</span>}
                                        {isPending && <span>Publishing...</span>}
                                    </>
                                )
                            }
                            {
                                status !== "published" && <span>Publish</span>
                            }
                        </button>
                    </div>

                    <div>
                        <div className='mb-4'>
                            <label htmlFor="article-slug">Slug</label>
                            <Controller
                                name='slug'
                                control={control}
                                render={({ field: { value, onChange } }) => {
                                    return (
                                        <textarea
                                            placeholder='enter-custom-slug'
                                            className='w-full'
                                            value={value}
                                            onChange={e => onChange(generateSlug(e.target.value))}
                                        />
                                    )
                                }}
                            />
                        </div>


                        <div className=''>
                            <Controller
                                name='tag_ids'
                                control={control}
                                render={({ field: { value, onChange } }) => <TagInput id="search-input-for-tag" label="Assign Tags" value={value} onChange={onChange} />}
                            />
                        </div>
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