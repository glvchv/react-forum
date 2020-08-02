import React from 'react';
import styles from './index.module.css';

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
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
                    <a>
                        Profile
                    </a>
                </div>
                <a href="#"><button>Login</button></a>
            </header>
        )
    }
}

export default Header;
