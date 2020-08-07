import React from 'react';
import authContext from '../../context/authContext';
import Header from '../../components/header';
import Minified from '../../components/minified-post';
import styles from './index.module.css';
import { getAllPosts } from '../../services/postService';
import Footer from '../../components/footer';

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
                this.setState({
                    posts: allPosts
                })
        }
        getPosts();
    }

    componentWillUnmount() {
        console.log('unmonting')
    }

    render() {
        return (
            <div>
                <Header />
                <div className={styles.container}>
                    {this.state.posts.map(post => {
                        return (
                            <Minified key={post._id} post={post} />
                        )
                    })}
                </div>
                <Footer />
            </div>
        )
    }
}

export default HomePage;