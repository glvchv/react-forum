import React, { useEffect, useState, Fragment } from 'react';
import Minified from '../../components/minified-post';
import { getAllPosts } from '../../services/postService';
import Header from '../../components/header';
import Footer from '../../components/footer';
import styles from './index.module.css';
import Button from '../../components/button';
import Spinner from '../../components/spinner';

const GuestPage = (props) => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let isSubscribed = true;
        async function fetchPosts() {
            const data = await getAllPosts();
            const sortedByLikes = data.sort((a, b) => b.likes.length - a.likes.length);
            const firstThreeItems = sortedByLikes.slice(0, 3);
            if (isSubscribed) {
                setPosts([...posts, ...firstThreeItems]);
                setIsLoading(false);
            }
        }

        fetchPosts();

        return function cleanup() {
            isSubscribed = false;
        }

    }, [])
    console.log(posts);
    return (
        <Fragment>
            <Header />
            {isLoading && <Spinner />}
            <div className={styles.background}>
                <div className={styles.card}>
                    <p className={styles.text}>Join <span className={styles.title}>{"< Forum />"}</span> now. <br />
                    Share your ideas and experiences... <br />
                    Ask what interests you!</p>
                    <Button type={'default'} text={'Sign up'} link={'/register'} />
                </div>
                <div className={styles.container}>
                    <h2 className={styles['sub-text']}>Here are some of our most intriguing posts ...</h2>
                    {posts.map(post => { return (<Minified key={post._id} post={post} />) })}
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default GuestPage;