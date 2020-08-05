import React from 'react';
import styles from './index.module.css';
import authContext from '../../context/authContext';
import Button from '../button';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    static contextType = authContext;

    render() {
        if (!this.context.user) {
            return (
                <header>
                <Link to={"/"} className={styles.forum}>{"< Forum />"}</Link>
                <div className={styles.links}>
                    <a>
                        Rules
                    </a>
                </div>
                <Button type={"default"} text="Login" link={'/login'}/>
            </header>
            )
        }
        return (
            <header>
                <Link to={"/"} className={styles.forum}>{"< Forum />"}</Link>
                <div className={styles.links}>
                    <a className={styles.a}> 
                        Posts
                    </a>
                    <a className={styles.a}>
                        Rules
                    </a>
                </div>
                <a href="#">Profile</a>
            </header>
        )
    }
}

export default Header;
