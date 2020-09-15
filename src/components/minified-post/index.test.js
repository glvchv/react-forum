import React from 'react';
import renderer from 'react-test-renderer';
import MinifiedPost from '.';
import AuthContext from '../../context/authContext';
import { BrowserRouter } from 'react-router-dom';

const post = {
    author: {
        username: 'vld',
        avatarUrl: 'http://localhost:0000/test'
    },
    _id: '123',
    likes: ['a', 'b', 'c'],
    category: 'testing',
    replies: ['a', 'b', 'c'],
    title: 'Test',
    date: '10.08.2020',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
}

describe('Minified-post component', () => {
    it('should render component for guests', () => {
        const tree = renderer.create(
            <BrowserRouter>
                <MinifiedPost post={post} />
            </BrowserRouter>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render component for auth users', () => {
        const tree = renderer.create(
            <AuthContext.Provider value={{
                user: {
                    loggedIn: true
                }
            }}>
                <BrowserRouter>
                    <MinifiedPost post={post} />
                </BrowserRouter>
            </AuthContext.Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
})