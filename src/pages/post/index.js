import React, { Fragment } from 'react';
import Post from '../../components/post';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { getCookie } from '../../utils/getCookie';
import { getPostById } from '../../services/postService';
import styles from './index.module.css';

class PostPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            post: null,
            hasLiked: false,
            isLoading: true
        }

    }

    componentDidMount() {
        const getPost = async () => {
            console.log('getPost invoked!');
            const id = this.props.match.params.id;
            const token = getCookie('x-auth-token');
            const data = await getPostById(id, token);
            console.log(data);
            this.setState(() => ({
                post: data,
                isLoading: false
            }));
        };
        getPost();
    }


    render() {
        return (
            <Fragment>
                <Header />
                <div className={styles.container}>
                    {this.state.isLoading ? <p>Loading</p> : <Post post={this.state.post} />}
                </div>
                <Footer />
            </Fragment>
        )

    }
}


export default PostPage;