import React from 'react';
import authContext from '../../context/authContext';
import Header from '../../components/header';
import Post from '../../components/post';
import styles from './index.module.css';
import { getAllPosts } from '../../services/postService';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    static contextType = authContext;

    componentDidMount() {
        const getPosts = async () => {
            const allPosts = await getAllPosts();
            console.log(allPosts);
            this.setState({
                posts: allPosts
            })
        }
        getPosts();
        console.log(this.state.posts)
    }

    render() {
        return (
            <div>
                <Header />
                <div className={styles.container}>
                    {this.state.posts.map(post => {
                        return (
                            <Post key={post._id} author={post.author} text={post.text} date={post.date} title={post.title} />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default HomePage;