import React from 'react';
import CreatePost from '.';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
jest.mock('../error-message', () => 'ErrorMessage');

describe('Create Post component', () => {
    it('should render the component', () => {
        const tree = renderer.create(
            <BrowserRouter>
                <CreatePost />
            </BrowserRouter>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
})