import React, { Fragment } from 'react';
import Post from '../../components/post';
import Header from '../../components/header';
import Footer from '../../components/footer';
import styles from './index.module.css';
import { likePost, getAllPosts, getPostById } from '../../services/postService';
import Spinner from '../../components/spinner';
import Reply from '../../components/reply';

class PostPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            post: null,
            isLoading: true,
            hasLiked: false,
            likes: 0
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        const getPost = async () => {
            const id = this.props.match.params.id;
            try {
                const userId = localStorage.getItem('userId')
                const data = await getAllPosts();
                const currentPost = data.find(p => p._id == id);
                console.log(currentPost);
                const alreadyLiked = currentPost.likes.find(u => u == userId) === undefined ? false : true;
                this.setState({
                    post: currentPost,
                    isLoading: false,
                    likes: currentPost.likes.length,
                    hasLiked: alreadyLiked
                });
            } catch (err) {
                console.log(err);
            }
        }
        getPost();
    }

    async handleClick() {
        this.setState((state) => ({
            likes: state.likes + 1,
            hasLiked: true,
        }))
        likePost(this.state.post._id);
    }

    render() {
        return (
            <Fragment>
                <Header />
                <div className={styles.container}>
                    {this.state.isLoading ? <Spinner /> :
                        <Post post={this.state.post}
                            likes={this.state.likes}
                            hasLiked={this.state.hasLiked}
                            handleClick={this.handleClick}
                        />
                    }
                    <div className={styles['replies-container']}>
                        {this.state.isLoading ? <Spinner /> :
                            this.state.post.replies.map(r => (
                                <Reply data={r} key={r._id} />
                            ))
                        }
                    </div>

                </div>
                <Footer />
            </Fragment>
        )

    }
}


export default PostPage;