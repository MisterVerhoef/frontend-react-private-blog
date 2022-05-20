import React from 'react';
import posts from '../data/posts.json';
import {Link, useParams} from "react-router-dom";



function BlogPostPage() {

    let { id } = useParams();
    console.log(id)

    const currentPost = posts.find((post) => {
        return post.id === id
    });


    return (
        <>
            <section>
            <h1>{currentPost.title}</h1>
            <h2>{currentPost.date} </h2>
            <p>{currentPost.content}</p>
            </section>
            <div>
                <Link>Terug naar homepage</Link>
            </div>

        </>

    );
}

export default BlogPostPage;

