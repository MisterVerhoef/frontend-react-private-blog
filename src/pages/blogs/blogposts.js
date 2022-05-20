import React from 'react';
import posts from '../../data/posts.json';
import BlogPostList from "../../components/blogPostList";
import {Link} from "react-router-dom";



function BlogPage() {


    return (
        <>
            <h1>Blog overzichtspagina</h1>

            <p>aantal Blog posts {posts.length}</p>

            <ul>
                {posts.map((blogpost) => {
                    return <li key={blogpost.id}>
                        <Link to={`blogpost/${blogpost.id}`}>
                            {blogpost.title}</Link>
                    </li>
                })}
            </ul>

        </>

    );

}

export default BlogPage;