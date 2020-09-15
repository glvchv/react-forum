import React from 'react';
import renderer from 'react-test-renderer';
import UserInfo from '.';
import { BrowserRouter } from 'react-router-dom';

jest.mock('../minified-post', () => 'MinifiedPost');

const user = {
    _id: '5f38e64772f6952ab4fae3f0',
    username: 'vld175',
    posts: [{ title: '0' }, { title: '1' }, { title: '2' }]
}

describe('User-info component', () => {
    it('should render user\'s own profile', () => {
        localStorage.setItem('userId', '5f38e64772f6952ab4fae3f0');
        const tree = renderer.create(
            <BrowserRouter>
                <UserInfo user={user} />
            </BrowserRouter>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render another user\'s profile', () => {
        localStorage.setItem('userId', '123');
        const tree = renderer.create(
            <BrowserRouter>
                <UserInfo user={user} />
            </BrowserRouter>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});