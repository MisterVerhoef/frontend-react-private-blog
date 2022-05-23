import React from 'react';
import posts from '../data/posts.json';
import {Link, useParams} from "react-router-dom";
import styles from "../components/blogId.module.css"


function BlogPostPage() {

    let {id} = useParams();
    // console.log(id)

    const currentPost = posts.find((post) => {
        return post.id === id
    });


    return (
        <>
            <section className={styles.wholeBlogItem}>
                <div className={styles.blogItem}>
                    <h1>{currentPost.title}</h1>
                    <h2>{currentPost.date} </h2>
                    <p>{currentPost.content}</p>
                </div>
                <div className={styles.backHome}>
                    <Link to="/">Terug naar homepage</Link>
                </div>
            </section>

        </>

    );
}

export default BlogPostPage;

