import React from 'react';
import renderer from 'react-test-renderer';
import Header from '.';
import { BrowserRouter } from 'react-router-dom';
import AuthContext from '../../context/authContext';

jest.mock('../button', () => 'Button');


describe('Header component', () => {
    it('should render guest links', () => {
        const tree = renderer.create(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render auth links', () => {
        localStorage.setItem('userId', 123)
        const tree = renderer.create(
            <AuthContext.Provider value={{
                user: {
                    loggedIn: true
                }
            }}>
                <BrowserRouter>
                    <Header />
                </BrowserRouter>

            </AuthContext.Provider>
        ).toJSON();
    })
})