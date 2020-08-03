import React from 'react';
import styles from './index.module.css';
import authContext from '../../context/authContext';

class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    static contextType = authContext;

    render() {
        if (!this.context.user) {
            return (
                <header>
                <a className={styles.forum}>Forum</a>
                <div className={styles.links}>
                    <a>
                        Rules
                    </a>
                </div>
                <a href="#"><button>Login</button></a>
            </header>
            )
        }
        return (
            <header>
                <a className={styles.forum}>Forum</a>
                <div className={styles.links}>
                    <a> 
                        Posts
                    </a>
                    <a>
                        Rules
                    </a>
                </div>
                <a href="#">Profile</a>
            </header>
        )
    }
}

export default Header;
