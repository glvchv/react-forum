import React from 'react';
import authContext from '../../context/authContext';
import Header from '../../components/header';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

    }
    static contextType = authContext;

    render() {
        return (
            <div>
                <Header />
                <div>{this.context.user ? 'loggedin' : 'guest'}</div>
            </div>
        )
    }
}

export default HomePage;