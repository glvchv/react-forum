import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Post from '.';
const props = {
    post: {
        _id: '123',
        text: 'Testing the description value of the post',
        title: 'TESTTESTTEST',
        category: 'other',
        likes: [1,1,1,1],
        replies: [1,1,1,1],
        date: '13.09.2020',
        author: {
            _id: '123',
            avatarUrl: 'https://localhost:0000/test',
            username: 'vld',
        },
        hasLiked: false,
        handleClick: () => {}
    }
}
describe('Post component', () => {
    it('should render not liked post', () => {
        const tree = renderer.create(
            <BrowserRouter>
                <Post {...props}/>
            </BrowserRouter>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render liked post', () => {
        props.hasLiked= true;
        const tree = renderer.create(
            <BrowserRouter>
                <Post {...props}/>
            </BrowserRouter>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render post for author', () => {
        localStorage.setItem('userId', '123');
        const tree = renderer.create(
            <BrowserRouter>
                <Post {...props}/>
            </BrowserRouter>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
})