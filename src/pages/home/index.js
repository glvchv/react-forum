import React from 'react';
import authContext from '../../context/authContext';
import Header from '../../components/header';
import Minified from '../../components/minified-post';
import styles from './index.module.css';
import { getAllPosts } from '../../services/postService';
import Footer from '../../components/footer';
import Spinner from '../../components/spinner';
import SearchField from '../../components/search-field';
import Pagination from '../../components/pagination';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            isLoading: true,
            filterBy: 'all',
            filtered: [],
            postsPerPage: 4,
            currentPage: 1,
        }

        this.filterPostsByWord = this.filterPostsByWord.bind(this);
        this.filterBySelect = this.filterBySelect.bind(this);
        this.filterByButton = this.filterByButton.bind(this);
    }
    static contextType = authContext;

    componentDidMount() {
        const getPosts = async () => {
            const allPosts = await getAllPosts();
            this.setState({
                posts: allPosts,
                isLoading: false,
                filtered: allPosts
            })
        }
        getPosts();
    }

    componentWillUnmount() {
        console.log('unmonting')
    }

    filterPostsByWord(e) {
        this.setState({
            filterBy: e.target.value,
            isLoading: true
        })
        const filteredPosts = this.state.posts.filter(p => p.title.toLowerCase().includes(e.target.value));
        this.setState({
            filtered: filteredPosts,
            isLoading: false
        });
    };

    filterBySelect(e) {
        this.setState({ filterBy: e.target.value, isLoading: true });
        const defaultPosts = this.state.posts;
        switch (e.target.value) {
            case 'all': this.setState({ filtered: defaultPosts, isLoading: false }); break;
            default:
                const filteredPosts = this.state.posts.filter(p => p.category === e.target.value);
                this.setState({
                    filtered: filteredPosts,
                    isLoading: false
                }); break;
        }
    }
    filterByButton(e) {
        if (e.target.value === 'newest') {
            const sorted = this.state.posts.sort((a, b) => new Date(b.date) - new Date(a.date));
            this.setState({
                filtered: sorted
            })
        }
        if (e.target.value === 'top') {
            const sorted = this.state.posts.sort((a, b) => b.likes.length - a.likes.length);
            this.setState({
                filtered: sorted
            })
        }
    }
    paginate = (number) => {
        this.setState({
            currentPage: number
        })
    };

    render() {
        const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
        const currentPosts = this.state.filtered.slice(indexOfFirstPost, indexOfLastPost);
        return (
            <div>
                <Header />
                {this.state.isLoading && <Spinner />}
                <div className={styles.container}>

                    <SearchField filterBySelect={this.filterBySelect}
                        filterPostsByWord={this.filterPostsByWord}
                        filterByButton={this.filterByButton}
                        filterBy={this.state.filterBy} />
                    {this.state.filtered.length === 0 && <p className={styles.notfound}>None posts found!</p>}
                    {currentPosts.map(post => {
                        return (
                            <Minified key={post._id} post={post} />
                        )
                    })}
                    <div className={styles['page-wrapper']}>
                        <Pagination totalPosts={this.state.filtered.length}
                            postsPerPage={this.state.postsPerPage}
                            paginate={this.paginate} />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default HomePage;