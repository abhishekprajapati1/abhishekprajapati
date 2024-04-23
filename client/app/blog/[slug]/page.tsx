import { IBlog, PostType } from '@/lib/types'
import { fetchPost } from '@/services/post'
import dayjs from 'dayjs'
import { Metadata } from 'next'
import Head from 'next/head'
import React from 'react'

type ParamType = {
    params: {
        slug: string
    }
}

export async function generateMetadata({ params }: ParamType): Promise<Metadata> {
    const data: any = await fetchPost(params.slug);
    return {
        title: data?.title,
        keywords: data?.keywords?.join(","),
    }
}


const BlogDetailPage: React.FC<ParamType> = async ({ params }) => {

    const data: any = await fetchPost(params.slug);

    return (
        <main className='mt-14'>
            <Head>
                <title>{data?.title}</title>
            </Head>
            <div className='mb-14 flex flex-col gap-4'>
                <h1 className='font-semibold text-2xl'>{data?.title}</h1>
                <div className='flex items-center justify-between text-sm'>
                    <p>Published At : {dayjs(data?.created_at).format("MMM DD, YYYY")}</p>
                    {
                        dayjs(data?.created_at).format("DD/MM/YYYY") !== dayjs(data?.updated_at).format("DD/MM/YYYY") && (
                            <p>Updated At : {dayjs(data?.updated_at).format("MMM DD, YYYY")}</p>
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