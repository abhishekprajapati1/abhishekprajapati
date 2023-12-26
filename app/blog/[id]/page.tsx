import { PostType } from '@/lib/types'
import { fetchPost } from '@/services/post'
import dayjs from 'dayjs'
import React from 'react'

type ParamType = {
    params: {
        id: string
    }
}

const BlogDetailPage: React.FC<ParamType> = async ({ params }: { params: { id: string } }) => {

    const data: PostType | null = await fetchPost(params.id);

    return (
        <main className='mt-14'>
            <div className='mb-14 flex flex-col gap-4'>
                <h1 className='font-semibold text-2xl'>{data?.title}</h1>
                <div className='flex items-center justify-between text-sm'>
                    <p>Published At : {dayjs(data?.published).format("MMM DD, YYYY")}</p>
                    {
                        dayjs(data?.published).format("DD/MM/YYYY") !== dayjs(data?.updated).format("DD/MM/YYYY") && (
                            <p>Updated At : {dayjs(data?.updated).format("MMM DD, YYYY")}</p>
                        )
                    }
                </div>
            </div>

            <div className="blog-container" dangerouslySetInnerHTML={{
                __html: data?.content || "",
            }} />
        </main>
    )
}

export default BlogDetailPage