import React from 'react';
import posts from '../data/posts.json'
import {Link} from "react-router-dom";

function BlogPostList() {


    return (
        <>
            <ul>
                {posts.map((post) => {
                    return <li key={post.id}>
                        <Link to={`fred/${post.id}`}>
                            {post.title}</Link>
                    </li>
                })}
            </ul>
        </>
    );
}

export default BlogPostList;