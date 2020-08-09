import React, { Fragment } from 'react';
import Header from '../../components/header';
import CreatePost from '../../components/create-post';
import Footer from '../../components/footer';
import styles from './index.module.css';

const CreatePostPage = (props) => {
    return (
        <Fragment>
            <Header />
            <div className={styles.container}>
                <CreatePost />
            </div>
            <Footer />
        </Fragment>
    )
}

export default CreatePostPage;