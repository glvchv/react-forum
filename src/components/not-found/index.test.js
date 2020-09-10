import React from 'react';
import renderer from 'react-test-renderer';
import NotFound from '.';
import { BrowserRouter } from 'react-router-dom';

jest.mock('../header', () => 'Header');
jest.mock('../footer', () => 'Footer');

describe('Not-found component', () => {
    it('should render component', () => {
        const tree = renderer.create(
            <BrowserRouter>
                <NotFound />
            </BrowserRouter>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
})