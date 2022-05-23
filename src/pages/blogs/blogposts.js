import React from 'react';
import posts from '../../data/posts.json';
import {Link} from "react-router-dom";
import styles from "../blogs/blogposts.module.css"


function BlogPage() {


    return (
        <>
            <section className={styles.blogPost}>
                <h1>Blog overzichtspagina</h1>

                <h3>aantal blogposts: {posts.length}</h3>

                <ul className={styles.blogPostList}>
                    {posts.map((blogpost) => {
                        return <li key={blogpost.id}>
                            <Link to={`blogpost/${blogpost.id}`}>
                                {blogpost.title}</Link>
                        </li>
                    })}
                </ul>
            </section>

        </>

    );

}

export default BlogPage;