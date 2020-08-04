import React from 'react';
import authContext from '../../context/authContext';
import Header from '../../components/header';
import Post from '../../components/post';
import styles from './index.module.css';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

    }
    static contextType = authContext;

    render() {
        return (
            <div>
                <Header />
                <div className={styles.container}>
                    <Post />
                </div>
            </div>
        )
    }
}

export default HomePage;