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
        const userId = localStorage.getItem('userId');

        if (!this.context.user) {
            return (
                <header>
                    <Link to={"/"} className={styles.forum}>{"< Forum />"}</Link>
                    <div className={styles.links}>
                        <Link to='/rules'>Rules</Link>
                    </div>
                    <Button type={"default"} text="Login" link={'/login'} />
                </header>
            )
        }
        return (
            <header>
                <Link to={"/"} className={styles.forum}>{"< Forum />"}</Link>
                <div className={styles.links}>
                    <Link to='/rules'>Rules</Link>
                </div>
                <div className={styles.links}>
                    <Link to={`/profile/${userId}`}>Profile</Link>
                </div>
            </header>
        )
    }
}

export default Header;
