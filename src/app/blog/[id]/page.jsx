import { notFound } from 'next/navigation';
import React from 'react';

async function getData(id) {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`)

    if (!res.ok) {
        return notFound();
    }

    return res.json();
}
const BlogPost = async ({ params }) => {

    const data = await getData(params.id)

    return (
        <>
            <div>
                {
                    data.title
                }
            </div>
            <div>
                {
                    data.desc
                }
            </div>
        </>
    );
};

export default BlogPost;