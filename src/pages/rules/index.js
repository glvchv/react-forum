import React, { Fragment } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import rules from '../../utils/rules';
import Rule from '../../components/rule';
import styles from './index.module.css';

const RulesPage = () => {
    return (
        <Fragment>
            <Header />
            <div className={styles.container}>
                <ul className={styles.list}>
                    {rules.map((r, i) => (
                        <li key={i}><Rule index={i + 1} title={r.title} text={r.text} /></li>
                    ))}
                </ul>
            </div>
            <Footer />
        </Fragment>
    )
}

export default RulesPage;