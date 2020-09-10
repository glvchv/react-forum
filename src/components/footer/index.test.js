import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '.';
import { BrowserRouter } from 'react-router-dom';

describe('Footer component', () => {
    it('should render footer', () => {
        const tree = renderer.create(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
})