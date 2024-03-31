'use client';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { IPostForm, PostStatus } from '@/lib/form';
import useCreateBlog from '@/lib/mutations/blogs/useCreateBlog';
import TagInput from '@/components/ui/tag-input';
import SpinnerIcon from '@/components/icons/SpinnerIcon';
import useFetch from '@/lib/hooks/useFetch';
import ENDPOINTS from '@/lib/endpoints';
import useUpdateBlog from '@/lib/mutations/blogs/useUpdateBlog';
import KeywordInput from '@/components/ui/tag-input/KewordInput';
import TextEditor from '@/components/ui/TextEditor';


interface BlogFormProps {
    blog_id?: string;
}

const BlogForm: React.FC<BlogFormProps> = ({ blog_id }) => {
    const { data } = useFetch({ endpoint: ENDPOINTS.GET_BLOG_FOR_ADMIN(blog_id), enabledKey: blog_id, validate: true });
    const { mutate, isPending } = useCreateBlog();
    const { mutate: updateBlog, isPending: isUpdating } = useUpdateBlog(blog_id || "");
    const isMutating = isUpdating || isPending;
    const [status, setStatus] = useState<PostStatus>("draft")
    const { control, handleSubmit, setValue, reset } = useForm<IPostForm>({
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

        if (blog_id) {
            updateBlog(data);
        } else {
            mutate(data);
        }
    }


    useEffect(() => {
        if (data && blog_id) {
            const payloadToReset: IPostForm = {
                content: data.content,
                title: data.title,
                tag_ids: data.tag_ids,
                slug: data.slug,
                keywords: data.keywords,
            };
            reset(payloadToReset)
        }
    }, [data]);


    return (
        <form onSubmit={handleSubmit(onSubmit)} className={`flex flex-wrap md:flex-nowrap  md:gap-x-10 ${isMutating && "pointer-events-none"}`}>
            <div className='flex-grow md:max-w-[70%]'>
                <Controller
                    name='title'
                    control={control}
                    render={({ field: { value, onChange } }) => {
                        return (
                            <textarea
                                className='text-3xl w-full bg-background dark:bg-foreground text-foreground dark:text-background focus-visible:outline-none break-words'
                                placeholder='Blog title...'
                                value={value}
                                onChange={e => { onChange(e.target.value); setValue("slug", generateSlug(e.target.value)) }}
                            />
                        )
                    }}
                />
                <div className='flex-grow mt-8'>
                    <Controller
                        name='content'
                        control={control}
                        render={({ field: { value, onChange } }) => {
                            return (
                                <TextEditor value={value} onChange={onChange} />
                            )
                        }}
                    />
                </div>
            </div>

            <div className='w-[250px] md:w-[350px] flex flex-col-reverse md:flex-col gap-4 flex-shrink-0 md:flex-shrink'>
                <div className='flex items-center flex-wrap gap-4'>
                    <button disabled={isMutating} onClick={() => setStatus("draft")} className='flex-grow flex items-center justify-center gap-2 bg-primary/10 hover:bg-primary/5 text-primary'>
                        {
                            status === "draft" && (
                                <>
                                    {isMutating && <SpinnerIcon className='w-5 h-5' />}
                                    {!isMutating && <span> Save draft</span>}
                                    {isMutating && <span>Saving...</span>}
                                </>
                            )
                        }
                        {
                            status !== "draft" && <span>Save draft</span>
                        }
                    </button>
                    <button disabled={isMutating} onClick={() => setStatus("published")} className='w-fit flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/80'>
                        {
                            status === "published" && (
                                <>
                                    {isMutating && <SpinnerIcon className='w-5 h-5' />}
                                    {!isMutating && <span>Publish</span>}
                                    {isMutating && <span>Publishing...</span>}
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
                                        className='w-full h-fit bg-background dark:bg-foreground text-foreground dark:text-background'
                                        rows={4}
                                        value={value}
                                        onChange={e => onChange(generateSlug(e.target.value))}
                                    ></textarea>
                                )
                            }}
                        />
                    </div>

                    <div className='mb-4'>
                        <Controller
                            name='keywords'
                            control={control}
                            render={({ field: { value, onChange } }) => {
                                return (
                                    <KeywordInput
                                        label='keywords'
                                        id='keywords-input'
                                        value={value}
                                        onChange={onChange}
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
    )
}

const generateSlug = (str: string) => {
    try {
        return str.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
    } catch {
        return ""
    }
}

export default BlogForm